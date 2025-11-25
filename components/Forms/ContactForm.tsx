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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setError(""); // 에러 메시지 초기화
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    console.log("[ContactForm] 제출 시작:", values);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("[ContactForm] API 응답 상태:", response.status);

      const data = await response.json();
      console.log("[ContactForm] API 응답 데이터:", data);

      if (!response.ok) {
        throw new Error(data.error || "문의 전송에 실패했습니다.");
      }

      console.log("[ContactForm] 성공! Google Sheets에 저장되었습니다.");
      setSubmitted(true);
      setValues(initialValues);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("[ContactForm] 에러 발생:", err);
      setError(err instanceof Error ? err.message : "문의 전송 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
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
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "전송 중..." : "무료 상담 신청하기"}
      </button>
      {submitted && (
        <p className="text-sm text-green-600 font-medium">✅ 제출 완료! 빠르게 연락드리겠습니다.</p>
      )}
      {error && (
        <p className="text-sm text-red-600 font-medium">❌ {error}</p>
      )}
    </form>
  );
}



