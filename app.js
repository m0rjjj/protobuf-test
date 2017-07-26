

const WebSocketServer = require('uws').Server;
const express = require('express');
const path = require('path');
const Room = require('./src/room');
const Person = require('./person_pb').Person;

// initialising the exoress app
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/assets', express.static(path.join(__dirname, 'dist')))

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(7200, function () {
  console.log('Example app listening on port 7200!')
});

// initialising the web socket server
const wss = new WebSocketServer({ port: 3000 });

function onMessage(message) {
    var person2 = Person.deserializeBinary(message);
    var email = person2.getEmail(),
        id = person2.getId(),
        name = person2.getName();


    console.log(email, id, name);
}

wss.on('connection', function(ws) {
    var room = new Room(ws);
    
    room.start();

    //ws.on('message', onMessage);
});

wss.on('error', function(error) {
    console.log('Cannot start server');
});


   