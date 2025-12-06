import Section from "@components/Section";
import Card from "@components/Card";
import Button from "@components/Button";
import { BLOG_POSTS } from "@lib/data";

export default function BlogListPage() {
  return (
    <>
      <Section title="블로그" subtitle="퍼나르의 생각과 운영 노트">
        <div className="grid md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((p) => (
            <Card
              key={p.slug}
              title={p.title}
              description={`${p.summary}\n${p.date} · ${p.tags.join(", ")}`}
              icon="📝"
              footer={
                <div className="flex justify-end">
                  <Button href={`/blog/${p.slug}`} variant="ghost">읽기</Button>
                </div>
              }
            />
          ))}
        </div>
      </Section>
    </>
  );
}


