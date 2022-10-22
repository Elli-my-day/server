import { Router, Request, Response } from "express";
import logger from "@/utils/winston";
import EventModel from "@/models/Event";

const route = Router();

export default (app: Router) => {
  app.use("/calendar", route);

  route.get("/events", (req: Request, res: Response) => {
    logger.info("info test");
    const event = new EventModel({
      id: "2",
      title: "qqq",
      start: "2022-10-21",
      end: "2022-10-26",
    });
    event
      .save()
      .then(() => console.log("success"))
      .catch((err) => console.log(err));
    res.status(200).send({
      message: "info test!",
    });
  });

  /*
	events get
	events add
	events delete
	
	
	
	*/
};
