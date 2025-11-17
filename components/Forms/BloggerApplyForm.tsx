"use client";
import { useState } from "react";

type ApplyValues = {
  nickname: string;
  blogUrl: string;
  category: string;
  region: string;
  email: string;
};

const initialValues: ApplyValues = {
  nickname: "",
  blogUrl: "",
  category: "",
  region: "",
  email: ""
};

export default function BloggerApplyForm() {
  const [values, setValues] = useState<ApplyValues>(initialValues);
  const [done, setDone] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("[BLOGGER_APPLY]", values);
    setDone(true);
    setValues(initialValues);
    setTimeout(() => setDone(false), 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">이름/닉네임</label>
          <input
            name="nickname"
            value={values.nickname}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">블로그 주소</label>
          <input
            name="blogUrl"
            value={values.blogUrl}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="https://"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">주요 카테고리</label>
          <input
            name="category"
            value={values.category}
            onChange={handleChange}
            className="w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="맛집/카페/디저트 등"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">활동 지역</label>
          <input
            name="region"
            value={values.region}
            onChange={handleChange}
            className="w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="창원/경남/부산 등"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">이메일</label>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="you@example.com"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        파트너 신청하기
      </button>
      {done && (
        <p className="text-sm text-green-700">신청 완료! 검토 후 연락드리겠습니다.</p>
      )}
    </form>
  );
}



