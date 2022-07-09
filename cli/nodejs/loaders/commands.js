import { start, hello } from "./../commands/index.js";

export default async function commands(bot) {
  console.log("Commands loaded ✅");

  bot.onText(/\/start/, async (message) => {
    start(bot, message);
  });

  bot.onText(/\/hello|\/hi|\/start/, async (message) => {
    hello(bot, message);
  });
}
