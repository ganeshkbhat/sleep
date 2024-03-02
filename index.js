

/**
 * sleep
 *
 * @param {number} ms
 * @return <Boolean>
 * 
 */
function sleep(ms) {
  if (!(ms > 0 && ms < Infinity) || (typeof ms !== 'number' && typeof ms !== 'bigint')) throw new Error("Provide valid time milliseconds and has to be type Number or BigInt");
  ms = Number(ms);
  let p = (performance) ? performance : Date;
  let a = p.now();
  while (p.now() !== a + ms) { }
  return true;
}

/**
 * sleepAsync
 *
 * @param {number} ms
 * @return Promise<Boolean>
 * 
 */
function sleepAsync(ms) {
  return new Promise((resolve, reject) => {
    if (!(ms > 0 && ms < Infinity) || (typeof ms !== 'number' && typeof ms !== 'bigint')) reject("Provide valid time milliseconds and has to be type Number or BigInt");
    ms = Number(ms);
    setTimeout(() => resolve(true), ms)
  })
}

/**
 * wait
 *
 * @param {*} ms
 * @return <Boolean>
 * 
 */
function wait(ms) {
  if (!(ms > 0 && ms < Infinity)) throw new Error("Provide valid time milliseconds and has to be type Number or BigInt");
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  return true;
}

/**
 * timeout
 *
 * @param {*} ms
 * @return <Boolean>
 * 
 */
function timeout(ms) {
  if (typeof SharedArrayBuffer !== 'undefined' && typeof Atomics !== 'undefined') return wait(ms);
  return sleep(ms);
}

module.exports = { wait, sleep, timeout };
module.exports.default = { wait, sleep, timeout };
