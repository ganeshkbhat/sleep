# timed-sleep
sleep any execution for defined milliseconds using timed-sleep

```
const { sleep } = require("../index");
sleep(5000)
console.log("I waited long enough!");
```

```
const { sleep } = require("../index");
(async () => (await sleep(5000)))();
console.log("I waited long enough!");
```

```
const { wait } = require("../index");
wait(5000)
console.log("I waited long enough!");
```