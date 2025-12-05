## 퍼나르마케팅 랜딩 사이트

Next.js (App Router) + TypeScript + Tailwind CSS

### 개발 실행

1) 의존성 설치

```bash
npm install
```

2) 로컬 개발 서버

```bash
npm run dev
```

서버는 `http://localhost:3001`에서 실행됩니다.

3) 프로덕션 빌드

```bash
npm run build && npm start
```

### 구조

- `app/`: 라우팅 및 페이지
  - `app/page.tsx`: 랜딩 페이지 (고객층 선택)
  - `app/(retail)/`: 자영업/식당/카페 섹션
  - `app/(construction)/`: 공사업체/철거/장비업 섹션
  - `app/(site)/`: 기존 사이트 페이지
  - `app/api/`: API 라우트
- `components/`: 재사용 컴포넌트
  - `Layout.tsx`: 헤더/푸터 포함 레이아웃
  - `Forms/ContactForm.tsx`: 문의 폼 컴포넌트
- `lib/`: 유틸리티 및 데이터

### 라우트 구조

- `/` - 랜딩 페이지 (고객층 선택)
- `/retail` - 자영업/식당/카페 홈페이지
- `/retail/contact` - 자영업/식당/카페 상담 페이지
- `/construction` - 공사업체/철거/장비업 홈페이지
- `/construction/contact` - 공사업체/철거/장비업 상담 페이지

### 배포

Vercel을 통한 배포 및 도메인 연결 가이드는 `DEPLOYMENT.md`를 참고하세요.

- 도메인: `pernar.kr`
- 배포 플랫폼: Vercel

### 노트

- SEO 메타 태그는 `app/layout.tsx`의 `metadata`에 구성됨
- 폼 제출은 `/api/contact` 엔드포인트로 전송됨 (Google Sheets 연동 예정)
- 환경 변수는 `.env.local`에 설정 (Vercel에서는 Environment Variables에 추가)




