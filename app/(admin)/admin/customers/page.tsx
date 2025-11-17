import Link from "next/link";
import { CUSTOMERS } from "@lib/customers";

const statusStyles: Record<string, string> = {
  신규: "bg-white/10 text-white",
  진행: "bg-orange-500/20 text-orange-300",
  완료: "bg-emerald-500/20 text-emerald-300"
};

export default function AdminCustomersPage() {
  const total = CUSTOMERS.length;
  const progressing = CUSTOMERS.filter((c) => c.상태 === "진행").length;
  const pending = CUSTOMERS.filter((c) => c.상태 === "신규").length;

  return (
    <div className="space-y-8">
      <section className="grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-wide text-white/50">전체 상담</p>
          <p className="text-3xl font-bold mt-2">{total}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-orange-500/10 p-4">
          <p className="text-xs uppercase tracking-wide text-orange-200">진행 중</p>
          <p className="text-3xl font-bold mt-2 text-orange-100">{progressing}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-wide text-white/50">신규 상담</p>
          <p className="text-3xl font-bold mt-2">{pending}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/5 text-white/60 text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3">상호명</th>
                <th className="px-4 py-3">업종</th>
                <th className="px-4 py-3">상담날짜</th>
                <th className="px-4 py-3">상태</th>
                <th className="px-4 py-3">담당자</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {CUSTOMERS.map((customer) => (
                <tr key={customer.id} className="border-t border-white/10">
                  <td className="px-4 py-3 font-semibold">{customer.상호명}</td>
                  <td className="px-4 py-3 text-white/70">{customer.업종}</td>
                  <td className="px-4 py-3 text-white/50">{customer.상담날짜}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyles[customer.상태]}`}>
                      {customer.상태}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-white/60">{customer.담당자 ?? "-"}</td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/customers/${customer.id}`}
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


