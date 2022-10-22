// 실제 서비스에서는 pm2 필요! https://chanyeong.com/blog/post/35

import env from "@/config/env";
import express from "express";
import Logger from "@/utils/winston";

async function startServer() {
  const app = express();

  /**
   * https://github.dev/santiq/bulletproof-nodejs
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/

  await require("./loaders").default({ expressApp: app });

  app
    .listen(env.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${env.port} 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
