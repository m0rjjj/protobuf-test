var Person = require('./person_pb').Person;

var person = new Person(); 

person.setName('Sergey');
person.setId(1)
person.setEmail('morjjj@gmail.com');

bytes = person.serializeBinary();

var person2 = Person.deserializeBinary(bytes);
var email = person2.getEmail(),
    id = person2.getId(),
    name = person2.getName();
    