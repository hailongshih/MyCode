 
var server = require('./server'); //���server.jsģ��
var router = require('./router'); //���router.jsģ��
var requestHandlers = require("./requestHandler"); //���router.jsģ��
 
var handle = {}; //���Կ����ǹ�������������URL�󣬽���ͬ����������Ӧ�Ĵ���
handle["/"] = requestHandlers.start; 
handle["/start"] = requestHandlers.start; 
handle["/upload"] = requestHandlers.upload;
 
server.start(router.route,handle); //���������ֱ���·�ɺ��������������