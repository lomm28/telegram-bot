import { ContextMessageUpdate } from "telegraf";
import * as Stage from "telegraf/stage";
import * as Scene from "telegraf/scenes/base";

import User from "../../models/User";

const { leave } = Stage;
const start = new Scene("start");

start.enter(async (ctx: ContextMessageUpdate) => {
  const uid = String(ctx.from.id);
  const created = new Date().getTime();
  const username = ctx.from.username || "";
  let name;

  if (ctx.from.last_name) {
    name = `${ctx.from.first_name} ${ctx.from.last_name}`;
  }
  name = ctx.from.first_name;

  const user = new User({
    userId: uid,
    created,
    username,
    name,
    lastActivity: created,
    language: "ua"
  });
  console.log(user);
  await user.save(err => {
    if (err) {
      console.log(err);
    }
    console.log("user was successfully saved");
  });
});

export default start;
