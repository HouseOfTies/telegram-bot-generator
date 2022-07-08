import { start } from '../commands/index.js';
import * as commandList from '../commands/index.js';

export default async function commands(bot){
    console.log("Commands loaded ✅");
    console.log(commandList);
    
    bot.onText(/\/hello|\/hi|\/start/, async (message) => {
        start(bot, message);
    });
}

