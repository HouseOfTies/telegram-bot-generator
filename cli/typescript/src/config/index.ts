import dotenv from 'dotenv';

if(process.env.NODE_ENV !== "production"){
  const envFound = dotenv.config();
  if (envFound.error) {
  }
}

export default {
  port: parseInt(process.env.PORT, 10),
  bot: process.env.BOT_TOKEN,
  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  },
};
