import type { Metadata } from "next";
import "./globals.css";
import { JSON_LD, SITE_DESCRIPTION, SITE_URL } from "@/constants/site";

const jsonLdPayload = JSON.stringify(JSON_LD).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ULIS BOOK LOOP | Nền tảng trao đổi giáo trình cho sinh viên ULIS",
  description: SITE_DESCRIPTION,
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
    title: "ULIS BOOK LOOP | Nền tảng trao đổi giáo trình cho sinh viên ULIS",
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "vi_VN",
    siteName: "ULIS BOOK – LOOP",
    url: "/",
    images: [
      {
        url: "/images/1.jpeg",
        width: 1200,
        height: 630,
        alt: "ULIS BOOK LOOP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ULIS BOOK – LOOP",
    description: SITE_DESCRIPTION,
    images: ["/images/1.jpeg"],
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
      <body className="antialiased" suppressHydrationWarning>
        <script
          id="website-json-ld"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: jsonLdPayload }}
        />
        {children}
      </body>
    </html>
  );
}
