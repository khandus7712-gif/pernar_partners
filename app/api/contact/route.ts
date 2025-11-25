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

    // 환경 변수 가져오기
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    
    // Vercel에서는 따옴표가 포함될 수 있으므로 처리
    if (privateKey) {
      // 따옴표 제거 (시작과 끝의 따옴표)
      privateKey = privateKey.replace(/^["']|["']$/g, "");
      // \n을 실제 줄바꿈으로 변환
      privateKey = privateKey.replace(/\\n/g, "\n");
    }
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // 디버깅: 환경 변수 확인 (서버 콘솔에 출력)
    console.log("=== 환경 변수 디버깅 ===");
    console.log("GOOGLE_SHEET_ID:", spreadsheetId ? `${spreadsheetId.substring(0, 10)}...` : "undefined");
    console.log("GOOGLE_SERVICE_ACCOUNT_EMAIL:", clientEmail || "undefined");
    console.log("GOOGLE_PRIVATE_KEY exists:", !!privateKey);
    console.log("GOOGLE_PRIVATE_KEY length:", privateKey?.length || 0);
    console.log("GOOGLE_PRIVATE_KEY starts with:", privateKey?.substring(0, 30) || "N/A");
    console.log("process.env keys with GOOGLE:", Object.keys(process.env).filter(k => k.includes("GOOGLE")));
    console.log("NODE_ENV:", process.env.NODE_ENV);
    console.log("=========================");

    // 환경 변수 검증
    if (!spreadsheetId) {
      console.error("ERROR: GOOGLE_SHEET_ID가 설정되지 않았습니다!");
      return NextResponse.json(
        { 
          error: "Google Sheet ID가 설정되지 않았습니다.",
          debug: {
            hasSheetId: false,
            hasEmail: !!clientEmail,
            hasPrivateKey: !!privateKey,
            envKeys: Object.keys(process.env).filter(k => k.includes("GOOGLE")),
            nodeEnv: process.env.NODE_ENV
          }
        },
        { status: 500 }
      );
    }

    if (!clientEmail) {
      console.error("ERROR: GOOGLE_SERVICE_ACCOUNT_EMAIL이 설정되지 않았습니다!");
      return NextResponse.json(
        { 
          error: "Service Account Email이 설정되지 않았습니다.",
          debug: {
            hasSheetId: !!spreadsheetId,
            hasEmail: false,
            hasPrivateKey: !!privateKey
          }
        },
        { status: 500 }
      );
    }

    if (!privateKey) {
      console.error("ERROR: GOOGLE_PRIVATE_KEY가 설정되지 않았습니다!");
      return NextResponse.json(
        { 
          error: "Private Key가 설정되지 않았습니다.",
          debug: {
            hasSheetId: !!spreadsheetId,
            hasEmail: !!clientEmail,
            hasPrivateKey: false
          }
        },
        { status: 500 }
      );
    }

    // Google Sheets 인증
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

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
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { 
        error: "문의 전송 중 오류가 발생했습니다.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

