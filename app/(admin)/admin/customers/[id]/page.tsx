import Link from "next/link";
import { notFound } from "next/navigation";
import { CUSTOMERS } from "@lib/customers";

type Props = {
  params: { id: string };
};

const numberFormatter = new Intl.NumberFormat("ko-KR");

export default function CustomerDetailPage({ params }: Props) {
  const customer = CUSTOMERS.find((c) => c.id === params.id);

  if (!customer) {
    return notFound();
  }

  const { 채널정보, 매출정보, 마케팅현황, 필수자료 } = customer;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-white/60">상담 요청</p>
          <h1 className="text-3xl font-bold mt-1">{customer.상호명}</h1>
          <p className="text-sm text-white/50 mt-1">
            {customer.업종} · 상담일 {customer.상담날짜}
          </p>
        </div>
        <Link
          href="/admin/customers"
          className="text-xs font-semibold text-white/60 border border-white/10 rounded-full px-4 py-2 hover:text-white hover:border-white/30 transition"
        >
          목록으로
        </Link>
      </div>

      <section className="grid md:grid-cols-2 gap-6">
        <AdminCard title="기본 정보">
          <dl className="space-y-2 text-sm text-white/70">
            <Item label="대표자명" value={customer.대표자명} />
            <Item label="연락처" value={customer.연락처} />
            <Item label="주소" value={customer.주소} />
            <Item label="영업시간" value={customer.영업시간 ?? "-"} />
            <Item label="휴무일" value={customer.휴무일 ?? "-"} />
          </dl>
        </AdminCard>
        <AdminCard title="채널 정보">
          <dl className="space-y-2 text-sm text-white/70">
            {Object.entries(채널정보).map(([key, value]) => (
              <Item key={key} label={key} value={value || "-"} />
            ))}
          </dl>
        </AdminCard>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <AdminCard title="매출 정보">
          <dl className="space-y-2 text-sm text-white/70">
            <Item label="일매출" value={매출정보.일매출 ? `${numberFormatter.format(매출정보.일매출)}원` : "-"} />
            <Item label="월매출" value={매출정보.월매출 ? `${numberFormatter.format(매출정보.월매출)}원` : "-"} />
            <Item label="객단가" value={매출정보.객단가 ? `${numberFormatter.format(매출정보.객단가)}원` : "-"} />
          </dl>
        </AdminCard>
        <AdminCard title="마케팅 현황">
          <dl className="space-y-2 text-sm text-white/70">
            <Item label="인스타 팔로워" value={formatNumber(마케팅현황.인스타팔로워)} />
            <Item label="블로그 방문자수" value={formatNumber(마케팅현황.블로그방문자수)} />
            <Item label="플레이스 지수" value={formatNumber(마케팅현황.플레이스지수)} />
          </dl>
          <TagList label="주력 메뉴" items={마케팅현황.주력메뉴} />
          <TagList label="문제점" items={마케팅현황.문제점} variant="warning" />
          <TagList label="개선 목표" items={마케팅현황.개선목표} variant="success" />
        </AdminCard>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <AdminCard title="필수 자료">
          <TagList label="매장 사진" items={필수자료.매장사진} />
          <TagList label="메뉴 사진" items={필수자료.메뉴사진} />
          <TagList label="경쟁 업체" items={필수자료.경쟁업체리스트} />
          <div className="text-sm text-white/60 mt-4">
            <p className="font-semibold text-white">상권 요약</p>
            <p>{필수자료.상권요약 ?? "-"}</p>
          </div>
        </AdminCard>
        <AdminCard title="메모">
          <p className="text-sm text-white/70 whitespace-pre-line">
            {customer.메모 ?? "메모가 없습니다."}
          </p>
        </AdminCard>
      </section>
    </div>
  );
}

function Item({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-white/50 w-28">{label}</dt>
      <dd className="flex-1 text-right">{value ?? "-"}</dd>
    </div>
  );
}

function TagList({
  label,
  items,
  variant = "default"
}: {
  label: string;
  items: string[];
  variant?: "default" | "warning" | "success";
}) {
  const variantClass =
    variant === "warning"
      ? "bg-orange-500/10 text-orange-200"
      : variant === "success"
      ? "bg-emerald-500/10 text-emerald-200"
      : "bg-white/10 text-white/80";

  if (!items || items.length === 0) return null;

  return (
    <div className="mt-4">
      <p className="text-xs uppercase tracking-wide text-white/40 mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className={`px-2 py-1 rounded-full text-xs ${variantClass}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function AdminCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm font-semibold text-white mb-4">{title}</p>
      {children}
    </div>
  );
}

function formatNumber(value?: number) {
  return value ? numberFormatter.format(value) : "-";
}


