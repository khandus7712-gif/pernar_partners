import Button from "@components/Button";
import Section from "@components/Section";
import { BLOG_POSTS } from "@lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default function BlogDetailPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <>
      <Section>
        <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <h1>{post.title}</h1>
          <p className="text-navy/70">{post.date} · {post.tags.join(", ")}</p>
          <p>
            본문 더미 텍스트입니다. 사장님 가게의 강점이 제대로 전달되도록, 사진과 글 기준을 명확히
            정하고 리뷰가 자연스럽게 올라오도록 돕는 것이 핵심입니다.
          </p>
          <p>
            블로거 초청은 단기 이벤트가 아니라, 가게의 스토리를 차곡차곡 쌓는 과정입니다. 
            그래서 과장 대신 진심을 담고, 꾸준히 점검하며 개선합니다.
          </p>
          <p>
            더 자세한 상담이 필요하시다면 아래 버튼을 눌러 문의해 주세요.
          </p>
        </article>
      </Section>
      <Section>
        <div className="rounded-2xl bg-navy text-white p-8 sm:p-12 text-center">
          <p className="text-lg font-semibold">
            이런 마케팅이 필요하다면, 퍼나르파트너스와 상담해 보세요.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" className="bg-white text-navy hover:bg-white/90">
              상담하기
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}


