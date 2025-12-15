import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Play } from "lucide-react";
import type { Video } from "@/data/videos";

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <Link key={video.id} href={`/medios/videos/${video.slug}`}>
          <div className="group overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-muted">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <div className="flex gap-2 mb-3 flex-wrap">
                {video.category.map((cat) => (
                  <Badge key={cat} variant="secondary" className="text-xs">
                    {cat}
                  </Badge>
                ))}
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2 text-balance">
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                {video.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground border-t border-border pt-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {video.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
