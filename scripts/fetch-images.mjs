import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const REQUEST_TIMEOUT_MS = 10_000;
const MAX_RETRIES = 3;
const RETRY_DELAYS_MS = [1000, 2000, 4000];
const OUTPUT_DIR = path.resolve(process.cwd(), "public/images");
const RESULT_PATH = path.resolve(process.cwd(), "scripts/fetch-results.json");

const imageList = [
  {
    id: "hero-bg",
    section: "hero",
    alt: "Khuôn viên Trường Đại học Ngoại ngữ ĐHQGHN",
    urls: [
      "https://ulis.vnu.edu.vn/files/uploads/2022/08/z3666030856042_d09ca10a98acf4e05b7b2a87a5c13d8f.jpg",
      "https://ulis.vnu.edu.vn/files/uploads/2023/08/khuon-vien-ulis.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=85",
    ],
    output: "hero-campus-ulis.webp",
    maxWidth: 1600,
  },
  {
    id: "hero-students",
    section: "hero",
    alt: "Sinh viên ULIS tươi cười tại khuôn viên trường",
    urls: [
      "https://ulis.vnu.edu.vn/files/uploads/2024/08/nhaphoc2024-1.jpg",
      "https://ulis.vnu.edu.vn/files/uploads/2025/08/nhaphoc2025-cover.jpg",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=85",
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=85",
    ],
    output: "hero-students.webp",
    maxWidth: 800,
  },
  {
    id: "about-library",
    section: "about",
    alt: "Không gian tự học sinh viên ULIS – Thư viện C3",
    urls: [
      "https://ulis.vnu.edu.vn/files/uploads/2021/04/tu-hoc-1.jpg",
      "https://ulis.vnu.edu.vn/files/uploads/2022/09/sv-tu-hoc.jpg",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85",
    ],
    output: "about-library.webp",
    maxWidth: 800,
  },
  {
    id: "about-books",
    section: "about",
    alt: "Trao đổi sách giáo trình sinh viên Việt Nam",
    urls: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=85"],
    output: "about-books.webp",
    maxWidth: 800,
  },
  {
    id: "problem-search",
    section: "problems",
    alt: "Sinh viên khó khăn tìm kiếm giáo trình",
    urls: ["https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=85"],
    output: "problem-student-search.webp",
    maxWidth: 800,
  },
  {
    id: "problem-books-pile",
    section: "problems",
    alt: "Sách giáo trình đại học cũ bị lãng phí",
    urls: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=85"],
    output: "problem-books-pile.webp",
    maxWidth: 800,
  },
  {
    id: "vision-campus-1",
    section: "vision",
    alt: "Khuôn viên ULIS – Không gian học tập",
    urls: [
      "https://ulis.vnu.edu.vn/files/uploads/2024/08/nhaphoc2024-2.jpg",
      "https://ulis.vnu.edu.vn/files/uploads/2023/08/campus-ulis-2.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=85",
    ],
    output: "vision-campus-1.webp",
    maxWidth: 600,
  },
  {
    id: "vision-study",
    section: "vision",
    alt: "Sinh viên học tập tại ULIS",
    urls: ["https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=85"],
    output: "vision-study.webp",
    maxWidth: 600,
  },
  {
    id: "vision-community",
    section: "vision",
    alt: "Cộng đồng sinh viên Việt Nam gắn kết",
    urls: ["https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=85"],
    output: "vision-community.webp",
    maxWidth: 600,
  },
  {
    id: "how-book-exchange",
    section: "how-it-works",
    alt: "Trao đổi mua bán sách giáo trình sinh viên",
    urls: ["https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=85"],
    output: "how-book-exchange.webp",
    maxWidth: 800,
  },
  {
    id: "gallery-campus-main",
    section: "gallery",
    alt: "Toàn cảnh khuôn viên Đại học Ngoại ngữ ĐHQGHN",
    urls: [
      "https://ulis.vnu.edu.vn/files/uploads/2023/08/z4625026186487_7d77a8eabcf0f35d9b2e5d6e9d7bc3a1.jpg",
      "https://ulis.vnu.edu.vn/files/uploads/2022/08/campus-toan-canh.jpg",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&q=85",
    ],
    output: "gallery-campus-main.webp",
    maxWidth: 1000,
  },
  {
    id: "gallery-library",
    section: "gallery",
    alt: "Thư viện C3 – Phòng đọc mở ULIS",
    urls: ["https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=85"],
    output: "gallery-library.webp",
    maxWidth: 600,
  },
  {
    id: "gallery-selfstudy",
    section: "gallery",
    alt: "Sinh viên ULIS tự học tại phòng Homies",
    urls: [
      "https://ulis.vnu.edu.vn/files/uploads/2022/09/sv-tu-hoc.jpg",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=85",
    ],
    output: "gallery-selfstudy.webp",
    maxWidth: 600,
  },
  {
    id: "gallery-outdoor",
    section: "gallery",
    alt: "Không gian ngoài trời khuôn viên ULIS",
    urls: ["https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&q=85"],
    output: "gallery-outdoor.webp",
    maxWidth: 600,
  },
  {
    id: "gallery-community",
    section: "gallery",
    alt: "Sinh viên kết nối cộng đồng ULIS",
    urls: ["https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=85"],
    output: "gallery-community.webp",
    maxWidth: 600,
  },
  {
    id: "cta-students",
    section: "cta",
    alt: "Sinh viên ULIS hân hoan trong ngày nhập học",
    urls: [
      "https://ulis.vnu.edu.vn/files/uploads/2025/08/nhaphoc2025-cover.jpg",
      "https://ulis.vnu.edu.vn/files/uploads/2024/08/nhaphoc2024-group.jpg",
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=85",
    ],
    output: "cta-students.webp",
    maxWidth: 800,
  },
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function buildHeaders(url) {
  if (!url.includes("ulis.vnu.edu.vn")) {
    return {};
  }

  return {
    Referer: "https://ulis.vnu.edu.vn/",
    "User-Agent": "Mozilla/5.0 (Node.js image fetch script)",
  };
}

async function fetchWithRetry(url, retries = MAX_RETRIES) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
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

      if (attempt < retries) {
        await wait(RETRY_DELAYS_MS[attempt] ?? RETRY_DELAYS_MS[RETRY_DELAYS_MS.length - 1]);
      }
    }
  }

  throw lastError;
}

async function processImage(buffer, maxWidth, outputPath) {
  const info = await sharp(buffer)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 85, effort: 4 })
    .toFile(outputPath);

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

async function readImageMetaFromDisk(outputPath) {
  const image = sharp(outputPath);
  const meta = await image.metadata();
  const tinyBuffer = await image
    .resize({ width: 8, height: 8, fit: "cover" })
    .webp({ quality: 45, effort: 4 })
    .toBuffer();
  const size = fs.statSync(outputPath).size;

  return {
    width: meta.width,
    height: meta.height,
    sizeBytes: size,
    sizeKB: Number((size / 1024).toFixed(2)),
    blurDataURL: `data:image/webp;base64,${tinyBuffer.toString("base64")}`,
  };
}

async function processItem(item) {
  const outputPath = path.join(OUTPUT_DIR, item.output);

  if (fs.existsSync(outputPath)) {
    const meta = await readImageMetaFromDisk(outputPath);
    console.log(`⏭️  [${item.id}] Bỏ qua vì file đã tồn tại: ${item.output}`);
    return {
      id: item.id,
      section: item.section,
      alt: item.alt,
      output: item.output,
      status: "skipped",
      outputPath,
      reason: "file_exists",
      maxWidth: item.maxWidth,
      ...meta,
    };
  }

  const errors = [];

  for (const url of item.urls) {
    try {
      const buffer = await fetchWithRetry(url);
      const meta = await processImage(buffer, item.maxWidth, outputPath);
      console.log(`✅ [${item.id}] Tải + optimize thành công từ: ${url}`);

      return {
        id: item.id,
        section: item.section,
        alt: item.alt,
        output: item.output,
        status: "success",
        source: url,
        outputPath,
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

  console.log(`❌ [${item.id}] Thất bại sau khi thử ${item.urls.length} URL`);

  return {
    id: item.id,
    section: item.section,
    alt: item.alt,
    output: item.output,
    status: "failed",
    maxWidth: item.maxWidth,
    errors,
  };
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });

  const settled = await Promise.allSettled(imageList.map((item) => processItem(item)));

  const results = settled.map((entry, index) => {
    if (entry.status === "fulfilled") {
      return entry.value;
    }

    return {
      id: imageList[index].id,
      section: imageList[index].section,
      alt: imageList[index].alt,
      output: imageList[index].output,
      status: "failed",
      errors: [{ message: entry.reason instanceof Error ? entry.reason.message : String(entry.reason) }],
    };
  });

  const summary = results.reduce(
    (acc, item) => {
      if (item.status === "success") acc.success += 1;
      else if (item.status === "failed") acc.failed += 1;
      else if (item.status === "skipped") acc.skipped += 1;
      return acc;
    },
    { success: 0, failed: 0, skipped: 0 }
  );

  const payload = {
    generatedAt: new Date().toISOString(),
    outputDir: OUTPUT_DIR,
    summary,
    items: results,
  };

  fs.writeFileSync(RESULT_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  console.log("\n===== TỔNG KẾT =====");
  console.log(`✅ Thành công: ${summary.success}`);
  console.log(`❌ Thất bại: ${summary.failed}`);
  console.log(`⏭️  Bỏ qua: ${summary.skipped}`);
  console.log(`📄 Kết quả chi tiết: ${RESULT_PATH}`);
}

main().catch((error) => {
  console.error("❌ Script bị lỗi không mong muốn:", error);
  process.exitCode = 1;
});
