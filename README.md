## 퍼나르파트너스 랜딩 사이트

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

3) 프로덕션 빌드

```bash
npm run build && npm start
```

### 구조

- `app/`: 라우팅 및 페이지
- `components/`: 재사용 컴포넌트 (레이아웃, 버튼, 섹션, 카드, 폼)
- `lib/data.ts`: 더미 데이터/상수

### 노트

- SEO 메타 태그는 `app/layout.tsx`의 `metadata`에 구성됨
- 폼 제출은 현재 콘솔 로그 + 간단 메시지로 처리 (API 연동 예정)



