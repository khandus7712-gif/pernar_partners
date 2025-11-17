import Link from "next/link";
import { ReactNode } from "react";

const adminNav = [
  { label: "대시보드", href: "/admin" },
  { label: "상담 관리", href: "/admin/customers" },
  { label: "블로거 네트워크", href: "/admin/bloggers" },
  { label: "매칭 관리", href: "/admin/matchings" }
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white grid md:grid-cols-[220px_1fr]">
      <aside className="hidden md:flex flex-col border-r border-white/5 bg-black/40 p-6 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Pernar Admin</span>
          <p className="text-xl font-bold mt-2">Operations</p>
        </div>
        <nav className="space-y-2">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto text-xs text-white/40">
          © {new Date().getFullYear()} 퍼나르파트너스
        </div>
      </aside>
      <div className="flex flex-col">
        <header className="flex items-center justify-between border-b border-white/5 px-4 sm:px-8 py-4 bg-black/40 backdrop-blur">
          <div>
            <p className="text-sm text-white/50">운영 콘솔</p>
            <p className="text-lg font-semibold">실시간 상담 & 네트워크 현황</p>
          </div>
          <Link
            href="/"
            className="text-xs font-semibold text-white/60 border border-white/10 rounded-full px-4 py-2 hover:text-white hover:border-white/30 transition"
          >
            사이트 보기
          </Link>
        </header>
        <main className="flex-1 px-4 sm:px-8 py-8 bg-[#050505]">{children}</main>
      </div>
    </div>
  );
}


