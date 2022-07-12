import "reflect-metadata"; // We need this in order to use @Decorators
import config from "./config";
import express from "express";
import TelegramBot from "node-telegram-bot-api";
import Logger from "./loaders/logger";

async function startBot() {
  const bot: TelegramBot = new TelegramBot(config.bot, { polling: true });
  const app = express();
  const motd: string = `-----------------------------------------------
                🔰 Bot listening on port: ${config.port} 🔰
        -----------------------------------------------`;
  console.log(motd);

  app
    .listen(config.port, async () => {
      Logger.info(
        "development environment detected, automatically command load triggered for more confort. ❤️"
      );
      await require("./loaders/commands").default({
        bot: bot,
      });

      bot.on("polling_error", (error) => {
        Logger.error(error);
      });

      bot.on("message", async (message) => {
        console.log(message);
      });
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}


startBot();
