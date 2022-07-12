import Logger from "./logger";
import { start, heya, say, rsay, fsay } from "@/commands";

export default async ({ bot }) => {
  Logger.info("Commands loaded ✅");

  bot.onText(/^\/start/, async (message) => {
    // Whole programming logic within this section
    start(bot, message);
  });

  bot.onText(/^\/heya/, async (message) => {
    heya(bot, message);
  });

  bot.onText(/^\/say/, async (message) => {
    say(bot, message);
  });

  bot.onText(/^\/rsay/, async (message) => {
    rsay(bot, message);
  });

  bot.onText(/^\/fsay/, async (message) => {
    fsay(bot, message);
  });
};
