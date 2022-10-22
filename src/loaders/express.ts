import express from "express";
import cors from "cors";
import routes from "@/api/index";
import env from "@/config/env";

export default ({ app }: { app: express.Application }) => {
  app.use(express.json());
  app.use(cors());
  app.use(env.api.prefix, routes()); // '/api'
};
