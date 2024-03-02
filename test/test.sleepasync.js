
const { sleep } = require("../index");
(async () => (await sleep(5000)))();
console.log("I waited long enough!");

