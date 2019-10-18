export default {
  aws_table_name: "usersTable",
  aws_remote_config: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-2"
  }
};
