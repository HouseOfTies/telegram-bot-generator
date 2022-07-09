import dotenv from 'dotenv';

if(process.env.NODE_ENV !== "production"){
  const envFound = dotenv.config();
  if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }
}

export default {
  bot: process.env.BOT_TOKEN,
  port: parseInt(process.env.PORT, 10),
};

