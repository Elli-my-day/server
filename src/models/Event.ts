import mongoose from "mongoose";
import { IEvent } from "src/types/calendar";

const validateYear = (year: string) => {
  const yearRegex = /^(19\d\d|2\d\d\d)$/;

  return yearRegex.test(year);
};

const validateMonth = (month: string) => {
  const monthRegex = /^(0[1-9]|1[0-2])$/;

  return monthRegex.test(month);
};

// export class EventDate extends mongoose.SchemaType {
//   cast(date: IDate) {
//     const year = date.split("-")[0];
//     const month = date.split("-")[1];

//     if (!validateYear(year)) {
//       throw new Error(`${date} year type error`);
//     }
//     if (!validateMonth(month)) {
//       throw new Error(`${date} month type error`);
//     }
//     return date;
//   }
// }

// mongoose.Schema.Types.EventDate = EventDate;

const eventSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IEvent & mongoose.Document>("Event", eventSchema);
