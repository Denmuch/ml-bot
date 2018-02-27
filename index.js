// import config from 'config'
const os = require('os')

const TelegramBot = require('node-telegram-bot-api');
// const TOKEN = config.get('token')

// replace the value below with the Telegram token you receive from @BotFather
const TOKEN = '533737129:AAHjJ3Uqyzl6dFs5OKC4dnsMk5cXrWxQGC0'

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, {polling: true});

// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, `Дратути уважаемый, ${msg.from.first_name}, Я Бот! =(. Операционная система: ${os.type()}`);
});