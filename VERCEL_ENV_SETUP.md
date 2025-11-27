# Vercel 환경 변수 설정 가이드

배포된 사이트(`https://pernar-partners-3j82.vercel.app`)에서 Google Sheets 연동이 작동하려면 Vercel 대시보드에서 환경 변수를 설정해야 합니다.

## 설정 방법

### 1. Vercel 대시보드 접속
1. [Vercel Dashboard](https://vercel.com/dashboard) 접속
2. 로그인 후 프로젝트 선택 (`pernar_partners` 또는 해당 프로젝트)

### 2. 환경 변수 추가
1. 프로젝트 페이지에서 **Settings** 클릭
2. 왼쪽 메뉴에서 **Environment Variables** 클릭
3. 다음 3개의 환경 변수를 추가:

#### 변수 1: GOOGLE_SERVICE_ACCOUNT_EMAIL
- **Key**: `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- **Value**: `pernarparters@pernarparters.iam.gserviceaccount.com`
- **Environment**: Production, Preview, Development 모두 선택
- **Add** 클릭

#### 변수 2: GOOGLE_PRIVATE_KEY
- **Key**: `GOOGLE_PRIVATE_KEY`
- **Value**: `.env.local` 파일의 `GOOGLE_PRIVATE_KEY` 값 전체를 복사
  ```
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGSFztXcjrOcZP\nez+KOVznLiy1RgQUz0p/6DngwSRD41gNOLAYEhcnhlysHGNLWjuLptgeMHQV/9sX\nWLAxxPPIDCSMEh2iaWt9/PoJvmoAEqo+jxce9+7kDKFG1MLogtZMZNv+XE4NZabE\nFLlM5KGEG1EGCaoxMSNYeqgyKLtjUcwRIzkg9b/AVgCvQztXAgvRSmjYNja/Dxts\ndmtTdq3R+azyO0a5B14WD0RV1rRlRJ2IpnCL44ZnyQT4+F80SNsqcPtB/BnAPvGe\nqwwf8YoUH9yl1m2/3W01Gut2y4XXiJhvCquOXg1rCRPLX2z77uF5WgOFtSJAg/HJ\nX71Y6RZHAgMBAAECggEABEImmMR0XbTqcOeNOEs+FwrzU9tSmB3RlEipAY40WK7n\nw7Ttdz7gN22XzOx5J3OjJr8pEhDpVVWe33P8qLz5nVjBai6zazsHX3fQ6OepgCHm\nfRx2mygo/cXVqt9D5ll0/8QEw4Q4+umteLWXOzMH0v4BMfeAK7lJ8IsF1LnyOFJO\nNcHao04I466nP2faPGOublmh1THIPBTUVTA05wM9QM+2/xozUxvus7J0SE3ocLuc\nPPMGIuPXO9t+G5PrYFdFJQFzSf/ncrl8rwuwVwrq5OnUKZjYducbJIzQ6rTZADOJ\n1nHei/4pnKDpLFQ6jEn9UeJFfxpMLiBi6ghemJFtsQKBgQDucGESkOPbHxPHKE4C\nDKOceN0LH2YzWAT/Lnh0XuxjdQ3kbp7lPZlfsrbEWOuFtqgPuHezhj87x4LsrKAA\n2S61fjHqQsMARrk2begRir2rVBImnnUsK3YLdmoGF0dQFFqHWC0h4VVb0pu/ntzG\n9N75L8W/8qvAeWO7v7jt7MPhtwKBgQDU4txzpvSqY1HhHxWqA4pkbT3FPqhI6BLb\nN0FV8vfq3YSZh9lqbdUn1XLgbgPfuCay/1VfdYD71bTG5JN9IzzMaMAmSU4d0QUQ\n2e+Pl/mWktCs8rwYbdT1OTJPxTtUCXhzII73SQ0hfcbxL57FlL3zCqGQK33q1x6R\nFbH4/ncv8QKBgQDDCdndvfckfj9HYYit1HjgvVzShFStGwq7Ud/mEN98W3uJp5MC\nIWkcBqvJ4JKHReojMdl4WA/RblmCD5KyHvU+MIPUA9hOmYtXIn/6GWscgiB2xpdC\nEir1JV+Eq/YBYyTKIS6J0DBqc9RC4kfl1tetLY6sfGxRfPo/0YwL0uhH8QKBgDdn\nUzhGGya88nJERL8abMn2JD1RMTrIKyAiIT7dHOhi/j92u36XVwIm6t69wwRWSLwM\n94sAabEgzQt2MWw/33LTUC6mpU3dOBRKo64bPzmQu/5Gre0tqF6ppA5epjIYxOAx\neQOiX2h3826RliCVtVmrSqDasMqNcccQfmDu2NYBAoGAZn4o9JzUa0jrSPz+exSR\n+eTrqrHT6n/oxuhCUI22LboqaGFreHTms+qVvdl+k+CEhYhBmXRfAdnpDfYU4qeI\nK8hHUiUQNIOsSFl6TOHO+GY2KC5flbc2Iya+03HiSGihXrLlu+AgdK5QjhVa75SQ\nzN9osjdLHjOFXLGWTHAG7tY=\n-----END PRIVATE KEY-----\n"
  ```
- **중요**: 따옴표(`"`) 포함해서 전체를 복사
- **Environment**: Production, Preview, Development 모두 선택
- **Add** 클릭

#### 변수 3: GOOGLE_SHEET_ID
- **Key**: `GOOGLE_SHEET_ID`
- **Value**: `10EFNv6QNMJtodYHbmxBeQ5iDjpCwP3M2yx9GQLfYa0M`
- **Environment**: Production, Preview, Development 모두 선택
- **Add** 클릭

### 3. 재배포
환경 변수를 추가한 후:
1. **Deployments** 탭으로 이동
2. 최신 배포 옆의 **⋯** (점 3개) 클릭
3. **Redeploy** 선택
4. 또는 자동으로 재배포되기를 기다림 (약 1-2분)

### 4. 테스트
재배포 완료 후:
1. `https://pernar-partners-3j82.vercel.app/contact` 접속
2. 문의 폼 작성 후 제출
3. Google Sheets에서 데이터 확인

## 주의사항

⚠️ **GOOGLE_PRIVATE_KEY 설정 시:**
- `.env.local` 파일에서 `GOOGLE_PRIVATE_KEY="..."` 부분의 값 전체를 복사
- 따옴표(`"`)도 포함해서 복사
- Vercel에 붙여넣을 때도 따옴표가 포함되어 있어야 함

## 문제 해결

### 여전히 500 에러가 발생하면:
1. 환경 변수가 올바르게 설정되었는지 확인
2. 재배포가 완료되었는지 확인 (Deployments 탭에서 확인)
3. Vercel 로그 확인 (Deployments → 최신 배포 → Functions 탭)


