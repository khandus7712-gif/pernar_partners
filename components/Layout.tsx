import Link from "next/link";
import { ReactNode } from "react";
import { NAV_ITEMS, BRAND } from "@lib/data";

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#000000]/95 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="container-responsive flex items-center justify-between h-16">
        <Link href={"/" as any} className="font-bold text-xl text-[#ffffff]">
          {BRAND.short}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href as any}
              className="text-sm font-medium text-[#b3b3b3] hover:text-[#ffffff] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden text-sm text-[#b3b3b3]">메뉴</div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-[#1a1a1a] bg-[#000000] pt-16 pb-12">
      <div className="container-responsive py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-bold text-lg text-[#ffffff]">{BRAND.nameKo}</div>
          <p className="text-sm text-[#b3b3b3] mt-2">
            희망을 퍼나르는 마케팅. 사장님 눈높이 블로그 초청 대행.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2 text-[#ffffff]">Contact</div>
          <ul className="text-sm text-[#b3b3b3] space-y-1">
            <li>이메일: hello@pernar-partners.com</li>
            <li>카카오 채널: 카카오에서 '퍼나르파트너스' 검색</li>
          </ul>
        </div>
        <div className="text-sm text-[#b3b3b3]">
          © 퍼나르파트너스. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}


