const os = require("os");
const chalk = require("chalk");
let failed = 0;

console.log(chalk.bold(chalk.blue.blue(`[DEBUG]`)) + chalk.bold.cyan(` Checking requirements... Please wait...`));
if (os.platform() != "linux") {
 failed++;
 console.log(chalk.bold(chalk.blue.red(`[DEBUG]`)) + chalk.bold.redBright(` Detected `) + chalk.red.bold.underline(`${process.platform} ${process.arch}`) + chalk.bold.redBright(`! Please use Linux based system to avoid errors!`));
}
if (Math.round(os.totalmem() / (1024 * 1024)) < 250) {
 failed++;
 console.log(chalk.bold(chalk.blue.red(`[DEBUG]`)) + chalk.bold.redBright(` Detected `) + chalk.red.bold.underline(`${Math.round(os.totalmem() / (1024 * 1024))}MB`) + chalk.bold.redBright(` RAM! Please use more than 250MB of RAM to run Majo.exe smoothly`));
}
if (Number(process.version.slice(1).split(".")[0]) < 16) {
 failed++;
 console.log(chalk.bold(chalk.blue.red(`[DEBUG]`)) + chalk.bold.redBright(` Detected `) + chalk.red.bold.underline(` Node.js ${process.version}`) + chalk.bold.redBright(`! Please use Node.js >= 16x to avoid errors!`));
}

console.log(chalk.bold(chalk.blue.blue(`[DEBUG]`)) + chalk.bold.cyan(` Checking requirements finished! Found ${failed} errors!`));

return failed;
