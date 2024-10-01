01, 2024 +01 16:09:44

//Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (const item of dairy) {
        console.log(item);
    }
}
logDairy();

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for(const pro of Object.keys(bird)) {
        console.log(pro, ":", bird[pro]);
    }
}

birdCan();

// Task 3
function animalCan() {
    for (const item in bird) {
        console.log(item, ":", bird[item]);
    }
}
animalCan();
