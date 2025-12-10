"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import HeroCard from "@/components/blog/hero-card";
import ArticleGrid from "@/components/blog/article-grid";
import { articles } from "@/data/blog-articles";
import { BlogHeader } from "@/components/blog/blog-header";

const filters = [
  { label: "All", count: null },
  { label: "HOSTING", count: null },
  { label: "WORDPRESS", count: null },
  { label: "ASTRO", count: null },
  { label: "TUTORIAL", count: null },
];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesFilter =
      activeFilter === "All" || article.category.includes(activeFilter);
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background mt-14">
      <div className="container mx-auto px-4 py-12">
        {/* Heading Section */}
        <div className="mb-12">
          <BlogHeader />
        </div>

        {/* Hero Card */}
        <HeroCard />

        {/* Search and Filters Section */}
        <div className="mt-12">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 border-b border-border pb-4">
            {/* Filter Buttons */}
            <div className="flex gap-6 items-center overflow-x-auto w-full md:w-auto pb-2 md:pb-0 -mb-px">
              {filters.map((filter) => (
                <button
                  key={filter.label}
                  onClick={() => setActiveFilter(filter.label)}
                  className={`font-medium transition-colors duration-200 pb-2 border-b-2 whitespace-nowrap ${
                    activeFilter === filter.label
                      ? "text-foreground border-b-foreground"
                      : "text-muted-foreground border-b-transparent hover:text-foreground"
                  }`}
                >
                  {filter.label}
                  {filter.count && (
                    <span className="ml-2 text-xs font-semibold text-primary">
                      {filter.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <ArticleGrid articles={filteredArticles} />
      </div>
    </main>
  );
}
