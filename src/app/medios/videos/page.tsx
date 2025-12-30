"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import VideoHeroCard from "@/components/videos/video-hero-card";
import VideoGrid from "@/components/videos/video-grid";
import { videos } from "@/data/videos";
import { VideoHeader } from "@/components/videos/video-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos - Alejandría Consultora",
  description:
    "Explora la videoteca de Alejandría Consultora con contenido sobre tecnología, ciencia, educación e investigación.",
};
const filters = [
  { label: "Todos", count: null },
  { label: "Tecnología", count: null },
  { label: "Ciencia", count: null },
  { label: "Educación", count: null },
  { label: "Investigación", count: null },
];

export default function VideosPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videos.filter((video) => {
    const matchesFilter =
      activeFilter === "Todos" || video.category.includes(activeFilter);
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background py-12 mt-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="mb-12">
          <VideoHeader />
        </div>

        {/* Hero Card */}
        <VideoHeroCard />

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
                      ? "text-foreground border-b-primary"
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
                placeholder="Buscar videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        <VideoGrid videos={filteredVideos} />
      </div>
    </main>
  );
}
