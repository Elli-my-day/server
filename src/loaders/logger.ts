import express from "express";
import morgan from "morgan";
import { stream } from "@/utils/winston";

export default ({ app }: { app: express.Application }) => {
  const combined =
    ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

  // 기존 combined 포멧에서 timestamp만 제거
  const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : combined;
  // NOTE: morgan 출력 형태 server.env에서 NODE_ENV 설정 production : 배포 dev : 개발

  app.use(morgan(morganFormat, { stream: stream })); // morgan 로그 설정
};
