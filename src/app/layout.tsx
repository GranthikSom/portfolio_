import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Granthik Som | Software Engineer Portfolio",
  description: "Portfolio of Granthik Som, showcasing projects in Web3, Mobile, and macOS widget development.",
  openGraph: {
    title: "Granthik Som - Software Engineer",
    description: "Portfolio showcasing open source contributions, apps, and decentralized platforms.",
    url: "https://granthiksom.github.io",
    siteName: "Granthik Som Portfolio",
    images: [
      {
        url: "/uploaded_media_1786479209955.png",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased text-slate-50 bg-transparent`}>
        {children}
      </body>
    </html>
  );
}
