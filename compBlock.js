var childProcess = require('child_process');



console.log("Start the process now");

var newProcess = childProcess.spawn('node', ['fibonacci.js'],{
	stdio: 'inherit'
});

console.log("Process Ended");


