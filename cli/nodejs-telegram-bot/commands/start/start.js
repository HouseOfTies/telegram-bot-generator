export const description = `This is an initial command`;

export default function start(bot, message){
        const chatId = message.chat.id;
        const messageId = message.message_id;
    
        bot.sendMessage(chatId, "Hi, Im a bot created by [telegram-bot-generator](https://www.npmjs.com/package/telegram-bot-generator)", {
            reply_to_message_id: messageId,
            parse_mode: "Markdown"
    });
}

