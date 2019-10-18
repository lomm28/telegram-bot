require("dotenv").config();
import Telegraf, { ContextMessageUpdate } from "telegraf";
import * as Stage from "telegraf/stage";
import * as session from "telegraf/session";
// import * as AWS from "aws-sdk";
// import * as dynamoose from "dynamoose";
import startScene from "./controllers/start";

const bot = new Telegraf(process.env.BOT_TOKEN);

// dynamoose.AWS.config.update({
//   region: "us-east-2",
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });

const stage = new Stage([startScene]);
bot.use(session());
bot.use(stage.middleware());

// bot.start(ctx => ctx.reply("Welcome"));

bot.start(async (ctx: any) => {
  // console.log(ctx.scene);
  ctx.scene.enter("start");
});

bot.on("sticker", ctx => ctx.reply("👍"));
bot.on("text", ({ replyWithHTML }) => replyWithHTML("<b>Hello</b>"));

bot.launch();
