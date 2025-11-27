import Link from "next/link";
import { MATCHINGS } from "@lib/matchings";
import { CUSTOMERS } from "@lib/customers";
import { BLOGGERS } from "@lib/bloggers";

const statusColors: Record<string, string> = {
  대기: "bg-white/10 text-white",
  진행중: "bg-indigo-500/20 text-indigo-200",
  완료: "bg-emerald-500/20 text-emerald-200"
};

const customerMap = Object.fromEntries(CUSTOMERS.map((c) => [c.id, c]));
const bloggerMap = Object.fromEntries(BLOGGERS.map((b) => [b.id, b]));

export default function AdminMatchingsPage() {
  return (
    <div className="space-y-8">
      <section className="grid md:grid-cols-3 gap-4">
        <InfoCard label="전체 매칭" value={MATCHINGS.length.toString()} />
        <InfoCard
          label="진행중"
          value={MATCHINGS.filter((m) => m.상태 === "진행중").length.toString()}
          tone="indigo"
        />
        <InfoCard
          label="완료"
          value={MATCHINGS.filter((m) => m.상태 === "완료").length.toString()}
          tone="emerald"
        />
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/5 text-white/60 text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3">매장</th>
                <th className="px-4 py-3">블로거</th>
                <th className="px-4 py-3">방문 날짜</th>
                <th className="px-4 py-3">업로드 기한</th>
                <th className="px-4 py-3">상태</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {MATCHINGS.map((matching) => {
                const store = customerMap[matching.매장ID];
                const blogger = bloggerMap[matching.블로거ID];
                return (
                  <tr key={matching.id} className="border-t border-white/10">
                    <td className="px-4 py-3 font-semibold">{store?.상호명 ?? matching.매장ID}</td>
                    <td className="px-4 py-3 text-white/70">{blogger?.닉네임 ?? matching.블로거ID}</td>
                    <td className="px-4 py-3 text-white/60">{matching.방문날짜}</td>
                    <td className="px-4 py-3 text-white/60">{matching.업로드기한}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[matching.상태]}`}>
                        {matching.상태}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/admin/matchings/${matching.id}`}
                        className="text-xs font-semibold text-white/70 border border-white/10 rounded-full px-3 py-1 hover:text-white hover:border-white/40 transition"
                      >
                        상세 보기
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  label,
  value,
  tone = "white"
}: {
  label: string;
  value: string;
  tone?: "white" | "indigo" | "emerald";
}) {
  const tones = {
    white: "border-white/10 bg-white/5 text-white",
    indigo: "border-indigo-500/30 bg-indigo-500/10 text-indigo-50",
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-50"
  };
  return (
    <div className={`rounded-2xl p-4 ${tones[tone]}`}>
      <p className="text-xs uppercase tracking-wide">{label}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}



