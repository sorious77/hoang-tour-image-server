import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 4000;

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error("환경 변수가 올바르게 설정되지 않았습니다.");
}

// 정적 파일 서빙
app.use("/images", express.static(basePath));

console.log(basePath);

app.listen(PORT, () => {
  console.log(`✅ 이미지 서버 실행 중: http://localhost:${PORT}/images`);
});
