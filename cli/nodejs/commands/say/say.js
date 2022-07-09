export default function say(bot, message) {
  const chatId = message.chat.id,
    messageId = message.message_id;
  const indexOfSpace = message.text.indexOf(" ");
  const text = message.text.substring(indexOfSpace + 1);
  const verificator = message.text.split(" ").length;

  if (verificator == 1) {
    bot.sendMessage(
      chatId,
      "Prueba escribiendo algo luego del comando /say, Ejemplo: `/say hola mundo`",
      {
        reply_to_message_id: messageId,
        parse_mode: "Markdown",
      }
    );
  } else {
    bot.sendMessage(chatId, text, {
      reply_to_message_id: messageId,
      parse_mode: "Markdown",
    });
  }
}