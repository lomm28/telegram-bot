import * as dynamoose from "dynamoose";

export interface IUser {
  userId: string;
  created: number;
  username: string;
  name: string;
  lastActivity: number;
  language: "en" | "ua";
}

const userSchema = new dynamoose.Schema({
  userId: String,
  created: Number,
  username: String,
  name: String,
  lastActivity: Number,
  language: String
});

export default dynamoose.model("User", userSchema);
