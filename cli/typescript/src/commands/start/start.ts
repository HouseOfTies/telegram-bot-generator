/*
*Method: sendMessage

*Description: Use this method to send text messages. On success, the sent Message is returned. 

* Parameters:
  Parameter   |   Type    |   Required    |    Description
* chat_id     |   Integer or String | Yes | Unique identifier for the target chat or username of the target channel (in the format @channelusername)
* text        |   String  |     Yes       | Text of the message to be sent, 1-4096 characters after entities parsing
* parse_mode	|   String	|    Optional	  | Mode for parsing entities in the message text. See formatting options for more details.
* entities	  | Array of  |    Optional   |	A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
*               MessageEntity	
* disable_web_page_preview|	Boolean |	Optional |	Disables link previews for links in this message
* disable_notification	  | Boolean	| Optional |	Sends the message silently. Users will receive a notification with no sound.
* protect_content |	Boolean |	Optional |	Protects the contents of the sent message from forwarding and saving
* reply_to_message_id	| Integer |	Optional |	If the message is a reply, ID of the original message
* allow_sending_without_reply	| Boolean |	Optional |	Pass True, if the message should be sent even if the specified replied-to message is not found
* reply_markup |	InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply |	Optional |	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
  
More information about sendMessage method in https://core.telegram.org/bots/api#sendmessage
*/

export default function start(bot, message) {
  const chatId = message.chat.id;
  const messageId = message.message_id;

  bot.sendMessage(
    chatId,
    "Hi, Im a bot created by [telegram-bot-generator](https://www.npmjs.com/package/telegram-bot-generator)",
    {
      reply_to_message_id: messageId,
      parse_mode: "Markdown",
    }
  );
}
