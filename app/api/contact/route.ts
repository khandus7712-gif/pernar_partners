import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, category, contact, interest, message } = body;

    // 필수 필드 검증
    if (!name || !contact) {
      return NextResponse.json(
        { error: "상호명과 연락처는 필수입니다." },
        { status: 400 }
      );
    }

    // Google Sheets 인증
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      return NextResponse.json(
        { error: "Google Sheet ID가 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    // 현재 날짜/시간
    const now = new Date();
    const timestamp = now.toLocaleString("ko-KR", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // 데이터 추가
    const values = [
      [
        timestamp,
        name,
        category || "",
        contact,
        interest || "",
        message || "",
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "문의!A:F", // 시트 이름과 범위
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return NextResponse.json(
      { success: true, message: "문의가 성공적으로 전송되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "문의 전송 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

