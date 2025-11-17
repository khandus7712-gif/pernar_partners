import Section from "@components/Section";
import Card from "@components/Card";
import { FAQS, PACKAGES } from "@lib/data";

export default function ServicePage() {
  return (
    <>
      <Section title="블로그 초청 대행, 이렇게 진행됩니다" subtitle="서비스 개요">
        <p className="text-navy/80">
          사장님 가게의 상황과 목표에 맞춰 블로거를 선별하고, 방문과 리뷰가 자연스럽게 이루어지도록
          메시지·일정을 조율합니다. 과장된 홍보가 아니라, 가게의 본질이 전달되도록 돕습니다.
        </p>
      </Section>

      <Section title="프로세스 타임라인">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "상담 및 가게 진단",
            "타깃 설정 & 블로거 매칭",
            "초청 메시지 발송 및 일정 조율",
            "방문 및 리뷰 작성",
            "리뷰 검수 및 피드백",
            "결과 리포트 & 다음 액션 제안"
          ].map((step, idx) => (
            <Card key={idx} title={`${idx + 1}. ${step}`} icon="➡️" />
          ))}
        </div>
      </Section>

      <Section title="패키지 소개">
        <div className="services-grid">
          {PACKAGES.map((pkg) => (
            <Card
              key={pkg.name}
              title={pkg.name}
              description={pkg.features.join(" · ")}
              icon="💼"
              footer={<div className="text-xs text-navy/60">{pkg.priceNote}.</div>}
            />
          ))}
        </div>
      </Section>

      <Section title="FAQ">
        <div className="grid gap-4">
          {FAQS.map((f, i) => (
            <div key={i} className="rounded-lg bg-white border border-navy/10 p-4">
              <div className="font-semibold">Q. {f.q}</div>
              <div className="text-sm text-navy/80 mt-1">A. {f.a}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}


