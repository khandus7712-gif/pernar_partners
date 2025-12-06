import Section from "@components/Section";

export default function AboutPage() {
  return (
    <>
      <Section title="퍼나르마케팅 이야기" subtitle="브랜드/대표 소개">
        <div className="space-y-4 text-gray-400">
          <p>
            우리는 실제로 '아롱하다'라는 매장을 운영하며 블로거 초청을 직접 해본 경험이 있습니다.
            자영업자의 입장에서 무엇이 부담스럽고, 무엇이 도움이 되는지 잘 알고 있습니다.
          </p>
          <p>
            그래서 사장님 눈높이의 블로그 초청 대행을 시작했습니다. 과장 없이, 가게의 본질이 전달되도록
            실전형 프로세스를 설계했습니다.
          </p>
        </div>
      </Section>

      <Section title="미션 & 비전">
        <div className="rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] p-6">
          <p className="font-semibold text-white">
            우리는 단순히 리뷰를 늘리는 것을 목표로 하지 않습니다.
          </p>
          <p className="mt-2 text-gray-400">
            사장님의 시간을 아끼고, 가게의 스토리가 제대로 전달되도록 돕는 파트너가 되겠습니다.
          </p>
        </div>
      </Section>

      <Section title="가치(Value)">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "정직한 리뷰 문화",
            "자영업자와의 동행",
            "데이터 기반 개선",
            "장기적인 관계"
          ].map((v) => (
            <li key={v} className="rounded-lg bg-[#0a0a0a] border border-[#1a1a1a] p-4 text-sm text-gray-300">
              {v}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="대표 한 마디">
        <div className="rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#334155] text-white p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img 
                src="/character.png" 
                alt="김대표 캐릭터" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
                onError={(e) => {
                  // 이미지가 없을 경우 숨김 처리
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg font-semibold mb-3">
                "생각 말고, 실행하세요. 퍼나르가 알려드릴게요."
              </p>
              <p className="text-sm text-gray-300 italic">
                사진 앞에서는 뚝딱거리지만, 사장님 홍보 앞에서는 프로페셔널한 김대표가 직접 상담합니다.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


