export const SITE_NAME = "ULIS BOOK LOOP";
export const SITE_TAGLINE = "Nền tảng trao đổi giáo trình cho sinh viên ULIS";
export const SITE_HEADLINE = "Tham Gia ULIS Book Loop Ngay Hôm Nay";
export const SITE_DESCRIPTION =
  "ULIS BOOK LOOP kết nối sinh viên ULIS để trao đổi giáo trình nhanh, tiết kiệm chi phí và lan tỏa giá trị học tập trong cộng đồng.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ulis-book-loop.vercel.app";

export const CONTACT = {
  email: "ulisbookloop@gmail.com",
};

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  inLanguage: "vi-VN",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    email: CONTACT.email,
  },
};
