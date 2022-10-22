import { Router } from "express";
import calendar from "./routes/calendar";

export default () => {
  const app = Router();
  calendar(app);

  return app;
};
