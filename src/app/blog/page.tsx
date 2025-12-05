"use client";

import { useState, useMemo } from "react";
import { BlogHeader } from "@/components/blog/blog-header";
import { SearchBar } from "@/components/blog/search-bar";
import { FeaturedPost } from "@/components/blog/featured-post";
import { BlogGrid } from "@/components/blog/blog-grid";
import { articles, searchArticles } from "@/data/blog-articles";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter articles based on search query
  const filteredArticles = useMemo(() => {
    return searchArticles(searchQuery);
  }, [searchQuery]);

  return (
    <main className="min-h-screen mt-12">
      <BlogHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FeaturedPost
          totalArticles={articles.length}
          filteredArticles={filteredArticles.length}
        />
        <BlogGrid articles={filteredArticles} />
      </div>
    </main>
  );
}
