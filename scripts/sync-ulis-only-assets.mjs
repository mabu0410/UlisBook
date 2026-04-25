import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const REQUEST_TIMEOUT_MS = 10_000;
const MAX_RETRIES = 3;
const RETRY_DELAYS_MS = [1000, 2000, 4000];

const PROJECT_ROOT = process.cwd();
const OUTPUT_DIR = path.resolve(PROJECT_ROOT, "public/images");
const CONSTANTS_PATH = path.resolve(PROJECT_ROOT, "src/constants/images.ts");
const RESULT_PATH = path.resolve(PROJECT_ROOT, "scripts/ulis-only-results.json");

const ULIS_URLS = {
  campusMain: "https://ulis.vnu.edu.vn/files/uploads/2024/09/DSCF8002-scaled.jpg",
  studentsMain: "https://ulis.vnu.edu.vn/files/uploads/2024/09/DSCF8079-scaled.jpg",
  libraryStudy: "https://ulis.vnu.edu.vn/files/uploads/2017/07/2024-05-29_16-43-19.jpg",
  booksDesk: "https://ulis.vnu.edu.vn/files/uploads/2017/07/2024-05-29_16-44-25.jpg",
  studyGroup: "https://ulis.vnu.edu.vn/files/uploads/2017/07/IMG_2847-1024x683.jpg",
  campusWide:
    "https://ulis.vnu.edu.vn/files/uploads/2017/07/158249485_3787823914632000_3569994486956151864_o-1024x768.jpg",
  libraryC3: "https://ulis.vnu.edu.vn/files/uploads/2017/07/IMG_0828-1024x683.jpg",
  studentsEvent: "https://ulis.vnu.edu.vn/files/uploads/2024/09/DSCF8035-scaled.jpg",
};

const imagePlan = [
  {
    key: "heroBg",
    section: "hero",
    output: "ulis-hero-campus.webp",
    maxWidth: 1800,
    quality: 80,
    alt: "Toàn cảnh khuôn viên Trường Đại học Ngoại ngữ - ĐHQGHN (ULIS)",
    urls: [ULIS_URLS.campusMain],
  },
  {
    key: "heroStudents",
    section: "hero",
    output: "ulis-hero-students.webp",
    maxWidth: 900,
    alt: "Sinh viên ULIS tại khuôn viên trường trong ngày hoạt động đầu năm",
    urls: [ULIS_URLS.studentsMain],
  },
  {
    key: "aboutLibrary",
    section: "about",
    output: "ulis-about-library-c3.webp",
    maxWidth: 900,
    alt: "Không gian tự học và đọc tài liệu tại Thư viện C3 ULIS",
    urls: [ULIS_URLS.libraryStudy],
  },
  {
    key: "aboutBooks",
    section: "about",
    output: "ulis-about-books.webp",
    maxWidth: 900,
    alt: "Giáo trình ngoại ngữ và tài liệu học tập của sinh viên ULIS",
    urls: [ULIS_URLS.booksDesk],
  },
  {
    key: "problemSearch",
    section: "problems",
    output: "ulis-problem-search.webp",
    maxWidth: 900,
    alt: "Sinh viên ULIS tìm kiếm giáo trình theo mã học phần",
    urls: [ULIS_URLS.studyGroup],
  },
  {
    key: "problemBooksPile",
    section: "problems",
    output: "ulis-problem-books.webp",
    maxWidth: 900,
    alt: "Giáo trình cũ chưa được tái sử dụng trong cộng đồng sinh viên",
    urls: [ULIS_URLS.libraryC3],
  },
  {
    key: "visionCampus",
    section: "vision",
    output: "ulis-vision-campus.webp",
    maxWidth: 700,
    alt: "Khuôn viên xanh của ULIS với không gian học tập mở",
    urls: [ULIS_URLS.campusWide],
  },
  {
    key: "visionStudy",
    section: "vision",
    output: "ulis-vision-study.webp",
    maxWidth: 700,
    alt: "Sinh viên ULIS học tập và trao đổi kiến thức tại giảng đường",
    urls: [ULIS_URLS.studyGroup],
  },
  {
    key: "visionCommunity",
    section: "vision",
    output: "ulis-vision-community.webp",
    maxWidth: 700,
    alt: "Cộng đồng sinh viên ULIS kết nối trong hoạt động học thuật",
    urls: [ULIS_URLS.studentsEvent],
  },
  {
    key: "howBookExchange",
    section: "how-it-works",
    output: "ulis-learning-book-exchange.webp",
    maxWidth: 1000,
    alt: "Sinh viên ULIS trao đổi mua bán giáo trình trong khuôn viên trường",
    urls: [ULIS_URLS.studyGroup],
  },
  {
    key: "galleryCampusMain",
    section: "gallery",
    output: "ulis-library-campus-main.webp",
    maxWidth: 1000,
    quality: 80,
    alt: "Toàn cảnh khuôn viên Trường Đại học Ngoại ngữ - ĐHQGHN",
    urls: [ULIS_URLS.campusWide],
  },
  {
    key: "galleryLibrary",
    section: "gallery",
    output: "ulis-library-c3.webp",
    maxWidth: 800,
    alt: "Không gian Thư viện C3 ULIS với khu vực đọc mở",
    urls: [ULIS_URLS.libraryC3],
  },
  {
    key: "gallerySelfstudy",
    section: "gallery",
    output: "ulis-library-selfstudy.webp",
    maxWidth: 800,
    alt: "Sinh viên ULIS tự học và làm việc nhóm tại không gian học tập",
    urls: [ULIS_URLS.libraryStudy],
  },
  {
    key: "galleryOutdoor",
    section: "gallery",
    output: "ulis-library-outdoor.webp",
    maxWidth: 800,
    alt: "Không gian ngoài trời trong khuôn viên ULIS dành cho sinh viên",
    urls: [ULIS_URLS.campusMain],
  },
  {
    key: "galleryCommunity",
    section: "gallery",
    output: "ulis-library-community.webp",
    maxWidth: 800,
    alt: "Sinh viên ULIS giao lưu và kết nối cộng đồng",
    urls: [ULIS_URLS.studentsMain],
  },
  {
    key: "ctaStudents",
    section: "cta",
    output: "ulis-cta-students.webp",
    maxWidth: 1200,
    quality: 74,
    alt: "Sinh viên ULIS hào hứng tham gia hoạt động tại khuôn viên trường",
    urls: [ULIS_URLS.studentsEvent],
  },
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function buildHeaders(url) {
  if (!url.includes("ulis.vnu.edu.vn")) {
    return {};
  }

  return {
    Referer: "https://ulis.vnu.edu.vn/",
    "User-Agent": "Mozilla/5.0 (Node.js ULIS image sync script)",
  };
}

async function fetchWithRetry(url) {
  let lastError;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch(url, {
        headers: buildHeaders(url),
        redirect: "follow",
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const buffer = Buffer.from(await res.arrayBuffer());
      clearTimeout(timeout);
      return buffer;
    } catch (error) {
      clearTimeout(timeout);
      lastError = error;
      if (attempt < MAX_RETRIES) {
        await wait(RETRY_DELAYS_MS[attempt] ?? RETRY_DELAYS_MS[RETRY_DELAYS_MS.length - 1]);
      }
    }
  }

  throw lastError;
}

async function processImage(buffer, outputPath, maxWidth, quality = 85) {
  const image = sharp(buffer).rotate().resize({ width: maxWidth, withoutEnlargement: true }).webp({
    quality,
    effort: 4,
  });

  const info = await image.toFile(outputPath);
  const tinyBuffer = await sharp(buffer)
    .rotate()
    .resize({ width: 8, height: 8, fit: "cover" })
    .webp({ quality: 45, effort: 4 })
    .toBuffer();

  return {
    width: info.width,
    height: info.height,
    sizeBytes: info.size,
    sizeKB: Number((info.size / 1024).toFixed(2)),
    blurDataURL: `data:image/webp;base64,${tinyBuffer.toString("base64")}`,
  };
}

async function processItem(item) {
  const outputPath = path.join(OUTPUT_DIR, item.output);
  const errors = [];

  for (const url of item.urls) {
    try {
      const buffer = await fetchWithRetry(url);
      const meta = await processImage(buffer, outputPath, item.maxWidth, item.quality ?? 85);

      console.log(`✅ [${item.key}] Synced from ${url}`);
      return {
        key: item.key,
        section: item.section,
        output: item.output,
        src: `/images/${item.output}`,
        alt: item.alt,
        source: url,
        status: "success",
        maxWidth: item.maxWidth,
        ...meta,
      };
    } catch (error) {
      errors.push({
        url,
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  console.log(`❌ [${item.key}] Failed after trying ${item.urls.length} URL(s)`);
  return {
    key: item.key,
    section: item.section,
    output: item.output,
    src: `/images/${item.output}`,
    alt: item.alt,
    status: "failed",
    maxWidth: item.maxWidth,
    errors,
  };
}

function buildConstantsTs(results) {
  const failed = results.filter((item) => item.status !== "success");
  if (failed.length > 0) {
    const names = failed.map((item) => item.key).join(", ");
    throw new Error(`Cannot update constants. Failed keys: ${names}`);
  }

  const byKey = new Map(results.map((item) => [item.key, item]));
  const lines = [];
  lines.push("export type LandingImageAsset = {");
  lines.push("  src: string;");
  lines.push("  alt: string;");
  lines.push("  width: number;");
  lines.push("  height: number;");
  lines.push("  blurDataURL: string;");
  lines.push("};");
  lines.push("");
  lines.push("export const LANDING_IMAGES = {");

  for (const item of imagePlan) {
    const result = byKey.get(item.key);
    if (!result) {
      throw new Error(`Missing result for key: ${item.key}`);
    }

    lines.push(`  ${item.key}: {`);
    lines.push(`    src: "${result.src}",`);
    lines.push(`    alt: "${result.alt.replaceAll('"', '\\"')}",`);
    lines.push(`    width: ${result.width},`);
    lines.push(`    height: ${result.height},`);
    lines.push("    blurDataURL:");
    lines.push(`      "${result.blurDataURL}",`);
    lines.push("  },");
  }

  lines.push("} satisfies Record<string, LandingImageAsset>;");
  lines.push("");
  return `${lines.join("\n")}`;
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });

  const settled = await Promise.allSettled(imagePlan.map((item) => processItem(item)));
  const results = settled.map((entry, index) => {
    if (entry.status === "fulfilled") {
      return entry.value;
    }

    return {
      key: imagePlan[index].key,
      section: imagePlan[index].section,
      output: imagePlan[index].output,
      src: `/images/${imagePlan[index].output}`,
      alt: imagePlan[index].alt,
      status: "failed",
      maxWidth: imagePlan[index].maxWidth,
      errors: [{ message: entry.reason instanceof Error ? entry.reason.message : String(entry.reason) }],
    };
  });

  fs.writeFileSync(
    RESULT_PATH,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        summary: {
          success: results.filter((item) => item.status === "success").length,
          failed: results.filter((item) => item.status === "failed").length,
        },
        results,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  const constantsContent = buildConstantsTs(results);
  fs.writeFileSync(CONSTANTS_PATH, constantsContent, "utf8");

  const oversized = results
    .filter((item) => item.status === "success")
    .filter((item) => item.sizeBytes > 200 * 1024)
    .map((item) => `${item.key} (${item.sizeKB}KB)`);

  console.log("");
  console.log(`Synced ${results.filter((item) => item.status === "success").length}/${results.length} assets.`);
  if (oversized.length > 0) {
    console.log(`⚠️  Over 200KB: ${oversized.join(", ")}`);
  } else {
    console.log("✅ All generated assets are <= 200KB.");
  }
}

main().catch((error) => {
  console.error("Fatal:", error);
  process.exitCode = 1;
});
