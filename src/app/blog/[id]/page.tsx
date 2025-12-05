import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { getArticleById } from "@/data/blog-articles";
import { ArticleContent } from "@/components/blog/article-content";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    return (
      <main className="min-h-screen mt-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no disponible</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Volver al blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen mt-18 bg-background">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Volver al blog
        </Link>
        <div className="flex gap-2 mb-4 flex-wrap">
          {article.category.map((cat: string) => (
            <span
              key={cat}
              className="text-xs font-semibold text-primary-foreground bg-primary px-3 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="flex justify-center items-center mx-auto relative h-96 w-1/2 overflow-hidden rounded-lg">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.imageAlt}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8 text-muted-foreground italic text-lg">
          {article.excerpt}
        </div>

        <ArticleContent content={article.content} />

        {/* Share and back */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Volver a todos los artículos
          </Link>
        </div>
      </div>
    </main>
  );
}
