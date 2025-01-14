if (Number(process.version.slice(1).split(".")[0]) < 16) throw new Error("Majo.exe requires Node.js v16 or higher. Re-run the bot with Node.js v16 or higher!");
const chalk = require("chalk");
require("dotenv").config();
const { glob } = require("glob");
const { promisify } = require("util");
const Discord = require("discord.js");
const globPromise = promisify(glob);
const all_endpoints = new Discord.Collection();

module.exports = async (app, client, port, config, secure_connection) => {
 console.log(chalk.bold(chalk.bold.red("> ") + chalk.blue.bold("[API]")) + chalk.cyan.bold(" Starting api..."));
 console.log(chalk.bold(chalk.bold.red("> ") + chalk.blue.bold("[API]")) + chalk.cyan.bold(" Setting up api endpoints..."));
 app.get("/api/", (req, res, next) => {
  res.json(all_endpoints);
 });
 app.get("/api/*", (req, res, next) => {
  const path = req.originalUrl.split("/");
  const original_url = `/${path[1]}/${path[2]}/${path[3]}/${path[4]}`;
  const params = path.slice(5);
  const api_name = all_endpoints.get(original_url);
  if (api_name) {
   api_name.run(client, req, res, next, params);
  } else {
   res.send({
    code: 0,
    message: "Invaild endpoint!",
   });
  }
 });
 const endpoints = await globPromise(`${process.cwd()}/api/endpoints/*/*/*.js`);
 endpoints.map(async (value) => {
  const file = require(value.replace(".js", ""));
  console.log(chalk.bold(chalk.bold.red("> ") + chalk.blue.bold("[API]")) + chalk.cyan.bold(` Loaded endpoint ${process.env.DOMAIN}${port == 8080 ? "" : `:${port}`}${file.name}`));
  all_endpoints.set(file.name, file);
 });
};
