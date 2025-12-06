"use client";

import { useState } from "react";
import Button from "@components/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessType: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          이름 *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#FF6A00]"
          placeholder="홍길동"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          이메일 *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#FF6A00]"
          placeholder="example@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          전화번호 *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#FF6A00]"
          placeholder="010-1234-5678"
        />
      </div>

      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-2">
          업종 *
        </label>
        <select
          id="businessType"
          name="businessType"
          required
          value={formData.businessType}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#FF6A00]"
        >
          <option value="">선택해주세요</option>
          <option value="restaurant">식당</option>
          <option value="cafe">카페</option>
          <option value="retail">소매업</option>
          <option value="construction">공사업체</option>
          <option value="demolition">철거업</option>
          <option value="equipment">장비업</option>
          <option value="other">기타</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          문의 내용 *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] resize-none"
          placeholder="상담을 원하시는 내용을 자세히 적어주세요."
        />
      </div>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
          문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
          전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "전송 중..." : "문의하기"}
      </Button>
    </form>
  );
}


