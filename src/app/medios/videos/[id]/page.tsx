import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Share2, Bookmark, ChevronLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getVideoBySlug } from "@/data/videos";
import { VideoContent } from "@/components/videos/video-content";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const video = getVideoBySlug(params.id);
  return {
    title: video ? video.title : "Video no encontrado",
    description: video ? video.excerpt : "",
  };
}

export default async function VideoDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const video = getVideoBySlug(id);

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">
            Video no encontrado
          </h1>
          <Link href="/medios/videos">
            <Button>Volver a videos</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 mt-12 py-8">
        <Link
          href="/medios/videos"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Volver a videos
        </Link>
      </div>

      {/* Video Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Video Player */}
          <div className="relative rounded-lg overflow-hidden mb-8 bg-card aspect-video">
            {video.videoUrl.includes("youtube.com") ||
            video.videoUrl.includes("youtu.be") ? (
              <iframe
                src={video.videoUrl.replace("watch?v=", "embed/")}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : video.videoUrl.includes("vimeo.com") ? (
              <iframe
                src={video.videoUrl.replace(
                  "vimeo.com/",
                  "player.vimeo.com/video/"
                )}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video controls className="w-full h-full">
                <source src={video.videoUrl} type="video/mp4" />
                Tu navegador no soporta el tag de video.
              </video>
            )}
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex gap-2 mb-4 flex-wrap">
              {video.category.map((cat) => (
                <Badge key={cat} variant="secondary">
                  {cat}
                </Badge>
              ))}
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-foreground text-balance">
              {video.title}
            </h1>

            {/* Metadata and Actions */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between border-y border-border py-6 gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${video.author}`}
                    alt={video.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {video.author}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {video.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {video.duration}
                    </span>
                  </div>
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
          <div className="prose prose-lg max-w-none mb-12">
            <VideoContent content={video.content} />
          </div>

          {/* Related Videos CTA */}
          <div className="border-t border-border pt-8 flex justify-center">
            <Link href="/videos">
              <Button size="lg">Ver más videos</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
