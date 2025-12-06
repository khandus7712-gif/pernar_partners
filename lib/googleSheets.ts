import { google } from "googleapis";

// Google Sheets API 클라이언트 생성
export async function getGoogleSheetsClient() {
  try {
    // Service Account 인증 정보는 환경 변수에서 가져옵니다
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!serviceAccountEmail || !privateKey) {
      throw new Error("Google Service Account credentials not found in environment variables");
    }

    const auth = new google.auth.JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    return sheets;
  } catch (error) {
    console.error("Error initializing Google Sheets client:", error);
    throw error;
  }
}

// Google Sheets에 데이터 추가
export async function appendToSheet(
  sheetId: string,
  range: string,
  values: (string | number)[][]
) {
  try {
    const sheets = await getGoogleSheetsClient();

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: range,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: values,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error appending to Google Sheets:", error);
    throw error;
  }
}


