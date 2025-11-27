import Section from "@components/Section";

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">이용약관</h1>
        <div className="space-y-6 text-[#b3b3b3]">
          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">제1조 (목적)</h2>
            <p>
              이 약관은 퍼나르파트너스(이하 "회사")가 제공하는 블로거 초청 대행 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">제2조 (정의)</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>"서비스"란 회사가 제공하는 블로거 초청 대행 및 관련 마케팅 서비스를 의미합니다.</li>
              <li>"이용자"란 이 약관에 따라 회사가 제공하는 서비스를 받는 개인 또는 법인을 의미합니다.</li>
              <li>"블로거"란 회사와 계약을 체결하여 서비스를 제공하는 블로거를 의미합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">제3조 (약관의 게시와 개정)</h2>
            <p>
              회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있으며, 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">제4조 (서비스의 제공)</h2>
            <p>회사는 다음과 같은 서비스를 제공합니다:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>블로거 네트워크를 통한 초청 대행</li>
              <li>리뷰 및 콘텐츠 품질 관리</li>
              <li>결과 리포트 및 다음 액션 제안</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">제5조 (이용자의 의무)</h2>
            <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>타인의 정보 도용</li>
              <li>서비스의 안정적 운영을 방해하는 행위</li>
              <li>법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">제6조 (서비스의 중단)</h2>
            <p>
              회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">제7조 (면책조항)</h2>
            <p>
              회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">제8조 (준거법 및 관할법원)</h2>
            <p>
              이 약관의 해석 및 회사와 이용자 간의 분쟁에 대하여는 대한민국 법을 적용하며, 본 분쟁으로 인하여 소송이 제기될 경우 소송은 회사의 본사 소재지를 관할하는 법원의 관할로 합니다.
            </p>
          </section>

          <section>
            <p className="text-sm mt-8">
              <strong className="text-[#ffffff]">시행일자:</strong> 2024년 1월 1일
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}


