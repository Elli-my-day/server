import express from "express";
import loggerLoader from "@/loaders/logger";
import expressLoader from "@/loaders/express";
import mongoLoader from "@/loaders/mongoose";
import Logger from "@/utils/winston";
import EventModel from "@/models/Event"; // import 필요하다 함.

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await mongoLoader();
  Logger.info("✌️ DB loaded and connected!");

  loggerLoader({ app: expressApp });
  Logger.info("✌️ logger loaded");

  expressLoader({ app: expressApp });
  Logger.info("✌️ express loaded");

  // dependency injector 필요!
};
