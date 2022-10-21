import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import logger, { stream } from "./utils/winston";

dotenv.config(); // ({ path: path.join(__dirname, './env/server.env') });//dotenv : env 로드 모듈 server.env 환경변수 가져오기

const app = express();
const port = 5000; // process.env.port
const combined =
  ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
// 기존 combined 포멧에서 timestamp만 제거
const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : combined; // NOTE: morgan 출력 형태 server.env에서 NODE_ENV 설정 production : 배포 dev : 개발

app.use(morgan(morganFormat, { stream: stream })); // morgan 로그 설정

app.get("/test/info", (req: Request, res: Response, next: NextFunction) => {
  logger.info("info test");
  res.status(200).send({
    message: "info test!",
  });
});

app.get("/test/warn", (req: Request, res: Response, next: NextFunction) => {
  logger.warn("warning test");
  res.status(400).send({
    message: "warning test!",
  });
});

app.get("/test/error", (req: Request, res: Response, next: NextFunction) => {
  logger.error("error test");
  res.status(500).send({
    message: "error test!",
  });
});

app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
