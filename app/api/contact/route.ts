import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessType, message } = body;

    // 필수 필드 검증
    if (!name || !email || !phone || !businessType || !message) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    // 여기에 실제 이메일 전송 또는 Google Sheets 저장 로직 추가
    // 예: Google Sheets API, 이메일 서비스 (SendGrid, Resend 등)
    
    // 현재는 콘솔에만 출력 (개발용)
    console.log("Contact Form Submission:", {
      name,
      email,
      phone,
      businessType,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: 실제 데이터 저장 로직 구현
    // - Google Sheets API 연동
    // - 또는 이메일 전송
    // - 또는 데이터베이스 저장

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

