 
var exec = require("child_process").exec; 
function start(res) { 
    console.log("Request handler 'start' was called."); 
    exec("ls -lah", function (error, stdout, stderr) { //"ls -lah"�����Ҳ�ȷ�������Ƿ���ִ�У�
         res.writeHead(200, {"Content-Type": "text/plain"}); 
        res.write(stdout); 
      res.write(stderr);
    }); 
} 
function upload(res) { 
    console.log("Request handler 'upload' was called."); 
    res.writeHead(200, {"Content-Type": "text/html"}); 
    res.write("Hello Upload"); 
 
}
exports.start = start; 
exports.upload = upload;