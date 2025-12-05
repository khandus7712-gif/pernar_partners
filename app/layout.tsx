import type { Metadata } from "next";
import "./globals.css";
import CursorFollower from "@components/CursorFollower";

export const metadata: Metadata = {
  title: "퍼나르마케팅 | 희망을 퍼나르는 마케팅",
  description: "300명 이상의 검증된 블로거 네트워크로, 사장님의 가게 이야기를 정확히 전달합니다. 실제 매장을 운영하는 사장이 만드는, 사장님 눈높이 블로그 초청 대행",
  keywords: ["블로그 초청", "블로거 대행", "마케팅", "식당 마케팅", "카페 마케팅", "자영업 마케팅", "공사업체 마케팅", "철거 마케팅", "장비업 마케팅"],
  authors: [{ name: "퍼나르마케팅" }],
  openGraph: {
    title: "퍼나르마케팅 | 희망을 퍼나르는 마케팅",
    description: "300명 이상의 검증된 블로거 네트워크로, 사장님의 가게 이야기를 정확히 전달합니다",
    url: "https://pernar.kr",
    siteName: "퍼나르마케팅",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "퍼나르마케팅 | 희망을 퍼나르는 마케팅",
    description: "300명 이상의 검증된 블로거 네트워크로, 사장님의 가게 이야기를 정확히 전달합니다",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pernar.kr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}

