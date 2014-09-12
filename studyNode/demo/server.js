var http = require("http"); 
var url = require("url"); 
function start(route, handle) { 
    function onRequest(req, res) { 
        var pathname = url.parse(req.url).pathname; 
        console.log("Request for " + pathname + " received."); 
        route(handle, pathname, res); //将res相应对象专递到路由，让路由来完成
    } 
http.createServer(onRequest).listen(8888); 
console.log("Server has started."); 
} 
exports.start = start;