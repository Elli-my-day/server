import mongoose from "mongoose";
import env from "@/config/env";

// cmd 관리자 모드 - "net start MongoDB"

export default async (): Promise<void> => {
  await mongoose.connect(env.databaseURL!);
};
