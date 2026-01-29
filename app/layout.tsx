"use client";

import "./globals.css";
import type { ReactNode } from "react";

const fontFamily = {
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={fontFamily}>{children}</body>
    </html>
  );
}
