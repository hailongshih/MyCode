/**
 * Created with JetBrains WebStorm.
 * User: xuwenmin
 * Date: 14-4-19
 * Time: ����1:20
 * To change this template use File | Settings | File Templates.
 */

var express = require('express'),
    io = require('socket.io');

var app  =express();

app.use(express.static(__dirname));

var server = app.listen(8888, '172.17.102.69');


var ws = io.listen(server);


// ����ǳ��Ƿ��ظ�
var checkNickname = function(name){
    for(var k in ws.sockets.sockets){
        if(ws.sockets.sockets.hasOwnProperty(k)){
            if(ws.sockets.sockets[k] && ws.sockets.sockets[k].nickname == name){
                return true;
            }
        }
    }
    return false;
}
// ��ȡ���е��ǳ�����
var getAllNickname = function(){
    var result = [];
    for(var k in ws.sockets.sockets){
        if(ws.sockets.sockets.hasOwnProperty(k)){
            result.push({
                name: ws.sockets.sockets[k].nickname
            });
        }
    }
    return result;
}
ws.on('connection', function(client){
    console.log('someone is connectted\n');
    client.on('join', function(msg){
        // ����Ƿ����ظ�
        if(checkNickname(msg)){
            client.emit('nickname', 'nick name is duplicated!');
        }else{
            client.nickname = msg;
            ws.sockets.emit('announcement', 'system', msg + ' join the chatroom!', {type:'join', name:getAllNickname()});
        }
    });
    // ����������Ϣ
    client.on('send.message', function(msg){
        client.broadcast.emit('send.message',client.nickname,  msg);
    });

    client.on('disconnect', function(){
        if(client.nickname){
            client.broadcast.emit('send.message','system',  client.nickname + 'leave the chatroom!', {type:'disconnect', name:client.nickname});
        }
    })

})

