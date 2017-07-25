import person_pb from '../person_pb';

var ws = new WebSocket('ws://localhost:3000');
//ws.binaryType = 'arraybuffer';

ws.onopen = function open() {
    var person = new person_pb.Person(); 

    person.setName('Sergey');
    person.setId(1)
    person.setEmail('morjjj@gmail.com');

    var bytes = person.serializeBinary();
    ws.send(bytes);
};

// ws.on('error', function error() {
//     console.log('Error connecting!');
// });

// ws.on('message', function(data, flags) {
//     console.log('Message: ' + data);
// });

// ws.on('close', function(code, message) {
//     console.log('Disconnection: ' + code + ', ' + message);
// });