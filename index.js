

const WebSocketServer = require('uws').Server;

const express = require('express');
const path = require('path');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/assets', express.static(path.join(__dirname, 'dist')))

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(7200, function () {
  console.log('Example app listening on port 3000!')
})


const wss = new WebSocketServer({ port: 3000 });

var Person = require('./person_pb').Person;

function onMessage(message) {

    var person2 = Person.deserializeBinary(message);
    var email = person2.getEmail(),
        id = person2.getId(),
        name = person2.getName();


    console.log(email, id, name);

    //this.send(message);
}

wss.on('connection', function(ws) {
    // warning: never attach anonymous functions to the socket!
    // that will majorly harm scalability since the scope of this
    // context will be taken hostage and never released causing major
    // memory usage increases compared to having the function created
    // outside of this context (1.2 GB vs 781 MB for 1 million connections)
    ws.on('message', onMessage);
});

wss.on('error', function(error) {
    console.log('Cannot start server');
});


   