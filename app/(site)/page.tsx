import Button from "@components/Button";
import Card from "@components/Card";
import Section from "@components/Section";
import ScrollReveal from "@components/ScrollReveal";
import {
  BRAND,
  HOME_BADGES,
  HOME_SERVICES,
  DIFFERENTIATORS,
  CASES
} from "@lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg">
        <div className="container-hero">
          <div className="hero-container hero-centered">
            <div className="hero-content-wrapper">
              <span className="hero-label">
                {BRAND.slogan}
              </span>
              <h1 className="hero-title hero-main-headline">
                <span className="block">희망을 퍼나르는</span>
                <span className="block">마케팅,</span>
                <strong className="block hero-brand-name">퍼나르마케팅</strong>
              </h1>
              <p className="hero-subtitle">
                300명 이상의 검증된 블로거 네트워크로,
                <br />
                사장님의 가게 이야기를 정확히 전달합니다.
              </p>
              <p className="hero-tagline">
                실제 매장을 운영하는 사장이 만드는,
                <br />
                사장님 눈높이 블로그 초청 대행
              </p>
              <div className="hero-cta-primary-wrapper">
                <Button href="/contact" variant="primary" className="hero-cta-primary-large">
                  무료 상담 신청하기
                </Button>
              </div>
              <div className="hero-cta-secondary-wrapper">
                <Button href="/cases" variant="secondary">
                  성공 사례 보기
                </Button>
              </div>
              <div className="hero-cta-messenger-wrapper">
                <Button
                  href="https://pf.kakao.com/_pernarpartners"
                  variant="secondary"
                  className="hero-cta-messenger"
                >
                  카카오톡으로 바로 상담하기
                </Button>
              </div>
            </div>
          </div>
          <div className="hero-cards-section">
            <div className="hero-cards-grid">
              {HOME_SERVICES.slice(0, 3).map((s, index) => (
                <ScrollReveal key={s.title} delay={index * 150}>
                  <Card title={s.title} description={s.desc} icon={s.icon} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <Section title="우리는 이런 일을 합니다" alt>
        <div className="services-grid">
          {HOME_SERVICES.map((s, index) => (
            <ScrollReveal key={s.title} delay={index * 100}>
              <Card title={s.title} description={s.desc} icon={s.icon} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Why us */}
      <Section title="왜 퍼나르마케팅인가요?">
        <div className="services-grid">
          {DIFFERENTIATORS.map((d, index) => (
            <ScrollReveal key={d.title} delay={index * 100}>
              <Card title={d.title} description={d.desc} icon={d.icon} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Cases teaser */}
      <Section title="사장님들이 경험한 변화" alt>
        <div className="grid md:grid-cols-3 gap-6">
          {CASES.slice(0, 3).map((c, index) => (
            <ScrollReveal key={c.id} delay={index * 100}>
              <Card
                title={c.title}
                description={`목표/문제: ${c.goal}\n결과: ${c.result}`}
                icon="🏆"
                footer={<Button href="/cases" variant="ghost">자세히 보기</Button>}
              />
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/cases" variant="secondary">
            전체 사례 보기
          </Button>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#334155] text-white p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/20 via-[#ec4899]/20 to-[#a855f7]/20 opacity-50"></div>
          <div className="relative z-10">
            <p className="text-xl font-semibold mb-3 text-[#f8fafc]">
              블로거 초청, 혼자 고민하지 마세요.
            </p>
            <p className="text-[#cbd5e1] mb-8">
              사장님의 시간을 아끼고, 가게의 이야기를 널리 퍼나르겠습니다.
            </p>
            <Button href="/contact" variant="primary">
              지금 무료 상담 신청하기
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}



