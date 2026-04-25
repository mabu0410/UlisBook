export const SITE_NAME = "ULIS BOOK – LOOP";
export const SITE_TAGLINE = "Mạng lưới trao đổi giáo trình dành cho sinh viên ULIS";
export const SITE_HEADLINE = "Trao sách cũ – Nhận tri thức";
export const SITE_DESCRIPTION =
  "ULIS BOOK – LOOP là landing page trao đổi giáo trình dành cho sinh viên ULIS, giúp mua bán sách cũ nhanh, tiết kiệm và minh bạch.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ulis-book-loop.vercel.app";

export const CONTACT = {
  email: "ulisbookloop@gmail.com",
  fanpage: "ULIS Book – Loop",
  address: "Trường Đại học Ngoại ngữ – ĐHQGHN",
};

export const NAV_LINKS = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Vấn đề", href: "#problems" },
  { label: "Cách mua/bán", href: "#how-it-works" },
  { label: "Gallery", href: "#gallery" },
  { label: "Liên hệ", href: "#contact" },
];

export const HIGHLIGHTS = [
  { label: "Tìm sách nhanh", icon: "Search" },
  { label: "Tiết kiệm chi phí", icon: "Wallet" },
  { label: "Tái sử dụng giáo trình", icon: "RefreshCw" },
  { label: "Kết nối cộng đồng", icon: "Users" },
];

export const PROBLEMS = [
  {
    icon: "BookSearch",
    title: "Khó tìm đúng giáo trình",
    desc: "Không có nơi lọc sách theo khoa và mã học phần chính xác, gây mất thời gian tìm kiếm.",
  },
  {
    icon: "Scatter",
    title: "Thông tin phân tán",
    desc: "Không có nền tảng chung, thông tin trao đổi rải rác khắp nơi, khó tổng hợp.",
  },
  {
    icon: "Clock",
    title: "Mất thời gian trao đổi",
    desc: "Phải đăng bài qua nhiều kênh khác nhau, liên hệ qua lại mất nhiều công sức.",
  },
  {
    icon: "Trash",
    title: "Giáo trình bị lãng phí",
    desc: "Nhiều giáo trình cũ bị bỏ phí sau mỗi học kỳ, không được tái sử dụng hiệu quả.",
  },
];

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  description: SITE_TAGLINE,
  url: SITE_URL,
  inLanguage: "vi-VN",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    email: CONTACT.email,
  },
};
