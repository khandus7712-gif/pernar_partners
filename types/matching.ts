export type Matching = {
  id: string;
  매장ID: string;
  블로거ID: string;
  방문날짜: string;
  제공메뉴: string[];
  업로드기한: string;
  업로드URL?: string;
  성과지표: {
    조회수?: number;
    키워드노출: string[];
    인스타전환수?: number;
  };
  상태: "대기" | "진행중" | "완료";
};



