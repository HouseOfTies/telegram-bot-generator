#!/usr/bin/env node
const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const gradient = require("gradient-string");
const axios = require("axios");

const currentDir = process.cwd();
const choices = fs.readdirSync(`${__dirname}/cli`);
const welcomeMessage = `
                   zzz                   
               zzzzzzzzzzz               
           zzzzzzzzzzzzzzzzzzz           
      zzzzzzzzzzzzzzzzzzzzzzzzzzzz       
    zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz    
   zzzzzzzzzz   zzz z zzz   zzzzzzzzzz   
   zzzzzzzzzz     zzzzz      zzzzzzzzz   
  zzzzzzzzzz                 zzzzzzzzz   
  zzzzzzzzzz                 zzzzzzzzzz  
  zzzzzzzzzzz      zzzz      zzzzzzzzzz  
 zzzzzzzzzzzzzz    zzz     zzzzzzzzzzzzz 
 zzzzzzzz zzzz     zzz     zzzz  zzzzzzz 
zzzzzzzz     zzzzzzzzzz zzzz z      zzzzzz
 zzzzzz     z  zzzzzzzzzzzz z     zzzzzz 
   zzzzz       zzzzzzzzzzz  z    zzzzz   
    zzzzz        zzzzzzz        zzzzz    
      zzzzz        zzz        zzzzz      
       zzzzzzz      z      zzzzzzz       
         zzzzzzz         zzzzzzz         
           zzzzz         zzzzz
`;

console.log(
  gradient([
    "#480e26",
    "#ff1634",
    "#ff1b34",
    "#ff285b",
    "#ff3fcd",
    "#ff4bec",
    "#1d081a",
  ])(welcomeMessage)
);
console.log(chalk`{bold.rgb(10,100,200)
Welcome to the bot generator, type the token of your bot to assign it a body. The <token> looks like this: }

{bold.hex("ff1b34") 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11}

{bold.rgb(10,100,200) If you don't have a token, write to @botfather on Telegram to create a bot using the /newbot command.
Botfather link:} {bold.hex("ff1b34") https://www.t.me/botfather}
`);

const generator = async () => {
  let botUsername;
  const questions = [
    {
      name: "telegram-bot-token",
      type: "input",
      message: "Type here the <Token> of your bot:",
      validate: async function (input) {
        try {
          const url = `https://api.telegram.org/bot${input}/getme`;
          const request = await axios.get(url);
          botUsername = request.data.result.username;
          return true;
        } catch (error) {
          return "I could not find a bot associated to the token you wrote, try to verify that it is correct or if your internet connection is correct.";
        }
      },
    },
    {
      name: "telegram-bot-choice",
      type: "list",
      message: `What Telegram Bot template would yo like to generate? 🔥 (Available templates)`,
      choices: choices,
    },
    {
      name: "confirmation",
      type: "confirm",
      message: `Are you sure you want create a Bot proyect?`,
      default: true,
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    const [telegramBotToken, telegramBotChoice, confirmation] = [
      answers["telegram-bot-token"],
      answers["telegram-bot-choice"],
      answers["confirmation"],
    ];

    if (confirmation === true) {
      const templatePath = `${__dirname}/cli/${telegramBotChoice}`;

      try {
        fs.mkdirSync(`${currentDir}/${botUsername}`);
        const envData = `BOT_TOKEN=${telegramBotToken}\nPORT=3000\nNODE_ENV='development'`;
        fs.writeFileSync(`${currentDir}/${botUsername}/.env`, envData);
      } catch (error) {
        console.log(
          botUsername,
          chalk`{red.bold Project already exist.} You have to delete it to create with the generator.`
        );
      }

      createDirectoryContents(templatePath, botUsername);

      console.log(
        chalk`Congratulations, a bot called {bold.rgb(10,100,200) ${botUsername}} was created at the path: {bold.rgb(10,100,200) ${currentDir}/${botUsername}} look at the folder called like your bot. ✨`
      );
      console.log(
        chalk`\n{bold.green Note:} Remember install all the packages to run your bot correctly, any issue or bug you can contact me at Telegram in {bold.rgb(10,100,200) https://www.t./me/zeroseventty}`
      );
    } else {
      console.log("Bot creation has been interrupted. Zzzzz...");
    }
  });
};

function createDirectoryContents(templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const originFilePath = `${templatePath}/${file}`;

    const stats = fs.statSync(originFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(originFilePath, "utf-8");

      if (file === ".npmignore") file = ".gitignore";

      const writePath = `${currentDir}/${newProjectPath}/${file}`;

      fs.writeFileSync(writePath, contents, "utf-8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${currentDir}/${newProjectPath}/${file}`);
      createDirectoryContents(
        `${templatePath}/${file}`,
        `${newProjectPath}/${file}`
      );
    }
  });
}

generator();
