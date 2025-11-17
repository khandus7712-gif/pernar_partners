import { Matching } from "../types/matching";

export const MATCHINGS: Matching[] = [
  {
    id: "match-001",
    매장ID: "cafe-haru",
    블로거ID: "seoul-foodie",
    방문날짜: "2025-11-12",
    제공메뉴: ["시그니처 라떼", "크루아상 와플"],
    업로드기한: "2025-11-18",
    업로드URL: "",
    성과지표: {
      조회수: undefined,
      키워드노출: ["합정카페", "디저트맛집"],
      인스타전환수: undefined
    },
    상태: "진행중"
  },
  {
    id: "match-002",
    매장ID: "bbq-master",
    블로거ID: "busan-brunch",
    방문날짜: "2025-10-25",
    제공메뉴: ["숙성 삼겹살", "시그니처 칵테일"],
    업로드기한: "2025-10-31",
    업로드URL: "https://blog.naver.com/busan_brunch/100",
    성과지표: {
      조회수: 3200,
      키워드노출: ["수원고기집", "회식장소추천"],
      인스타전환수: 45
    },
    상태: "완료"
  },
  {
    id: "match-003",
    매장ID: "cafe-haru",
    블로거ID: "daejeon-family",
    방문날짜: "2025-11-20",
    제공메뉴: ["어린이 세트", "시즈널 라떼"],
    업로드기한: "2025-11-27",
    업로드URL: "",
    성과지표: {
      조회수: undefined,
      키워드노출: ["아이와가기좋은카페"],
      인스타전환수: undefined
    },
    상태: "대기"
  }
];


