# timed-sleep
sleep any execution for defined milliseconds using timed-sleep

```
const { sleep } = require("timed-sleep");
sleep(5000)
console.log("I waited long enough!");
```

```
const { sleep } = require("timed-sleep");
(async () => (await sleep(5000)))();
console.log("I waited long enough!");
```

```
const { wait } = require("timed-sleep");
wait(5000)
console.log("I waited long enough!");
```
