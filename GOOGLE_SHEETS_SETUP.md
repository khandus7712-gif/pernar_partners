# Google Sheets 연동 설정 가이드

문의 폼 데이터를 Google Sheets에 자동으로 저장하기 위한 설정 방법입니다.

## 1단계: Google Cloud 프로젝트 생성

1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 상단 프로젝트 선택 → **새 프로젝트** 클릭
3. 프로젝트 이름 입력 (예: "pernar-partners") → **만들기** 클릭
4. 생성된 프로젝트 선택

## 2단계: Google Sheets API 활성화

1. 왼쪽 메뉴 → **API 및 서비스** → **라이브러리**
2. 검색창에 "Google Sheets API" 입력
3. **Google Sheets API** 선택 → **사용 설정** 클릭

## 3단계: Service Account 생성

1. 왼쪽 메뉴 → **API 및 서비스** → **사용자 인증 정보**
2. 상단 **+ 사용자 인증 정보 만들기** → **서비스 계정** 선택
3. 서비스 계정 이름 입력 (예: "pernar-sheets") → **만들기** 클릭
4. 역할 선택: **편집자** (또는 **소유자**) → **완료** 클릭

## 4단계: Service Account 키 다운로드

1. 생성된 서비스 계정 클릭
2. **키** 탭 → **키 추가** → **새 키 만들기**
3. 키 유형: **JSON** 선택 → **만들기** 클릭
4. JSON 파일이 자동으로 다운로드됩니다 (이 파일을 안전하게 보관하세요!)

## 5단계: Google Sheets 생성 및 공유

1. [Google Sheets](https://sheets.google.com/) 접속
2. 새 스프레드시트 생성
3. 첫 번째 시트 이름을 **"문의"**로 변경
4. 첫 번째 행에 헤더 추가:
   ```
   A1: 날짜/시간
   B1: 상호명
   C1: 업종/지역
   D1: 연락처
   E1: 관심 서비스
   F1: 메시지
   ```
5. 스프레드시트 우측 상단 **공유** 버튼 클릭
6. 다운로드한 JSON 파일에서 `client_email` 값을 복사 (예: `pernar-sheets@...iam.gserviceaccount.com`)
7. 이 이메일 주소를 공유 대상에 추가 → **편집자** 권한 부여 → **완료**

## 6단계: 환경 변수 설정

### 로컬 개발 환경 (.env.local)

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Private-Key-Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-spreadsheet-id-here
```

**중요:**
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: 다운로드한 JSON 파일의 `client_email` 값
- `GOOGLE_PRIVATE_KEY`: 다운로드한 JSON 파일의 `private_key` 값 (전체를 따옴표로 감싸고, `\n`은 그대로 유지)
- `GOOGLE_SHEET_ID`: Google Sheets URL에서 확인
  - 예: `https://docs.google.com/spreadsheets/d/1ABC123...XYZ/edit`
  - `1ABC123...XYZ` 부분이 Sheet ID입니다

### Vercel 배포 환경

1. [Vercel Dashboard](https://vercel.com/dashboard) 접속
2. 프로젝트 선택 → **Settings** → **Environment Variables**
3. 다음 변수들을 추가:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY` (전체를 따옴표로 감싸서 입력)
   - `GOOGLE_SHEET_ID`
4. 각 환경(Production, Preview, Development)에 적용
5. **Save** 후 재배포

## 7단계: 테스트

1. 로컬 개발 서버 실행: `npm run dev`
2. `/contact` 페이지 접속
3. 문의 폼 작성 후 제출
4. Google Sheets에서 데이터가 추가되었는지 확인

## 문제 해결

### "Google Sheet ID가 설정되지 않았습니다" 오류
- 환경 변수 `GOOGLE_SHEET_ID`가 올바르게 설정되었는지 확인
- Vercel의 경우 재배포 필요

### "인증 오류" 또는 "권한 없음" 오류
- Service Account 이메일이 Google Sheets에 공유되었는지 확인
- Service Account에 **편집자** 권한이 부여되었는지 확인
- JSON 키 파일의 `private_key`가 올바르게 복사되었는지 확인 (따옴표 포함)

### "API가 활성화되지 않았습니다" 오류
- Google Sheets API가 프로젝트에서 활성화되었는지 확인

## 보안 주의사항

⚠️ **절대 다음을 하지 마세요:**
- JSON 키 파일을 GitHub에 커밋하지 마세요
- `.env.local` 파일을 GitHub에 커밋하지 마세요
- `GOOGLE_PRIVATE_KEY`를 공개적으로 공유하지 마세요

✅ **안전한 방법:**
- `.gitignore`에 `.env.local` 추가 (이미 포함되어 있음)
- Vercel의 Environment Variables 사용
- Service Account는 최소 권한만 부여


