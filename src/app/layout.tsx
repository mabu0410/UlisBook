import type { Metadata } from "next";
import "./globals.css";
import { JSON_LD, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ULIS BOOK – LOOP | Trao sách cũ – Nhận tri thức",
  description:
    "ULIS BOOK – LOOP là mạng lưới trao đổi giáo trình dành cho sinh viên ULIS, giúp mua bán giáo trình cũ nhanh chóng, tiết kiệm và tiện lợi.",
  keywords: [
    "ULIS BOOK LOOP",
    "trao đổi giáo trình ULIS",
    "mua bán giáo trình cũ",
    "giáo trình ULIS",
    "sinh viên ULIS",
    "sách cũ sinh viên",
    "mạng lưới trao đổi sách",
  ],
  openGraph: {
    title: "ULIS BOOK – LOOP | Trao sách cũ – Nhận tri thức",
    description:
      "Nền tảng trao đổi, mua bán giáo trình cũ dành cho sinh viên ULIS.",
    type: "website",
    locale: "vi_VN",
    siteName: "ULIS BOOK – LOOP",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "ULIS BOOK – LOOP",
    description: "Mạng lưới trao đổi giáo trình dành cho sinh viên ULIS.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
