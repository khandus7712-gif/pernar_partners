import Section from "@components/Section";
import ContactForm from "@components/Forms/ContactForm";

export default function ConstructionContactPage() {
  return (
    <>
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            전문 마케팅, 함께 시작하세요.
          </h1>
          <p className="mt-3 text-gray-400">
            간단히 남겨주시면, 사장님의 업종에 맞는 마케팅 전략을 함께 수립해 드립니다.
          </p>
        </div>
      </Section>

      <Section title="문의 폼">
        <div className="rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] p-6">
          <ContactForm />
        </div>
      </Section>

      <Section title="기타 연락 수단">
        <ul className="grid sm:grid-cols-2 gap-4">
          <li className="rounded-lg bg-[#0a0a0a] border border-[#1a1a1a] p-4">
            <div className="font-semibold text-white">이메일</div>
            <div className="text-sm text-gray-400">pernar.go@gmail.com</div>
          </li>
          <li className="rounded-lg bg-[#0a0a0a] border border-[#1a1a1a] p-4">
            <div className="font-semibold text-white">카카오 채널</div>
            <div className="text-sm text-gray-400">카카오에서 '퍼나르마케팅' 검색</div>
          </li>
        </ul>
      </Section>
    </>
  );
}

