require("dotenv").config();
import Telegraf from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply("Welcome"));

bot.on("sticker", ctx => ctx.reply("👍"));
bot.on("text", ({ replyWithHTML }) => replyWithHTML("<b>Hello</b>"));

bot.launch();
