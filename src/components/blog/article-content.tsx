"use client";

import React from "react";

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  // Parse the HTML content into structured sections
  const parseContent = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const elements = Array.from(doc.body.children);

    return elements.map((element, index) => {
      const tagName = element.tagName.toLowerCase();
      const textContent = element.textContent || "";
      const innerHTML = element.innerHTML;

      switch (tagName) {
        case "h2":
          return (
            <h2
              key={index}
              className="text-3xl font-bold mt-12 mb-6 text-foreground first:mt-0"
            >
              {textContent}
            </h2>
          );

        case "h3":
          return (
            <h3
              key={index}
              className="text-2xl font-bold mt-8 mb-4 text-foreground"
            >
              {textContent}
            </h3>
          );

        case "p":
          return (
            <p
              key={index}
              className="mb-6 text-base leading-7 text-foreground/90"
              dangerouslySetInnerHTML={{ __html: innerHTML }}
            />
          );

        case "ul":
          return (
            <ul
              key={index}
              className="list-disc list-outside mb-6 space-y-3 pl-6"
            >
              {Array.from(element.children).map((li, liIndex) => (
                <li
                  key={liIndex}
                  className="text-base leading-7 text-foreground/90"
                  dangerouslySetInnerHTML={{ __html: li.innerHTML }}
                />
              ))}
            </ul>
          );

        case "ol":
          return (
            <ol
              key={index}
              className="list-decimal list-outside mb-6 space-y-3 pl-6"
            >
              {Array.from(element.children).map((li, liIndex) => (
                <li
                  key={liIndex}
                  className="text-base leading-7 text-foreground/90"
                  dangerouslySetInnerHTML={{ __html: li.innerHTML }}
                />
              ))}
            </ol>
          );

        case "blockquote":
          return (
            <blockquote
              key={index}
              className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground"
            >
              {textContent}
            </blockquote>
          );

        case "pre":
          return (
            <pre
              key={index}
              className="bg-muted p-4 rounded-lg overflow-x-auto mb-6"
            >
              <code className="text-sm font-mono">{textContent}</code>
            </pre>
          );

        case "table":
          return (
            <div key={index} className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <tbody>
                  {Array.from(element.querySelectorAll("tr")).map(
                    (tr, trIndex) => (
                      <tr key={trIndex}>
                        {Array.from(tr.children).map((cell, cellIndex) => {
                          const CellTag = cell.tagName.toLowerCase() as
                            | "th"
                            | "td";
                          return (
                            <CellTag
                              key={cellIndex}
                              className={
                                CellTag === "th"
                                  ? "bg-muted p-3 text-left font-bold border border-border"
                                  : "p-3 border border-border"
                              }
                            >
                              {cell.textContent}
                            </CellTag>
                          );
                        })}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          );

        default:
          return (
            <div
              key={index}
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: element.outerHTML }}
            />
          );
      }
    });
  };

  return <article className="leading-relaxed">{parseContent(content)}</article>;
}
