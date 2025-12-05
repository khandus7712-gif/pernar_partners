import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@lib/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessType, message, type } = body;

    // 필수 필드 검증
    if (!name || !email || !phone || !businessType || !message) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    // Google Sheets에 데이터 저장
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) {
      console.error("GOOGLE_SHEET_ID environment variable is not set");
      // 환경 변수가 없어도 사용자에게는 성공 메시지 반환 (보안상)
      return NextResponse.json(
        { message: "문의가 성공적으로 전송되었습니다." },
        { status: 200 }
      );
    }

    try {
      const timestamp = new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
      });

      // 문의 유형에 따라 다른 시트에 저장하거나, 같은 시트에 구분자 추가
      const formType = type || "contact"; // 기본값: contact, blogger_apply 등

      // Google Sheets에 추가할 데이터 행
      const rowData = [
        timestamp,
        formType,
        name,
        email,
        phone,
        businessType,
        message,
      ];

      // "문의" 시트에 데이터 추가 (시트가 없으면 자동 생성되지 않으므로 먼저 생성 필요)
      await appendToSheet(sheetId, "문의!A:G", [rowData]);

      console.log("Contact form data saved to Google Sheets:", {
        name,
        email,
        phone,
        businessType,
        timestamp,
      });
    } catch (sheetsError) {
      // Google Sheets 저장 실패해도 사용자에게는 성공 메시지 반환
      console.error("Failed to save to Google Sheets:", sheetsError);
      // 개발 환경에서는 에러를 상세히 로깅
      if (process.env.NODE_ENV === "development") {
        console.error("Sheets error details:", sheetsError);
      }
    }

    return NextResponse.json(
      { message: "문의가 성공적으로 전송되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

