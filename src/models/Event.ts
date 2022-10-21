import mongoose from "mongoose";

class EventDate extends mongoose.SchemaType {
  cast() {}
}

const eventSchema = new mongoose.Schema({
  id: String,
  title: String,
});
