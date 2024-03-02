
const { sleepAsync } = require("../index");
(async () => (await sleepAsync(5000)))();
console.log("I waited long enough!");

