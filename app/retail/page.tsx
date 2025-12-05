import Button from "@components/Button";
import Card from "@components/Card";
import Section from "@components/Section";
import ScrollReveal from "@components/ScrollReveal";

export default function RetailHomePage() {
  return (
    <>
      {/* Hero - 3단 메시지 구조 */}
      <section className="hero-bg">
        <div className="container-hero">
          <div className="hero-container hero-centered">
            <div className="hero-content-wrapper">
              {/* 태그 */}
              <span className="hero-label">
                자영업 · 식당 · 카페 전문 마케팅
              </span>
              
              {/* 메인 */}
              <h1 className="hero-title hero-main-headline">
                <span className="block">희망을 퍼나르는</span>
                <strong className="block hero-brand-name">퍼나르마케팅</strong>
              </h1>
              
              {/* 서브 */}
              <p className="hero-subtitle">
                마케팅을 몰라도 손님이 늘어나는 구조를 만들어드립니다.
                <br />
                실제 매장을 운영하는 사장이 만든,
                <br />
                사장님 눈높이의 자동화 마케팅 시스템.
              </p>
              
              {/* USP */}
              <p className="hero-tagline">
                경남 지역 기반 <strong className="text-[#FF6A00]">1,000명 이상의 블로거 네트워크</strong>로
                <br />
                가게의 이야기를 빠르고 정확하게 전달합니다.
              </p>
              
              {/* CTA 버튼 3종 */}
              <div className="hero-cta-primary-wrapper">
                <Button href="/retail/contact" variant="primary" className="hero-cta-primary-large">
                  무료 상담 신청하기
                </Button>
              </div>
              <div className="hero-cta-secondary-wrapper">
                <Button href="/retail/cases" variant="secondary">
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
        </div>
      </section>

      {/* 핵심 메시지 */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-[#FF944D]/10 border border-[#FF6A00]/20 p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">
              사장님은 음식만 만드세요.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-[#FF6A00] leading-relaxed">
              손님을 부르는 구조는 제가 만들어드립니다.
            </p>
          </div>
        </div>
      </Section>

      {/* 서비스 소개 - 4단 구조 (3줄 설명) */}
      <Section title="퍼나르 마케팅 4대 서비스" alt>
        <div className="services-grid">
          {[
            { 
              title: "블로거 초청 시스템", 
              lines: [
                "1,000명 이상 경남 로컬 블로거 네트워크 기반",
                "사장님 가게에 맞는 블로거 선별 및 매칭",
                "리뷰 품질 관리 및 일정 조율 자동화"
              ],
              icon: "📝" 
            },
            { 
              title: "리뷰·재방문 자동화", 
              lines: [
                "카카오 메시지 AI 자동 생성 시스템",
                "후기 요청, 재방문 유도, 단골 관리 자동화",
                "사장님의 시간을 절약하는 메시지 구조 제공"
              ],
              icon: "🤖" 
            },
            { 
              title: "스마트플레이스 분석", 
              lines: [
                "저장수·조회수·노출 키워드 실시간 분석",
                "경쟁 매장 대비 포지션 진단 및 전략 수립",
                "사장님 기준으로 이해할 수 있는 언어로 전략 제시"
              ],
              icon: "📊" 
            },
            { 
              title: "맞춤형 마케팅 설계", 
              lines: [
                "가게 브랜드·타깃 고객 심층 분석",
                "메뉴·사진·스토리 정리 및 최적화",
                "정확히 '무엇을 해야 하는지' 단계별 실행 계획 제공"
              ],
              icon: "🎯" 
            }
          ].map((s, index) => (
            <ScrollReveal key={s.title} delay={index * 100}>
              <Card 
                title={s.title} 
                icon={s.icon}
                className="service-card"
              >
                <ul className="space-y-3 mt-4">
                  {s.lines.map((line, i) => (
                    <li key={i} className="text-gray-400 text-sm md:text-base flex items-start">
                      <span className="text-[#FF6A00] mr-2 mt-1">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* 성과 중심 섹션 */}
      <Section title="퍼나르 마케팅으로 달성한 성과">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              number: "1,000+",
              label: "경남 블로거 네트워크",
              desc: "실제 활동하는 지역 블로거만 선별"
            },
            {
              number: "자동화",
              label: "마케팅 시스템",
              desc: "사장님 시간 절약을 위한 자동화 도구"
            },
            {
              number: "검증된",
              label: "운영 경험",
              desc: "직접 매장 운영하며 검증한 전략"
            }
          ].map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center p-6 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a]">
                <div className="text-4xl font-black text-[#FF6A00] mb-2">{item.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{item.label}</div>
                <div className="text-sm text-gray-400">{item.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* 왜 퍼나르마케팅인가? - 5대 강점 (스토리 기반 3줄 설명) */}
      <Section title="왜 퍼나르마케팅인가요?">
        <div className="strengths-grid">
          {[
            { 
              title: "실제 매장을 운영하는 사장", 
              lines: [
                "운영 경험 없는 대행사가 아닙니다.",
                "퍼나르는 직접 매장을 운영하며 검증한 전략만 제공합니다.",
                "사장님의 고민과 부담을 정확히 이해합니다."
              ],
              icon: "👨‍🍳" 
            },
            { 
              title: "자동으로 일하는 마케팅 시스템", 
              lines: [
                "카카오 메시지, 리뷰 요청, 재방문 관리 등",
                "사장님의 시간을 지키는 자동화 도구를 직접 개발합니다.",
                "복잡한 마케팅 업무를 자동으로 처리합니다."
              ],
              icon: "⚙️" 
            },
            { 
              title: "경남 최대 1,000명 블로거 네트워크", 
              lines: [
                "실제 활동하는 지역 블로거만 선별하여",
                "가게의 이야기를 널리 퍼나릅니다.",
                "로컬 마케팅에 최적화된 네트워크입니다."
              ],
              icon: "🌐" 
            },
            { 
              title: "숫자로 설명하는 스마트플레이스 전략", 
              lines: [
                "저장수·조회수·지도 노출을",
                "사장님도 이해할 수 있게 설명하는 방식이 강점입니다.",
                "복잡한 데이터를 실행 가능한 전략으로 전환합니다."
              ],
              icon: "📈" 
            },
            { 
              title: "사장님 눈높이의 소통", 
              lines: [
                "어려운 마케팅 용어 대신",
                "'지금 무엇을 해야 하는지'를 명확히 안내하는 방식입니다.",
                "실행 중심의 실용적인 조언을 제공합니다."
              ],
              icon: "💬" 
            }
          ].map((d, index) => (
            <ScrollReveal key={d.title} delay={index * 100}>
              <Card 
                title={d.title} 
                icon={d.icon}
                className="strength-card"
              >
                <ul className="space-y-3 mt-4">
                  {d.lines.map((line, i) => (
                    <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Final CTA - 강화 */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-br from-[#FF6A00]/20 via-[#FF944D]/20 to-[#FF6A00]/20 border-2 border-[#FF6A00]/30 text-white p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/10 via-[#FF944D]/10 to-[#FF6A00]/10 opacity-50"></div>
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-bold mb-4 text-white">
              블로거 초청, 혼자 고민하지 마세요.
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium">
              사장님의 시간을 아끼고, 가게의 이야기를 널리 퍼나르겠습니다.
            </p>
            <Button href="/retail/contact" variant="primary" className="text-lg px-8 py-4 font-bold">
              지금 무료 상담 신청하기
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
