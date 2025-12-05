"use client";

import { useState } from "react";
import Button from "@components/Button";

export default function BloggerApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    blogUrl: "",
    category: "",
    region: "",
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
        body: JSON.stringify({
          ...formData,
          type: "blogger_apply",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          blogUrl: "",
          category: "",
          region: "",
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
        <label htmlFor="blogUrl" className="block text-sm font-medium text-gray-300 mb-2">
          블로그 URL *
        </label>
        <input
          type="url"
          id="blogUrl"
          name="blogUrl"
          required
          value={formData.blogUrl}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#FF6A00]"
          placeholder="https://blog.naver.com/..."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
            주요 카테고리 *
          </label>
          <select
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#FF6A00]"
          >
            <option value="">선택해주세요</option>
            <option value="restaurant">식당/카페</option>
            <option value="travel">여행/맛집</option>
            <option value="lifestyle">라이프스타일</option>
            <option value="other">기타</option>
          </select>
        </div>

        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-300 mb-2">
            지역 *
          </label>
          <select
            id="region"
            name="region"
            required
            value={formData.region}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#FF6A00]"
          >
            <option value="">선택해주세요</option>
            <option value="gyeongnam">경남</option>
            <option value="busan">부산</option>
            <option value="other">기타</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          자기소개 및 경력
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] resize-none"
          placeholder="블로거 경력, 주요 활동 지역 등을 간단히 적어주세요."
        />
      </div>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
          신청이 성공적으로 전송되었습니다. 검토 후 연락드리겠습니다.
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
        {isSubmitting ? "전송 중..." : "신청하기"}
      </Button>
    </form>
  );
}

