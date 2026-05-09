import type { ReactNode } from "react";

// Root layout serves as a shell - actual content is in [locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
