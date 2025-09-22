import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "동문 - 동창연결서비스",
  description: "동문동창과 다시 만나는 특별한 공간",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
