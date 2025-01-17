//    __  __        _
//   |  \/  | __ _ (_) ___   _____  _____
//   | |\/| |/ _` || |/ _ \ / _ \ \/ / _ \
//   | |  | | (_| || | (_) |  __/>  <  __/
//   |_|  |_|\__,_|/ |\___(_)___/_/\_\___|
//               |__/
//
//   Created by: Majonez.exe#2495 under MIT License
//   Support: https://discord.gg/bVNNHuQ
//   Website: https://majoexe.ml
//

require("dotenv").config();
require("./utilities/console/ascii");
require("./utilities/requirments");
require("./utilities/console/info");
require("events").EventEmitter.prototype._maxListeners = 100;
require("events").defaultMaxListeners = 100;
const chalk = require("chalk");
const { Client } = require("./client/client");
const majo = new Client();
majo.db_events.on("ready", async () => {
 await majo.start(process.env.TOKEN);
 if (process.argv.includes(`--bot`)) console.log(chalk.green.bold(`[✅]`) + chalk.bold.greenBright(` Starting Majo.exe Bot! (1/3) `));
 else console.log(chalk.red.bold(`[❌]`) + chalk.bold.red(` Skipping Bot launch! (1/3) `) + chalk.bold.red.dim(`[Run script with "--bot" argument]`));
 if (process.argv.includes(`--dashboard`)) console.log(chalk.green.bold(`[✅]`) + chalk.bold.greenBright(` Starting Majo.exe Dashboard! (2/3) `));
 else console.log(chalk.red.bold(`[❌]`) + chalk.bold.red(` Skipping Dashboard launch! (2/3) `) + chalk.bold.red.dim(`[Run script with "--dashboard" argument]`));
 if (process.argv.includes(`--api`)) console.log(chalk.green.bold(`[✅]`) + chalk.bold.greenBright(` Starting Majo.exe API! (3/3) `));
 else console.log(chalk.red.bold(`[❌]`) + chalk.bold.red(` Skipping API launch! (3/3) `) + chalk.bold.red.dim(`[Run script with "--api" argument]`));
 if (process.argv.includes(`--bot`)) majo.bot();
 if (process.argv.includes(`--dashboard`) || process.argv.includes(`--api`)) majo.web(); // WIP | /web/web.js
});
