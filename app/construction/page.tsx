import Button from "@components/Button";
import Card from "@components/Card";
import Section from "@components/Section";
import ScrollReveal from "@components/ScrollReveal";

export default function ConstructionHomePage() {
  return (
    <>
      {/* Hero - 업종 맞춤형 */}
      <section className="hero-bg">
        <div className="container-hero">
          <div className="hero-container hero-centered">
            <div className="hero-content-wrapper">
              {/* 태그 */}
              <span className="hero-label">
                공사업체 · 철거 · 장비업 맞춤 마케팅
              </span>
              
              {/* 메인 */}
              <h1 className="hero-title hero-main-headline">
                <span className="block">전문성을 퍼나르는</span>
                <strong className="block hero-brand-name">퍼나르마케팅</strong>
              </h1>
              
              {/* 서브 */}
              <p className="hero-subtitle">
                산업 특성을 이해하는 실전형 마케팅으로
                <br />
                견적 문의가 오기까지의 흐름을 설계합니다.
              </p>
              
              {/* CTA 버튼 3종 */}
              <div className="hero-cta-primary-wrapper">
                <Button href="/construction/contact" variant="primary" className="hero-cta-primary-large">
                  무료 상담 신청하기
                </Button>
              </div>
              <div className="hero-cta-secondary-wrapper">
                <Button href="/construction/cases" variant="secondary">
                  포트폴리오 보기
                </Button>
              </div>
              <div className="hero-cta-messenger-wrapper">
                <Button
                  href="https://pf.kakao.com/_pernarpartners"
                  variant="secondary"
                  className="hero-cta-messenger"
                >
                  카카오톡으로 상담하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 메시지 */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl bg-gradient-to-br from-[#7C6FF6]/10 to-[#FF6FB1]/10 border border-[#7C6FF6]/20 p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">
              사장님은 작업만 하세요.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-[#7C6FF6] leading-relaxed">
              견적 문의가 들어오기까지는 제가 하겠습니다.
            </p>
          </div>
        </div>
      </Section>

      {/* 서비스 소개 - 6개 (실제 제공 가능한 서비스만) */}
      <Section title="퍼나르 마케팅 6대 서비스" alt>
        <div className="services-grid">
          {[
            { 
              title: "업종 맞춤 마케팅 전략", 
              lines: [
                "업종 특성 분석",
                "경쟁사 구조 파악",
                "실행 중심 전략 제시"
              ],
              icon: "📋" 
            },
            { 
              title: "사진 기반 콘텐츠 제작", 
              lines: [
                "작업사진만 주면 글 작성 가능",
                "전문성 강조 스토리 구성",
                "블로그 및 웹용 콘텐츠 제공"
              ],
              icon: "📸" 
            },
            { 
              title: "업체 홍보형 홈페이지제작", 
              lines: [
                "업체 소개 중심 랜딩페이지 제작",
                "서비스/포트폴리오 정리",
                "유지보수 및 수정 지원"
              ],
              icon: "🌐" 
            },
            { 
              title: "네이버 플레이스 관리", 
              lines: [
                "정보 세팅 및 최신글 작성",
                "저장/조회/노출키워드 분석",
                "개선 방향 제안"
              ],
              icon: "📍" 
            },
            { 
              title: "카카오톡 채널 개설 & 세팅", 
              lines: [
                "프로필/홈 구성",
                "고객 안내 문구 작성",
                "상담 흐름 설계"
              ],
              icon: "💬" 
            },
            { 
              title: "고객 관리 구조 설계(CRM Lite)", 
              lines: [
                "문의→상담→계약 흐름 정리",
                "고객정보 관리 방식 설계",
                "카카오 자동 문구 구성"
              ],
              icon: "👥" 
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
                      <span className="text-[#7C6FF6] mr-2 mt-1">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* 왜 퍼나르마케팅인가? - 4대 강점 (사실 기반만) */}
      <Section title="왜 퍼나르마케팅인가요?">
        <div className="strengths-grid">
          {[
            { 
              title: "업종 이해력", 
              lines: [
                "공사/철거/장비업의 고객 언어, 작업 과정, 니즈를 이해합니다.",
                "업종 특성에 맞는 마케팅 전략을 제시합니다.",
                "사장님의 업무 방식을 존중하는 접근입니다."
              ],
              icon: "🔧" 
            },
            { 
              title: "사장님 눈높이 설명", 
              lines: [
                "어려운 마케팅 용어 없이 지금 필요한 액션만 제시합니다.",
                "복잡한 개념을 쉽게 설명하는 방식이 강점입니다.",
                "실행 가능한 단계별 가이드를 제공합니다."
              ],
              icon: "💬" 
            },
            { 
              title: "콘텐츠 제작 능력", 
              lines: [
                "작업 사진만으로 전문성을 살린 글 작성 가능.",
                "구조형 글쓰기(문제-해결-과정-결과) 방식 적용.",
                "블로그 및 웹용 콘텐츠를 빠르게 제작합니다."
              ],
              icon: "✍️" 
            },
            { 
              title: "빠른 실행 & 지속 관리", 
              lines: [
                "홈페이지·콘텐츠·플레이스를 빠르게 만들고 매달 점검합니다.",
                "일회성이 아닌 지속적인 관리로 성과를 만들어갑니다.",
                "사장님의 시간을 아끼는 효율적인 프로세스입니다."
              ],
              icon: "⚡" 
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
        <div className="rounded-2xl bg-gradient-to-br from-[#7C6FF6]/20 via-[#FF6FB1]/20 to-[#7C6FF6]/20 border-2 border-[#7C6FF6]/30 text-white p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C6FF6]/10 via-[#FF6FB1]/10 to-[#7C6FF6]/10 opacity-50"></div>
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-bold mb-4 text-white">
              사장님의 전문성을 고객에게 정확히 전달하는 마케팅,
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium">
              퍼나르가 함께합니다.
            </p>
            <Button href="/construction/contact" variant="primary" className="text-lg px-8 py-4 font-bold">
              지금 무료 상담 신청하기
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
