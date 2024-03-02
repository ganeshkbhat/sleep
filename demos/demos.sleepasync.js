
const { sleep } = require("../index");

// // Wait one second, then write "I waited long enough!" to the console.
(async () => (await sleep(5000)))();
console.log("I waited long enough!");

