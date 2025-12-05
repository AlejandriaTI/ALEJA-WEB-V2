"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="navy"
      enableSystem={false}
      themes={["navy", "light", "dark"]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
