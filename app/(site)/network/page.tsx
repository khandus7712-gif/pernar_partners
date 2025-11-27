import Section from "@components/Section";
import Card from "@components/Card";
import BloggerApplyForm from "@components/Forms/BloggerApplyForm";
import { NETWORK_STATS } from "@lib/data";

export default function NetworkPage() {
  return (
    <>
      <Section title="300명 이상의 검증된 블로거 네트워크" subtitle="네트워크 개요">
        <p className="text-navy/80">
          지역, 카테고리, 사진/글 퀄리티 등을 기준으로 선별된 블로거와 함께합니다. 
          가게의 이야기가 왜곡되지 않도록 명확한 가이드를 공유합니다.
        </p>
      </Section>

      <Section title="간단 통계">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="총 인원" icon="👥" description={`${NETWORK_STATS.total}+`} />
          <Card title="주요 카테고리" icon="🏷️">
            <ul className="text-sm text-navy/80 space-y-1 mt-2">
              {NETWORK_STATS.categories.map((c) => (
                <li key={c.label}>{c.label}: {c.value}%</li>
              ))}
            </ul>
          </Card>
          <Card title="지역 분포" icon="🗺️">
            <ul className="text-sm text-navy/80 space-y-1 mt-2">
              {NETWORK_STATS.regions.map((r) => (
                <li key={r.label}>{r.label}: {r.value}%</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="블로거 파트너 혜택">
        <div className="services-grid">
          {[
            { t: "체험 기회", d: "신메뉴·오픈 매장 우선 초청" },
            { t: "빠른 소통/정산", d: "명확한 기준과 기한" },
            { t: "명확한 가이드", d: "사진/글 기준 제공" },
            { t: "장기 파트너십", d: "서로에게 이로운 관계 지향" }
          ].map((b) => (
            <Card key={b.t} title={b.t} description={b.d} icon="✨" />
          ))}
        </div>
      </Section>

      <Section title="블로거 파트너 신청">
        <div className="rounded-xl bg-white border border-navy/10 p-6">
          <BloggerApplyForm />
        </div>
      </Section>
    </>
  );
}



