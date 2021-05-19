
const app = document.getElementById('demo');

const typewriter = new Typewriter(app, {
    loop: false,
    delay: 65,
});

typewriter
    .pauseFor(500)

    .typeString('Hello, my name is Janice.')
    .pauseFor(1000)
    // .deleteChars(25)
    .pauseFor(600)
    // .typeString('A web developer with a passion in creating new ideas and helping others bring theirs to life.')
    // .pauseFor(2000)
    // .deleteChars(8)
    // .typeString('create new ideas.')
    // .pauseFor(2000)
    // .deleteChars(17)
    // .typeString('help others bring theirs to life.')
    // .pauseFor(1000)
    .start();

