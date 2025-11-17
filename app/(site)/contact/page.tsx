import Section from "@components/Section";
import ContactForm from "@components/Forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight">
            블로거 초청, 혼자 고민하지 마세요.
          </h1>
          <p className="mt-3 text-navy/80">
            간단히 남겨주시면, 사장님 가게에 맞는 방법을 함께 고민해 드립니다.
          </p>
        </div>
      </Section>

      <Section title="문의 폼">
        <div className="rounded-xl bg-white border border-navy/10 p-6">
          <ContactForm />
        </div>
      </Section>

      <Section title="기타 연락 수단">
        <ul className="grid sm:grid-cols-2 gap-4">
          <li className="rounded-lg bg-white border border-navy/10 p-4">
            <div className="font-semibold">이메일</div>
            <div className="text-sm text-navy/80">pernar.go@gmail.com</div>
          </li>
          <li className="rounded-lg bg-white border border-navy/10 p-4">
            <div className="font-semibold">카카오 채널</div>
            <div className="text-sm text-navy/80">카카오에서 '퍼나르파트너스' 검색</div>
          </li>
        </ul>
      </Section>
    </>
  );
}


