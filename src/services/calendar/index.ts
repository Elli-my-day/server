import { Service } from "typedi";
import EventService from "@/services/calendar/events";

@Service()
class CalendarService {
  public eventService: EventService;

  constructor(eventService: EventService) {
    this.eventService = eventService;
  }
}

export default CalendarService;
