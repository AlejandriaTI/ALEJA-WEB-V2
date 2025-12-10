import Link from "next/link";
import Image from "next/image";
import { Share2, Bookmark, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">
            Artículo no encontrado
          </h1>
          <Link href="/blog">
            <Button>Volver al blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background mt-24">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Volver al blog
        </Link>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden mb-8 h-64 md:h-96 w-full">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.imageAlt || article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              {article.category.map((cat) => (
                <Badge key={cat} variant="secondary">
                  {cat}
                </Badge>
              ))}
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-foreground text-balance">
              {article.title}
            </h1>

            {/* Author and Date */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author}`}
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {article.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {article.date} · {article.readTime}
                  </p>
                </div>
              </div>

              {/* Share and Bookmark */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-background"
                >
                  <Share2 className="w-4 h-4" />
                  Compartir
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-background"
                >
                  <Bookmark className="w-4 h-4" />
                  Guardar
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <ArticleContent content={article.content} />
          </div>

          {/* Related Articles CTA */}
          <div className="border-t border-border pt-8 flex justify-center">
            <Link href="/blog">
              <Button size="lg">Ver más artículos</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
