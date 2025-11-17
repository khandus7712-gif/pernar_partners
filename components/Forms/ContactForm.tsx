"use client";
import { useState } from "react";

type FormValues = {
  name: string;
  category: string;
  contact: string;
  interest: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  category: "",
  contact: "",
  interest: "",
  message: ""
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("[CONTACT_SUBMIT]", values);
    setSubmitted(true);
    setValues(initialValues);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">상호명</label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="예) 아롱하다"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">업종/지역</label>
          <input
            name="category"
            value={values.category}
            onChange={handleChange}
            className="w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="예) 전골/창원 상남동"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">연락처</label>
          <input
            name="contact"
            value={values.contact}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="전화 또는 이메일"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">관심 서비스</label>
          <select
            name="interest"
            value={values.interest}
            onChange={handleChange}
            className="w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">선택</option>
            <option value="invite">블로거 초청 대행</option>
            <option value="quality">리뷰/콘텐츠 퀄리티 관리</option>
            <option value="report">결과 리포트/다음 액션</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">자유롭게 남기실 내용</label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="현재 상황과 고민을 적어 주세요."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        무료 상담 신청하기
      </button>
      {submitted && (
        <p className="text-sm text-green-700">제출 완료! 빠르게 연락드리겠습니다.</p>
      )}
    </form>
  );
}



