import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/data/blog-articles";

interface ArticleGridProps {
  articles: Article[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/blog/${article.id}`}
          className="block h-full"
        >
          <Card className="max-w-md h-full hover:shadow-lg transition-shadow duration-300">
            <CardContent className="space-y-6 text-sm flex flex-col h-full">
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.imageAlt || article.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <div className="mb-3">
                  {article.category.length > 0 && (
                    <Badge variant="outline" className="text-xs">
                      {article.category[0]}
                    </Badge>
                  )}
                </div>

                <h3 className="font-semibold text-lg mb-2 text-foreground line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    {/* Placeholder avatar if no author image */}
                    <span className="text-xs font-bold text-muted-foreground">
                      {article.author.charAt(0)}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-foreground">
                      {article.author}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
