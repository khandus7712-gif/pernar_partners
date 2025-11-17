import Link from "next/link";
import { notFound } from "next/navigation";
import { MATCHINGS } from "@lib/matchings";
import { CUSTOMERS } from "@lib/customers";
import { BLOGGERS } from "@lib/bloggers";

const customerMap = Object.fromEntries(CUSTOMERS.map((c) => [c.id, c]));
const bloggerMap = Object.fromEntries(BLOGGERS.map((b) => [b.id, b]));

type Props = {
  params: { id: string };
};

export default function MatchingDetailPage({ params }: Props) {
  const matching = MATCHINGS.find((m) => m.id === params.id);
  if (!matching) return notFound();

  const store = customerMap[matching.매장ID];
  const blogger = bloggerMap[matching.블로거ID];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-white/60">매칭 상세</p>
          <h1 className="text-3xl font-bold mt-1">{store?.상호명 ?? matching.매장ID}</h1>
          <p className="text-sm text-white/50 mt-1">
            블로거 {blogger?.닉네임 ?? matching.블로거ID} · 방문 {matching.방문날짜}
          </p>
        </div>
        <Link
          href="/admin/matchings"
          className="text-xs font-semibold text-white/60 border border-white/10 rounded-full px-4 py-2 hover:text-white hover:border-white/30 transition"
        >
          목록으로
        </Link>
      </div>

      <section className="grid md:grid-cols-2 gap-6">
        <AdminCard title="매장 정보">
          <dl className="space-y-2 text-sm text-white/70">
            <Item label="상호명" value={store?.상호명 ?? "-"} />
            <Item label="업종" value={store?.업종 ?? "-"} />
            <Item label="주소" value={store?.주소 ?? "-"} />
          </dl>
        </AdminCard>
        <AdminCard title="블로거 정보">
          <dl className="space-y-2 text-sm text-white/70">
            <Item label="닉네임" value={blogger?.닉네임 ?? "-"} />
            <Item label="지역" value={blogger?.지역 ?? "-"} />
            <Item label="블로그" value={blogger ? <Anchor href={blogger.블로그URL} /> : "-"} />
          </dl>
        </AdminCard>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <AdminCard title="방문 & 업로드">
          <dl className="space-y-2 text-sm text-white/70">
            <Item label="방문 날짜" value={matching.방문날짜} />
            <Item label="업로드 기한" value={matching.업로드기한} />
            <Item label="상태" value={matching.상태} />
          </dl>
          <TagList label="제공 메뉴" items={matching.제공메뉴} />
          <div className="mt-4">
            <p className="text-xs uppercase tracking-wide text-white/40 mb-2">업로드 링크</p>
            {matching.업로드URL ? <Anchor href={matching.업로드URL} /> : <p className="text-white/60">업로드 대기</p>}
          </div>
        </AdminCard>
        <AdminCard title="성과 지표">
          <dl className="space-y-2 text-sm text-white/70">
            <Item
              label="조회수"
              value={matching.성과지표.조회수 ? matching.성과지표.조회수.toLocaleString() : "-"}
            />
            <Item
              label="인스타 전환수"
              value={matching.성과지표.인스타전환수 ? matching.성과지표.인스타전환수.toString() : "-"}
            />
          </dl>
          <TagList label="키워드 노출" items={matching.성과지표.키워드노출} />
        </AdminCard>
      </section>
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

function Item({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-white/50 w-32">{label}</dt>
      <dd className="flex-1 text-right">{value}</dd>
    </div>
  );
}

function TagList({ label, items }: { label: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-4">
      <p className="text-xs uppercase tracking-wide text-white/40 mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="px-2 py-1 rounded-full text-xs bg-white/10 text-white/80">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Anchor({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-emerald-200 hover:text-emerald-100 underline underline-offset-4"
    >
      링크 열기
    </a>
  );
}


