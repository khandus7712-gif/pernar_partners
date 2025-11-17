import Link from "next/link";
import { BLOGGERS } from "@lib/bloggers";

export default function AdminBloggersPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-wrap gap-6 items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50">블로거 네트워크</p>
          <p className="text-3xl font-bold mt-2">{BLOGGERS.length}명</p>
        </div>
        <div className="flex gap-3 text-sm text-white/60">
          <span>평균 신뢰점수 {Math.round(BLOGGERS.reduce((acc, b) => acc + b.신뢰점수, 0) / BLOGGERS.length)}점</span>
          <span className="hidden sm:inline">평균 이웃 {Math.round(BLOGGERS.reduce((acc, b) => acc + b.이웃수, 0) / BLOGGERS.length).toLocaleString()}명</span>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/5 text-white/60 text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3">닉네임</th>
                <th className="px-4 py-3">지역</th>
                <th className="px-4 py-3">전문 카테고리</th>
                <th className="px-4 py-3">이웃수</th>
                <th className="px-4 py-3">평균 조회수</th>
                <th className="px-4 py-3">신뢰점수</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {BLOGGERS.map((blogger) => (
                <tr key={blogger.id} className="border-t border-white/10">
                  <td className="px-4 py-3 font-semibold">{blogger.닉네임}</td>
                  <td className="px-4 py-3 text-white/70">{blogger.지역}</td>
                  <td className="px-4 py-3 text-white/60">{blogger.전문카테고리.join(", ")}</td>
                  <td className="px-4 py-3 text-white/60">{blogger.이웃수.toLocaleString()}</td>
                  <td className="px-4 py-3 text-white/60">{blogger.평균조회수.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-200">
                      {blogger.신뢰점수}점
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/bloggers/${blogger.id}`}
                      className="text-xs font-semibold text-white/70 border border-white/10 rounded-full px-3 py-1 hover:text-white hover:border-white/40 transition"
                    >
                      상세 보기
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}


