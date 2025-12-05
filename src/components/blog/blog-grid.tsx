"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/data/blog-articles";

interface BlogPostCardProps {
  id: string;
  category: string[];
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
}

function BlogPostCard({
  id,
  category,
  title,
  date,
  description,
  image,
  imageAlt,
}: BlogPostCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex gap-2 mb-3 flex-wrap">
          {category.map((cat) => (
            <span
              key={cat}
              className="text-xs font-semibold text-primary-foreground bg-primary px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{date}</p>
        <p className="text-sm text-foreground mb-4 line-clamp-3">
          {description}
        </p>
        <Link
          href={`/blog/${id}`}
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
        >
          Leer más <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

interface BlogGridProps {
  articles: Article[];
}

export function BlogGrid({ articles }: BlogGridProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No se encontraron artículos que coincidan con tu búsqueda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <BlogPostCard
          key={article.id}
          id={article.id}
          category={article.category}
          title={article.title}
          date={article.date}
          description={article.excerpt}
          image={article.image}
          imageAlt={article.imageAlt}
        />
      ))}
    </div>
  );
}
