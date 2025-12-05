# Google Sheets API 설정 가이드

문의 폼 데이터를 Google Sheets에 자동으로 저장하기 위한 설정 방법입니다.

## 1. Google Cloud Console 설정

### 1.1 프로젝트 생성/선택
1. [Google Cloud Console](https://console.cloud.google.com) 접속
2. 프로젝트 선택 또는 새 프로젝트 생성

### 1.2 Google Sheets API 활성화
1. 왼쪽 메뉴 → "API 및 서비스" → "라이브러리"
2. "Google Sheets API" 검색
3. "사용 설정" 클릭

### 1.3 Service Account 생성
1. "API 및 서비스" → "사용자 인증 정보"
2. 상단 "사용자 인증 정보 만들기" 클릭
3. "서비스 계정" 선택
4. 서비스 계정 정보 입력:
   - 서비스 계정 이름: `pernar-sheets-api` (원하는 이름)
   - 서비스 계정 ID: 자동 생성됨
5. "만들기" 클릭
6. 역할 선택 (선택사항, 건너뛰어도 됨)
7. "완료" 클릭

### 1.4 Service Account 키 생성
1. 생성된 서비스 계정 클릭
2. "키" 탭 클릭
3. "키 추가" → "새 키 만들기" 선택
4. 키 유형: "JSON" 선택
5. "만들기" 클릭
6. JSON 파일이 자동으로 다운로드됨

## 2. 환경 변수 설정

### 2.1 로컬 개발 환경 (.env.local)

다운로드한 JSON 파일을 열고 다음 정보를 `.env.local` 파일에 추가:

```env
GOOGLE_SHEET_ID=10EFNv6QNMJtodYHbmxBeQ5iDjpCwP3M2yx9GQLfYa0M
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

**중요:**
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: JSON 파일의 `client_email` 값
- `GOOGLE_PRIVATE_KEY`: JSON 파일의 `private_key` 값 (전체 키, 줄바꿈 문자 `\n` 포함)
- `GOOGLE_PRIVATE_KEY`는 큰따옴표로 감싸야 합니다

### 2.2 Vercel 환경 변수 설정

1. Vercel 대시보드 → 프로젝트 선택
2. Settings → Environment Variables
3. 다음 변수 추가:

```
GOOGLE_SHEET_ID
= 10EFNv6QNMJtodYHbmxBeQ5iDjpCwP3M2yx9GQLfYa0M

GOOGLE_SERVICE_ACCOUNT_EMAIL
= your-service-account@project-id.iam.gserviceaccount.com

GOOGLE_PRIVATE_KEY
= "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

**주의:** Vercel에서 `GOOGLE_PRIVATE_KEY`를 입력할 때:
- 전체 키를 복사 (줄바꿈 포함)
- 큰따옴표는 입력하지 않아도 됩니다
- 줄바꿈 문자(`\n`)는 그대로 유지

## 3. Google Sheets 문서 설정

### 3.1 시트 생성
1. Google Sheets 문서 열기
2. 하단 시트 탭에서 "+" 클릭하여 새 시트 추가
3. 시트 이름을 **"문의"**로 변경

### 3.2 헤더 행 추가 (선택사항)
첫 번째 행에 다음 헤더를 추가할 수 있습니다:

| 날짜/시간 | 유형 | 이름 | 이메일 | 전화번호 | 업종 | 메시지 |
|---------|------|------|--------|---------|------|--------|

### 3.3 Service Account 공유
1. Google Sheets 문서에서 "공유" 버튼 클릭
2. Service Account 이메일 주소 입력 (JSON 파일의 `client_email` 값)
3. 권한: **"편집자"** 선택
4. "알림 보내기" 체크 해제 (선택사항)
5. "공유" 클릭

## 4. 테스트

1. 로컬 개발 서버 실행:
   ```bash
   npm run dev
   ```

2. 문의 폼 페이지 접속: `http://localhost:3001/contact`

3. 테스트 데이터 입력 후 제출

4. Google Sheets에서 "문의" 시트 확인
   - 새 행이 추가되었는지 확인
   - 데이터가 올바르게 저장되었는지 확인

## 5. 문제 해결

### 데이터가 저장되지 않는 경우

1. **환경 변수 확인**
   - `.env.local` 파일이 프로젝트 루트에 있는지 확인
   - 환경 변수 이름이 정확한지 확인
   - `GOOGLE_PRIVATE_KEY`에 줄바꿈 문자(`\n`)가 포함되어 있는지 확인

2. **Service Account 권한 확인**
   - Google Sheets 문서에 Service Account 이메일이 공유되어 있는지 확인
   - 권한이 "편집자" 이상인지 확인

3. **Google Sheets API 활성화 확인**
   - Google Cloud Console에서 Google Sheets API가 활성화되어 있는지 확인

4. **시트 이름 확인**
   - Google Sheets에 "문의" 시트가 존재하는지 확인
   - 시트 이름이 정확히 "문의"인지 확인 (대소문자 구분)

5. **서버 로그 확인**
   - Vercel 대시보드 → 프로젝트 → Deployments → 최신 배포 → Functions 로그 확인
   - 또는 로컬에서 터미널 로그 확인

### 일반적인 에러

- **"Google Service Account credentials not found"**
  → 환경 변수가 설정되지 않았거나 이름이 잘못됨

- **"The caller does not have permission"**
  → Google Sheets 문서에 Service Account가 공유되지 않았거나 권한이 부족함

- **"Unable to parse range"**
  → 시트 이름이 "문의"가 아니거나 시트가 존재하지 않음

