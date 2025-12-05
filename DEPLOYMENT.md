# 배포 가이드 - pernar.kr

## Vercel 배포 및 도메인 연결

### 1. GitHub에 코드 푸시

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Vercel 프로젝트 생성

1. [Vercel](https://vercel.com)에 로그인
2. "Add New Project" 클릭
3. GitHub 저장소 선택
4. 프로젝트 설정:
   - Framework Preset: Next.js
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 감지)
   - Output Directory: `.next` (자동 감지)

### 3. 환경 변수 설정

Vercel 대시보드 → Settings → Environment Variables에서 추가:

```
GOOGLE_SHEET_ID=10EFNv6QNMJtodYHbmxBeQ5iDjpCwP3M2yx9GQLfYa0M
```

(필요한 다른 환경 변수도 추가)

### 4. 도메인 연결 (pernar.kr)

1. Vercel 대시보드 → 프로젝트 선택
2. Settings → Domains
3. "Add Domain" 클릭
4. `pernar.kr` 입력
5. Vercel이 제공하는 DNS 레코드 확인:
   - A 레코드: `76.76.21.21` (또는 Vercel이 제공하는 IP)
   - 또는 CNAME: `cname.vercel-dns.com`

### 5. 도메인 등록업체에서 DNS 설정

도메인을 구매한 업체(가비아, 후이즈 등)에서:

#### 루트 도메인 (pernar.kr)
```
타입: A
호스트: @
값: 76.76.21.21 (Vercel이 제공한 IP)
TTL: 3600
```

#### www 서브도메인 (선택사항)
```
타입: CNAME
호스트: www
값: cname.vercel-dns.com
TTL: 3600
```

### 6. DNS 전파 대기

- DNS 변경 후 전파까지 보통 10분~24시간 소요
- Vercel 대시보드에서 도메인 상태 확인
- "Valid Configuration" 표시되면 완료

### 7. SSL 인증서

- Vercel이 자동으로 Let's Encrypt SSL 인증서 발급
- HTTPS 자동 활성화

## 라우트 구조

- `/` - 랜딩 페이지 (고객층 선택)
- `/retail` - 자영업/식당/카페 홈페이지
- `/construction` - 공사업체/철거/장비업 홈페이지
- `/retail/contact` - 자영업/식당/카페 상담 페이지
- `/construction/contact` - 공사업체/철거/장비업 상담 페이지

## 추가 설정

### 서브도메인 사용 (선택사항)

두 개의 입구를 서브도메인으로 분리하려면:

1. Vercel에서 추가 도메인 설정:
   - `retail.pernar.kr`
   - `construction.pernar.kr`

2. 각각 별도 프로젝트로 배포하거나, 같은 프로젝트에서 미들웨어로 라우팅 분기

## 문제 해결

### DNS 설정이 적용되지 않을 때
- DNS 전파 확인: https://dnschecker.org
- TTL 값 확인 (너무 높으면 변경 시간이 오래 걸림)

### SSL 인증서 발급 실패
- DNS 설정이 완전히 전파되었는지 확인
- Vercel 대시보드에서 "Retry" 클릭

### 빌드 오류
- 환경 변수 확인
- 로컬에서 `npm run build` 테스트

