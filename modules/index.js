var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var message2 = chalk.bold.underline("Boldy");
var message3 = chalk.dim("dimmy");
var message4 = chalk.bgYellow.italic("BG yellowy");
console.log(message);
console.log(message2);
console.log(message3);
console.log(message4);