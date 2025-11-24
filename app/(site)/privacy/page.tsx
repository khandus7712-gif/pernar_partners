import Section from "@components/Section";

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">개인정보보호정책</h1>
        <div className="space-y-6 text-[#b3b3b3]">
          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">1. 개인정보의 처리 목적</h2>
            <p>
              퍼나르파트너스(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>상담 신청 및 서비스 제공을 위한 본인 확인</li>
              <li>고객 문의에 대한 응대 및 답변</li>
              <li>서비스 개선을 위한 통계 분석</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">2. 개인정보의 처리 및 보유기간</h2>
            <p>
              회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>상담 신청 정보: 상담 완료 후 1년</li>
              <li>문의 정보: 문의 처리 완료 후 1년</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">3. 개인정보의 제3자 제공</h2>
            <p>
              회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">4. 정보주체의 권리·의무 및 행사방법</h2>
            <p>
              정보주체는 다음과 같은 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>개인정보 열람 요구</li>
              <li>개인정보 정정·삭제 요구</li>
              <li>개인정보 처리정지 요구</li>
            </ul>
            <p className="mt-2">
              위 권리 행사는 회사에 대해 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">5. 처리하는 개인정보의 항목</h2>
            <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>필수항목: 이름, 연락처, 업종</li>
              <li>선택항목: 상담 내용, 메시지</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">6. 개인정보의 파기</h2>
            <p>
              회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">7. 개인정보 보호책임자</h2>
            <p>
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="mt-4 p-4 bg-[#0a0a0a] rounded-lg">
              <p><strong className="text-[#ffffff]">개인정보 보호책임자</strong></p>
              <p className="mt-2">이메일: pernar.go@gmail.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">8. 개인정보 처리방침 변경</h2>
            <p>
              이 개인정보 처리방침은 2024년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}

