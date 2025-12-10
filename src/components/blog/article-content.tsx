"use client";

import React from "react";

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div
      className="article-content space-y-4"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
