/* This template is powered by Yagop node-telegram-bot-api's library
His main repository: https://github.com/yagop/node-telegram-bot-api
 */
import TelegramBot from "node-telegram-bot-api";
import config from "./config/index.js";
import commandLoad from "./loaders/commands.js";

async function startBot() {
  const bot = new TelegramBot(config.bot, { polling: true });
  commandLoad(bot);

  bot.on("message", (message) => {
    console.log(message);
  });
}

startBot();
