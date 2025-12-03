import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Partner with Ganimi | Help Students Discover Their Path",
  description:
    "Join Ganimi's partner network. List your services, connect with self-aware students, and track their progress — all in one platform.",
  keywords: [
    "career guidance",
    "student services",
    "education platform",
    "career discovery",
    "partner network",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bricolage.variable} antialiased`}>
        <div className="gradient-bg" />
        <div className="grid-pattern" />
        {children}
      </body>
    </html>
  );
}
