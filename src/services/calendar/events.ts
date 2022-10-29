import { Service } from "typedi";
import Logger from "@/utils/winston";
import { IEvent } from "@/types/calendar";

@Service()
class EventService {
  public getEvents() {
    Logger.info("get event");
  }

  public addEvent({ title, id, start, end }: IEvent) {
    Logger.info("add event");

    // const event = new EventModel({
    //   id: "2",
    //   title: "qqq",
    //   start: "2022-10-21",
    //   end: "2022-10-26",
    // });
    // event
    //   .save()
    //   .then(() => console.log("success"))
    //   .catch((err) => console.log(err));
  }

  public updateEvent() {
    Logger.info("update event");
  }

  public removeEvent() {
    Logger.info("remove event");
  }
}

export default EventService;
