
const { wait } = require("../index");

// // Wait one second, then write "I waited long enough!" to the console.

wait(5000)
console.log("I waited long enough!");

// // var elapsed_time = function(note){
// //   var precision = 3; // 3 decimal places
// //   var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
// //   console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
// //   start = process.hrtime(); // reset the timer
// // }
// // elapsed_time("recieved request 1")
// // var start = process.hrtime();
// // elapsed_time("recieved request 2")
