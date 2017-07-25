import person_pb from '../person_pb';

// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:3000');

// Connection opened
socket.addEventListener('open', function (event) {
    var person = new person_pb.Person(); 

    person.setName('Sergey');
    person.setId(1)
    person.setEmail('morjjj@gmail.com');

    var bytes = person.serializeBinary();
    socket.send(bytes);
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server', event.data);
});
