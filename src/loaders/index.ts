import express from "express";
import loggerLoader from "@/loaders/logger";
import mongoLoader from "@/loaders/mongoose";
import Logger from "@/utils/winston";
import EventModel from "@/models/Event"; // import 필요하다 함.

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await mongoLoader();
  Logger.info("✌️ DB loaded and connected!");

  loggerLoader({ app: expressApp });
  Logger.info("✌️ Express loaded");

  // dependency injector 필요!
};
