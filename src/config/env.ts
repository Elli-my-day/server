import dotenv from "dotenv";
import path from "path";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config({
  path: path.join(__dirname, "../../config.env"),
});

if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: process.env.PORT || 5000,
  databaseURL: process.env.MONGO_URI,
  api: {
    prefix: "/api",
  },
};
