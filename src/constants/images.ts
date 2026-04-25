export type LandingImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export const LANDING_IMAGES = {
  heroBg: {
    src: "/images/ulis-hero-campus.webp",
    alt: "Toàn cảnh khuôn viên Trường Đại học Ngoại ngữ - ĐHQGHN (ULIS)",
    width: 1800,
    height: 1350,
    blurDataURL:
      "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAQCdASoIAAgAAwBSJZQCdADzes2gAP0ChOYUbWw3xTNZVTRt1mQFVAEWEm6pVrisRzR8QTxoe5sOFcOqZdODwomixDw12QAAAA==",
  },
  heroStudents: {
    src: "/images/ulis-hero-students.webp",
    alt: "Sinh viên ULIS tại khuôn viên trường trong ngày hoạt động đầu năm",
    width: 900,
    height: 675,
    blurDataURL:
      "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoIAAgAAwBSJYgAAp2O+JgywAD+4oyJnOvzoY+5EMs8i5mKIMfsBPWeuTrD+0wYE5vJtMD/MtbVNjWSwqGg3ajHCgwjbwAA",
  },
  aboutLibrary: {
    src: "/images/ulis-about-library-c3.webp",
    alt: "Không gian tự học và đọc tài liệu tại Thư viện C3 ULIS",
    width: 900,
    height: 666,
    blurDataURL:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAgAAwBSJZgCdADzetFcAAD4Mn01j37uX7xwBeJ2o5xVbCTIEXZy/bwSv2stMItNl2DP4rKxQAAA",
  },
  aboutBooks: {
    src: "/images/ulis-about-books.webp",
    alt: "Giáo trình ngoại ngữ và tài liệu học tập của sinh viên ULIS",
    width: 900,
    height: 676,
    blurDataURL:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoIAAgAAwBSJQBOgB8uxpCAAP62okHLYzjRaMLvBcOGfuQBEkX8TWZ5OfKaYOKkETWNlvqR0c8NphUAAAA=",
  },
  problemSearch: {
    src: "/images/ulis-problem-search.webp",
    alt: "Sinh viên ULIS tìm kiếm giáo trình theo mã học phần",
    width: 900,
    height: 600,
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAgAAwBSJQAAXOP1izgAAP73IR4AOhoWDek7SigAjC4elq8kqkoaQKpEmQ5epXlcAAAA",
  },
  problemBooksPile: {
    src: "/images/ulis-problem-books.webp",
    alt: "Giáo trình cũ chưa được tái sử dụng trong cộng đồng sinh viên",
    width: 900,
    height: 600,
    blurDataURL:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAgAAwBSJQBdgB6Sv8tAAP7Xmmi23GkM2PHDDnzbfQinLyRndGCIW96dkobQ0MF6rvdCgAA=",
  },
  visionCampus: {
    src: "/images/ulis-vision-campus.webp",
    alt: "Khuôn viên xanh của ULIS với không gian học tập mở",
    width: 700,
    height: 525,
    blurDataURL:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoIAAgAAwBSJZQAAppJJLgA3hsSaoSd6XIccDf3Mr2puR1G60Sk10oGrv+wAA==",
  },
  visionStudy: {
    src: "/images/ulis-vision-study.webp",
    alt: "Sinh viên ULIS học tập và trao đổi kiến thức tại giảng đường",
    width: 700,
    height: 467,
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAgAAwBSJQAAXOP1izgAAP73IR4AOhoWDek7SigAjC4elq8kqkoaQKpEmQ5epXlcAAAA",
  },
  visionCommunity: {
    src: "/images/ulis-vision-community.webp",
    alt: "Cộng đồng sinh viên ULIS kết nối trong hoạt động học thuật",
    width: 700,
    height: 525,
    blurDataURL:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAgAAwBSJaACdAD0VzrLQAD+1130iRmfxr1gWFToNOE759UcJuOaeBSaxxU22hW8NTa9+EQeW/amAAA=",
  },
  howBookExchange: {
    src: "/images/ulis-learning-book-exchange.webp",
    alt: "Sinh viên ULIS trao đổi mua bán giáo trình trong khuôn viên trường",
    width: 1000,
    height: 667,
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAgAAwBSJQAAXOP1izgAAP73IR4AOhoWDek7SigAjC4elq8kqkoaQKpEmQ5epXlcAAAA",
  },
  galleryCampusMain: {
    src: "/images/ulis-library-campus-main.webp",
    alt: "Toàn cảnh khuôn viên Trường Đại học Ngoại ngữ - ĐHQGHN",
    width: 1000,
    height: 750,
    blurDataURL:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoIAAgAAwBSJZQAAppJJLgA3hsSaoSd6XIccDf3Mr2puR1G60Sk10oGrv+wAA==",
  },
  galleryLibrary: {
    src: "/images/ulis-library-c3.webp",
    alt: "Không gian Thư viện C3 ULIS với khu vực đọc mở",
    width: 800,
    height: 534,
    blurDataURL:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAgAAwBSJQBdgB6Sv8tAAP7Xmmi23GkM2PHDDnzbfQinLyRndGCIW96dkobQ0MF6rvdCgAA=",
  },
  gallerySelfstudy: {
    src: "/images/ulis-library-selfstudy.webp",
    alt: "Sinh viên ULIS tự học và làm việc nhóm tại không gian học tập",
    width: 800,
    height: 592,
    blurDataURL:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAgAAwBSJZgCdADzetFcAAD4Mn01j37uX7xwBeJ2o5xVbCTIEXZy/bwSv2stMItNl2DP4rKxQAAA",
  },
  galleryOutdoor: {
    src: "/images/ulis-library-outdoor.webp",
    alt: "Không gian ngoài trời trong khuôn viên ULIS dành cho sinh viên",
    width: 800,
    height: 600,
    blurDataURL:
      "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAQCdASoIAAgAAwBSJZQCdADzes2gAP0ChOYUbWw3xTNZVTRt1mQFVAEWEm6pVrisRzR8QTxoe5sOFcOqZdODwomixDw12QAAAA==",
  },
  galleryCommunity: {
    src: "/images/ulis-library-community.webp",
    alt: "Sinh viên ULIS giao lưu và kết nối cộng đồng",
    width: 800,
    height: 600,
    blurDataURL:
      "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoIAAgAAwBSJYgAAp2O+JgywAD+4oyJnOvzoY+5EMs8i5mKIMfsBPWeuTrD+0wYE5vJtMD/MtbVNjWSwqGg3ajHCgwjbwAA",
  },
  ctaStudents: {
    src: "/images/ulis-cta-students.webp",
    alt: "Sinh viên ULIS hào hứng tham gia hoạt động tại khuôn viên trường",
    width: 1200,
    height: 900,
    blurDataURL:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAgAAwBSJaACdAD0VzrLQAD+1130iRmfxr1gWFToNOE759UcJuOaeBSaxxU22hW8NTa9+EQeW/amAAA=",
  },
} satisfies Record<string, LandingImageAsset>;
