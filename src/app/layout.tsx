import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
      <body className={`${montserrat.variable} antialiased`} style={{ fontFamily: 'var(--font-montserrat), "Montserrat", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
