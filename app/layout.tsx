import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { BRAND } from "@lib/data";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pernar-partners.example.com"),
  title: {
    default: `${BRAND.nameKo} | ${BRAND.slogan}`,
    template: `%s | ${BRAND.nameKo}`
  },
  description:
    "300명 이상의 검증된 블로거 네트워크로, 사장님의 가게 이야기를 정확히 전달합니다.",
  keywords: [
    "퍼나르파트너스",
    "블로거 초청",
    "체험단",
    "자영업 마케팅",
    "네이버 플레이스"
  ],
  openGraph: {
    title: `${BRAND.nameKo} | ${BRAND.slogan}`,
    description:
      "300명 이상의 검증된 블로거 네트워크로, 사장님의 가게 이야기를 정확히 전달합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: BRAND.nameKo
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.nameKo} | ${BRAND.slogan}`,
    description:
      "300명 이상의 검증된 블로거 네트워크로, 사장님의 가게 이야기를 정확히 전달합니다."
  },
  icons: {
    icon: "/favicon.ico"
  },
  themeColor: "#FF6A00",
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2077503952644064"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}


