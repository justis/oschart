// Attempts to plot any single valued data coming in via OSC
// Author: Justis Peters

var http = require('http'),
	express = require('express'),
  socketio = require('socket.io'),
  osc = require('osc.io'),
	app = express(),
  server = require('http').createServer(app),
  io = socketio.listen(server);

// disable console for performance reasons
console.log = function() {}

// bridge all OSC messges to socket.io
osc(io);

app.get('/', function(req, res){ res.sendfile('www/index.html'); });
app.get('/smoothie.js', function(req, res){ res.sendfile('node_modules/smoothie/smoothie.js'); });

server.listen(8080);
