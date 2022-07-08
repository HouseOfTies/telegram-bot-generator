#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
import asciiArt from "./asciiArt";

const currentDir: string = process.cwd();
const choices = fs.readdirSync(`${__dirname}/../cli`);

const questions = [
    {
      name: "telegram-bot-choice",
      type: "list",
      message: `What Telegram Bot template would yo like to generate? 🔥`,
      choices: choices,
    },
    {
      name: "telegram-bot-name",
      type: "input",
      message:
        "How do you want to name your telegram bot? (Type <Bot> after the name, E.g: exampleBot) 🎀",
      validate: function (input) {
        if (/^([A-Za-z\-\_\d]+Bot)+$/.test(input)) return true;
        else
          return "Bot name may only include letters, numbers or underscores. Remember name your file with <Bot>, e.g: exampleBot";
      },
    },
  ];

