import Link from "next/link";
import { ReactNode } from "react";
import Button from "./Button";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#000000]/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <nav className="container-responsive py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-black text-white hover:text-[#FF6A00] transition-colors">
              퍼나르마케팅
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/retail" className="text-gray-300 hover:text-white transition-colors">
                자영업/식당/카페
              </Link>
              <Link href="/construction" className="text-gray-300 hover:text-white transition-colors">
                공사업체/철거/장비업
              </Link>
              <Button href="/contact" variant="secondary" className="text-sm">
                상담 신청
              </Button>
            </div>
            <div className="md:hidden">
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer - 전문성 강화 */}
      <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="container-responsive py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* 브랜드 소개 */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">퍼나르마케팅</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                업종 맞춤 콘텐츠 제작 · 카카오 채널 · 네이버 플레이스 · 홍보용 랜딩페이지 제작
              </p>
              <p className="text-xs text-gray-500">
                경남 지역 기반 서비스 제공
              </p>
            </div>
            
            {/* 서비스 구분 */}
            <div>
              <h4 className="font-semibold text-white mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/retail" className="hover:text-[#FF6A00] transition-colors">
                    자영업/식당/카페
                  </Link>
                </li>
                <li>
                  <Link href="/construction" className="hover:text-[#FF6A00] transition-colors">
                    공사업체/철거/장비업
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#FF6A00] transition-colors">
                    상담 신청
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* 연락처 */}
            <div>
              <h4 className="font-semibold text-white mb-4">연락처</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <span className="text-gray-500">이메일:</span>
                  <br />
                  <a href="mailto:pernar.go@gmail.com" className="hover:text-[#FF6A00] transition-colors">
                    pernar.go@gmail.com
                  </a>
                </li>
                <li className="pt-2">
                  <Link href="https://pf.kakao.com/_pernarpartners" className="hover:text-[#FF6A00] transition-colors">
                    카카오톡 채널
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 사업자 정보 */}
          <div className="mt-8 pt-8 border-t border-[#1a1a1a]">
            <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-500">
              <div>
                <p className="mb-1">사업자명: 퍼나르마케팅</p>
                <p>대표: (추가 필요)</p>
              </div>
              <div className="text-right md:text-left">
                <p>&copy; {new Date().getFullYear()} 퍼나르마케팅. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

