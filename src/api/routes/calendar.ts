import { Router, Request, Response } from "express";
import { Container } from "typedi";
import CalendarService from "@/services/calendar";

const route = Router();

export default (app: Router) => {
  app.use("/calendar", route);

  route.get("/events", (req: Request, res: Response) => {
    const calendarInstance = Container.get(CalendarService);
    console.log(req.query);

    // type check 필요!

    const title = "title";
    const id = "id";
    const start = "2022-10-20";
    const end = "2022-10-29";

    // calendarInstance.eventService.getEvents({ title, id, start, end });

    res
      .status(200)
      .send([{ title: "1", start: "2022-10-01", end: "2022-10-22", id: "1" }]);
  });

  /*
	events get
	events add
	events delete
	
	
	
	*/
};
