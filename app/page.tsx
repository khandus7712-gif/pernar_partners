import Button from "@components/Button";
import Section from "@components/Section";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      <div className="container-responsive py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            <span className="block">희망을 퍼나르는</span>
            <span className="block text-[#FF6A00]">퍼나르마케팅</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            사장님의 일하는 방식에 맞춘,
            <br />
            현장에서 통하는 솔루션을 만들어드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 자영업/식당/카페 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#FF944D] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-12 hover:border-[#FF6A00]/50 transition-all">
              <div className="text-6xl mb-6">🍽️</div>
              <h2 className="text-3xl font-bold mb-4 text-white">자영업 / 식당 / 카페</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                블로거 초청 대행으로
                <br />
                가게의 이야기를 널리 알려드립니다.
                <br />
                <span className="text-sm text-gray-500 mt-2 block">
                  300명 이상의 검증된 블로거 네트워크
                </span>
              </p>
              <div className="space-y-3">
                <Button 
                  href="/retail" 
                  variant="primary" 
                  className="w-full justify-center"
                >
                  자세히 보기 →
                </Button>
                <Button 
                  href="/retail/contact" 
                  variant="secondary" 
                  className="w-full justify-center"
                >
                  무료 상담 신청
                </Button>
              </div>
            </div>
          </div>

          {/* 공사업체/철거/장비업 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C6FF6] to-[#FF6FB1] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-12 hover:border-[#7C6FF6]/50 transition-all">
              <div className="text-6xl mb-6">🏗️</div>
              <h2 className="text-3xl font-bold mb-4 text-white">공사업체 / 철거 / 장비업</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                산업 분야 맞춤형
                <br />
                마케팅 솔루션을 제공합니다.
                <br />
                <span className="text-sm text-gray-500 mt-2 block">
                  전문성 있는 마케팅 전략
                </span>
              </p>
              <div className="space-y-3">
                <Button 
                  href="/construction" 
                  variant="primary" 
                  className="w-full justify-center"
                >
                  자세히 보기 →
                </Button>
                <Button 
                  href="/construction/contact" 
                  variant="secondary" 
                  className="w-full justify-center"
                >
                  무료 상담 신청
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm space-y-2">
            <span className="block">두 분야 모두 지원하지만,</span>
            <span className="block">솔루션은 각각의 산업에 최적화해 제공합니다.</span>
            <span className="block">상담을 통해 가장 적합한 전략을 안내드립니다.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

