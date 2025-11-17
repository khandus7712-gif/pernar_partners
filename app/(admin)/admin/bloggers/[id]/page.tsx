import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOGGERS } from "@lib/bloggers";

type Props = {
  params: { id: string };
};

export default function BloggerDetailPage({ params }: Props) {
  const blogger = BLOGGERS.find((b) => b.id === params.id);
  if (!blogger) return notFound();

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-white/60">블로거 프로필</p>
          <h1 className="text-3xl font-bold mt-1">{blogger.닉네임}</h1>
          <p className="text-sm text-white/50 mt-1">{blogger.지역} · {blogger.전문카테고리.join(", ")}</p>
        </div>
        <Link
          href="/admin/bloggers"
          className="text-xs font-semibold text-white/60 border border-white/10 rounded-full px-4 py-2 hover:text-white hover:border-white/30 transition"
        >
          목록으로
        </Link>
      </div>

      <section className="grid md:grid-cols-2 gap-6">
        <AdminCard title="기본 정보">
          <dl className="space-y-2 text-sm text-white/70">
            <Item label="블로그 URL" value={<Anchor href={blogger.블로그URL} />} />
            <Item label="연락처" value={blogger.연락처} />
            <Item label="이웃수" value={`${blogger.이웃수.toLocaleString()}명`} />
            <Item label="평균 조회수" value={`${blogger.평균조회수.toLocaleString()}회`} />
            <Item label="사진 스타일" value={blogger.사진스타일} />
            <Item label="교통수단" value={blogger.교통수단} />
          </dl>
        </AdminCard>
        <AdminCard title="활동 성향">
          <TagList label="방문 가능 요일" items={blogger.방문가능요일} />
          <TagList label="전문 카테고리" items={blogger.전문카테고리} />
          <div className="mt-4">
            <p className="text-xs uppercase tracking-wide text-white/40 mb-2">신뢰 점수</p>
            <div className="flex items-center gap-3">
              <div className="text-4xl font-bold text-emerald-200">{blogger.신뢰점수}</div>
              <div className="text-white/50 text-sm">체험단 비율·리뷰 품질 기반</div>
            </div>
          </div>
        </AdminCard>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <AdminCard title="작성 샘플">
          <ul className="space-y-2 text-sm text-white/70">
            {blogger.작성샘플.map((sample) => (
              <li key={sample}>
                <Anchor href={sample} />
              </li>
            ))}
          </ul>
        </AdminCard>

        <AdminCard title="비고">
          <p className="text-sm text-white/70">{blogger.비고 ?? "비고 없음"}</p>
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
  return (
    <div className="mt-2">
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


