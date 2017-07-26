import person_pb from '../person_pb';

const Person = person_pb.Person;
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:3000');
socket.binaryType = 'arraybuffer';

// Connection opened
socket.addEventListener('open', function (event) {
    
    
});

// Listen for messages
socket.addEventListener('message', function (event) {

    var person2 = Person.deserializeBinary(event.data);
    
    var email = person2.getEmail(),
        id = person2.getId(),
        name = person2.getName();

    console.log(id, email, name);

    // var person = new Person(); 

    // person.setName(name + 'From client');
    // person.setId(1)
    // person.setEmail('morjjj@gmail.com');

    // var bytes = person.serializeBinary();
    // socket.send(bytes);
});
