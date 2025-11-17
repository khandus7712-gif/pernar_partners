export type ChannelInfo = {
  네이버플레이스?: string;
  인스타그램?: string;
  블로그?: string;
  카카오채널?: string;
};

export type SalesInfo = {
  일매출?: number;
  월매출?: number;
  객단가?: number;
};

export type MarketingStatus = {
  인스타팔로워?: number;
  블로그방문자수?: number;
  플레이스지수?: number;
  주력메뉴: string[];
  문제점: string[];
  개선목표: string[];
};

export type RequiredAssets = {
  매장사진: string[];
  메뉴사진: string[];
  경쟁업체리스트: string[];
  상권요약?: string;
};

export type Customer = {
  id: string;
  상호명: string;
  대표자명: string;
  연락처: string;
  주소: string;
  업종: string;
  영업시간?: string;
  휴무일?: string;
  채널정보: ChannelInfo;
  매출정보: SalesInfo;
  마케팅현황: MarketingStatus;
  필수자료: RequiredAssets;
  상담날짜: string;
  메모?: string;
  상태: "신규" | "진행" | "완료";
  담당자?: string;
};


