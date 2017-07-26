const Person = require('../person_pb').Person;
const gameloop = require('node-gameloop');

module.exports = function(ws) {
    var ctrl = this;

    // start the loop at 30 fps (1000/30ms per frame) and grab its id 
    ctrl.fps = 1000 / 30;
    ctrl.frameCount = 0;

    var update = function(delta) {
        // `delta` is the delta time from the last frame 
        ctrl.frameCount++;

        var person = new Person();
        person.setEmail('asd@email.com');
        person.setId(ctrl.frameCount),
        person.setName('Sergey');

        ws.send(person.serializeBinary());
    }

    ctrl.start = function() {
        ctrl.id = gameloop.setGameLoop(update, ctrl.fps);

        // stop the loop 2 seconds later 
        setTimeout(function() {
            ctrl.close();
            console.log('2000ms passed, stopping the game loop');
        }, 10000);
    }

    ctrl.close = function() {
        gameloop.clearGameLoop(ctrl.id);
    }
}