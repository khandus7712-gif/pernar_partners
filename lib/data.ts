export const BRAND = {
  nameKo: "퍼나르파트너스",
  nameEn: "PERNAR PARTNERS",
  short: "PERNAR",
  slogan: "희망을 퍼나르는 마케팅",
  description:
    "실제 매장을 운영하는 사장이 만드는, 사장님 눈높이 블로그 초청 대행"
};

export const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/service" },
  { label: "Case Study", href: "/cases" },
  { label: "Blogger Network", href: "/network" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" }
];

export const HOME_BADGES = [
  "300+ 블로거 네트워크",
  "실제 매장 운영 경험 기반",
  "지역 맛집/카페 특화"
];

export const HOME_SERVICES = [
  {
    title: "블로그 초청 대행",
    desc:
      "지역/카테고리에 맞는 블로거를 선별해 방문과 리뷰를 유도합니다.",
    icon: "📨"
  },
  {
    title: "리뷰/콘텐츠 퀄리티 관리",
    desc:
      "사진/글 기준을 공유해 과장 없이 맛과 분위기가 전달되도록 돕습니다.",
    icon: "✅"
  },
  {
    title: "결과 리포트 & 다음 액션",
    desc:
      "리뷰 수, 저장 수 등 지표를 보고 다음 스텝을 제안합니다.",
    icon: "📊"
  }
];

export const DIFFERENTIATORS = [
  { title: "실매장 운영 경험", desc: "‘아롱하다’ 운영 경험 기반의 실전형 관점", icon: "🏪" },
  { title: "검증된 300명 네트워크", desc: "카테고리·지역별 선별된 블로거", icon: "🧑‍💻" },
  { title: "사장님 눈높이 프로세스", desc: "현장 맞춤형 진행과 소통", icon: "🧭" },
  { title: "숫자로 말하는 결과", desc: "지표 기반 리포트 제공", icon: "🔢" }
];

export const CASES = [
  {
    id: "changwon-hotpot",
    title: "창원 전골 전문점",
    goal: "리뷰 부족, 지역 인지도 낮음",
    action: "맛/분위기 전달 중심의 블로거 매칭과 일정 분산 게시",
    result: "리뷰 수 3배 증가, 저장 수 2배",
    type: "전골/한식"
  },
  {
    id: "busan-cafe",
    title: "부산 카페",
    goal: "사진 퀄리티 개선 및 신메뉴 노출",
    action: "사진 중심 카테고리 블로거 집중 초청",
    result: "리뷰 당 저장 수 1.8배",
    type: "카페/디저트"
  },
  {
    id: "masan-bbq",
    title: "마산 바비큐",
    goal: "저녁 회전율 상승",
    action: "퇴근 시간대 예약 유도 메시지 구성",
    result: "저녁대 방문 35% 증가",
    type: "바비큐/고기"
  }
];

export const PACKAGES = [
  {
    name: "BASIC",
    features: ["블로거 5명 초청", "기본 리포트"],
    priceNote: "금액은 상담 후 안내"
  },
  {
    name: "STANDARD",
    features: ["블로거 10명 초청", "리뷰/사진 퀄리티 체크", "간단 리포트"],
    priceNote: "금액은 상담 후 안내"
  },
  {
    name: "PREMIUM",
    features: ["블로거 15명 초청", "상세 리포트", "후속 마케팅 제안"],
    priceNote: "금액은 상담 후 안내"
  }
];

export const FAQS = [
  { q: "체험단/블로거 초청과 뭐가 다른가요?", a: "사장님 관점의 검증·가이드가 핵심입니다." },
  { q: "리뷰 내용은 조작하지 않나요?", a: "사실 기반 가이드만 제공하고 과장은 지양합니다." },
  { q: "지역 제한이 있나요?", a: "창원/경남/부산 중심이나 협의 가능합니다." },
  { q: "결과는 어떻게 확인하나요?", a: "리뷰/저장 등 지표 리포트를 제공합니다." }
];

export const NETWORK_STATS = {
  total: 300,
  categories: [
    { label: "맛집", value: 40 },
    { label: "카페", value: 30 },
    { label: "디저트", value: 15 },
    { label: "라이프스타일", value: 15 }
  ],
  regions: [
    { label: "창원", value: 45 },
    { label: "경남", value: 30 },
    { label: "부산", value: 25 }
  ]
};

export const BLOG_POSTS = [
  {
    slug: "blogger-invite-basics",
    title: "블로거 초청, 기본부터 제대로",
    summary: "가게에 맞는 블로거를 선별하는 기준과 체크리스트",
    date: "2025-10-01",
    tags: ["블로그 마케팅", "자영업"]
  },
  {
    slug: "photo-guidelines",
    title: "사진 가이드만 바꿔도 달라집니다",
    summary: "사진/글 가이드가 결과에 미치는 영향",
    date: "2025-10-12",
    tags: ["콘텐츠", "네이버 플레이스"]
  },
  {
    slug: "reporting-metrics",
    title: "리포트에서 봐야 할 3가지",
    summary: "리뷰 수, 저장 수, 키워드 노출",
    date: "2025-11-01",
    tags: ["데이터", "운영"]
  }
];



