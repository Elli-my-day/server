import mongoose from "mongoose";
import env from "@/config/env";

export default async (): Promise<void> => {
  await mongoose.connect(env.databaseURL!);
};
