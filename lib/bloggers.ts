import { Blogger } from "../types/blogger";

export const BLOGGERS: Blogger[] = [
  {
    id: "seoul-foodie",
    블로그URL: "https://blog.naver.com/seoul_foodie",
    닉네임: "서울맛집기록",
    연락처: "010-1234-0000",
    지역: "서울·수도권",
    이웃수: 5200,
    평균조회수: 1800,
    전문카테고리: ["맛집", "카페"],
    사진스타일: "밝고 선명, 인물 포함 가능",
    방문가능요일: ["화", "목", "토"],
    교통수단: "대중교통",
    작성샘플: [
      "https://blog.naver.com/seoul_foodie/123",
      "https://blog.naver.com/seoul_foodie/456"
    ],
    신뢰점수: 92,
    비고: "영상 촬영 가능, 단독 룸 선호"
  },
  {
    id: "busan-brunch",
    블로그URL: "https://blog.naver.com/busan_brunch",
    닉네임: "부산브런치일기",
    연락처: "010-2222-3333",
    지역: "부산",
    이웃수: 3100,
    평균조회수: 1100,
    전문카테고리: ["브런치", "카페", "호텔"],
    사진스타일: "따뜻하고 감성적인 톤",
    방문가능요일: ["수", "금", "일"],
    교통수단: "자차",
    작성샘플: [
      "https://blog.naver.com/busan_brunch/88",
      "https://blog.naver.com/busan_brunch/99"
    ],
    신뢰점수: 87,
    비고: "신상 메뉴 리뷰 선호"
  },
  {
    id: "daejeon-family",
    블로그URL: "https://blog.naver.com/daejeon_family",
    닉네임: "대전육아맛집",
    연락처: "010-9876-5555",
    지역: "대전·충청",
    이웃수: 4200,
    평균조회수: 1500,
    전문카테고리: ["육아", "패밀리 레스토랑", "체험"],
    사진스타일: "아이 중심, 공간 위주",
    방문가능요일: ["토", "일"],
    교통수단: "자차 (카시트 보유)",
    작성샘플: [
      "https://blog.naver.com/daejeon_family/333",
      "https://blog.naver.com/daejeon_family/444"
    ],
    신뢰점수: 90,
    비고: "아이 동반 2명, 키즈존 필수"
  }
];


