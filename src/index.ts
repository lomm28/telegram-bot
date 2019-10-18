require("./bot");
require("dotenv").config();
import * as AWS from "aws-sdk";
const uuid = require("uuid");

// const docClient = new AWS.DynamoDB.DocumentClient();
// console.log(docClient);
// let table = "usersTable";

// var params = {
//   TableName: table,
//   Key: {
//     userId: "3849504323565"
//   }
// };

// docClient.get(params, function(err, data) {
//   if (err) {
//     console.log(
//       "users::fetchOneByKey::error - " + JSON.stringify(err, null, 2)
//     );
//   } else {
//     console.log(
//       "users::fetchOneByKey::success - " + JSON.stringify(data, null, 2)
//     );
//   }
// });
