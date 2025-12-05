import Section from "@components/Section";
import Card from "@components/Card";
import Button from "@components/Button";
import { CASES } from "@lib/data";

export default function CasesPage() {
  return (
    <>
      <Section title="성공 사례" subtitle="아직 많지는 않지만, 한 건 한 건 깊게 함께한 이야기들입니다.">
        <div className="grid md:grid-cols-2 gap-6">
          {CASES.map((c) => (
            <Card
              key={c.id}
              title={c.title}
              description={`업종/가게 타입: ${c.type}\n목표/문제: ${c.goal}\n한 일: ${c.action}\n결과: ${c.result}`}
              icon="📈"
              footer={
                <div className="flex justify-end">
                  <Button href={`/cases#${c.id}`} variant="ghost">상세 보기</Button>
                </div>
              }
            />
          ))}
        </div>
      </Section>

      <Section title="케이스 상세 레이아웃(템플릿)">
        <div className="space-y-6">
          <div className="rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] p-6" id="template">
            <h3 className="text-lg font-bold mb-4 text-white">예시 케이스 상세</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p><strong className="text-white">1) 클라이언트 소개</strong> — 창원 전골 전문점</p>
              <p><strong className="text-white">2) 과제/문제 상황</strong> — 리뷰 부족, 지역 인지도 낮음</p>
              <p><strong className="text-white">3) 진행 전략</strong> — 타깃 카테고리 블로거 집중 매칭</p>
              <p><strong className="text-white">4) 실행 내용</strong> — 초청 메시지·일정 조율, 가이드 공유</p>
              <p><strong className="text-white">5) 결과</strong> — 리뷰 수 3배, 저장 수 2배</p>
              <p><strong className="text-white">6) 사장님 한 줄 후기</strong> — "생각보다 빠르게 효과를 봤어요."</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#334155] text-white p-8 sm:p-12 text-center">
          <p className="text-lg font-semibold">
            우리 가게도 이렇게 만들고 싶다면, 지금 상담을 신청해 주세요.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              상담 신청하기
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

