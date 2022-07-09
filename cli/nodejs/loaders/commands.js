import { start, say } from "./../commands/index.js";

export default async function commands(bot) {
  console.log("Commands loaded ✅");

  bot.onText(/\/start|\/hi|\/start/, async (message) => {
    start(bot, message);
  });

  bot.onText(/\/say/, async (message) => {
    say(bot, message);
  });
}
