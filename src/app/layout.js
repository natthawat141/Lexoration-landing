import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

/** @type {import('next').Metadata} */
export const metadata = {
  title: {
    default: "Lexoration | Learn Online with Confidence",
    template: "%s | Lexoration",
  },
  description:
    "Lexoration is a trusted online learning platform offering flexible, expert-designed courses. Start your learning journey today.",
  keywords: [
    "Lexoration",
    "Online Courses",
    "E-learning",
    "Study Anywhere",
    "Modern Skills",
  ],
  metadataBase: new URL("https://lexoration-671824829377.asia-southeast1.run.app"),
  openGraph: {
    title: "Lexoration | Learn Online with Confidence",
    description:
      "Empower your career with flexible, expert-designed courses tailored to your goals.",
    url: "https://lexoration-671824829377.asia-southeast1.run.app",
    siteName: "Lexoration",
    type: "website",
    images: [
      {
        url: "https://lexoration-671824829377.asia-southeast1.run.app/LogoLXRT%201.png", // ← เปลี่ยนให้เป็น full URL
        width: 1200,
        height: 630,
        alt: "Lexoration Online Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexoration",
    description:
      "High-quality online learning made accessible, flexible, and impactful.",
    images: [
      "https://www.roseofyork.com/wp-content/uploads/2020/12/online-study.jpg",
    ],
  },
};

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* ✅ Google Search Console */}
        <meta
          name="google-site-verification"
          content="EMpAGfBmYyZxr5qdZubQREjkt3FkPWPhB0dQacMjJfM"
        />
      </head>
      <body className="antialiased bg-white text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
