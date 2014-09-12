console.log("sync start");
var fs=require("fs");
filenames = fs.readdirSync(".");
	filenames.forEach(function(i){
		console.log(i);
	})
console.log('Current : ' + process.pid);
console.log("sync end");
console.log("async start");
//“Ï≤Ω
fs.readdir(".", function (err, filenames) {
    filenames.forEach(function(i){
		console.log(i);
	})
});
console.log('Current : ' + process)
console.log("async may not end");