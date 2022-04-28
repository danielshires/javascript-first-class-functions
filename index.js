// Receives a function

function receivesAFunction(spy) {
    spy()
}

const spy = function createSpy() {}

// Named Function

let fn

before(() => {
    fn = returnsANamedFunction()
})

function returnsANamedFunction() {}


// Anonymous Function



// function liftWeights() {
//     console.log('Pump iron');
// }

// function swimFortyLaps() {
//     console.log('Swim 40 laps');
// }

// function runFiveMiles() {
//     console.log('Go for a five-mile run');
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }

// function Monday() {
//     exerciseRoutine(liftWeights);
// }

// function morningRoutine(exercise) {
//     var breakfast = null;

//     if (exercise === liftWeights) {
//         breakfast = 'protein bar';
//     } else if (exercise === swimFortyLaps) {
//         breakfast = 'kale smoothie';
//     } else {
//         breakfast = 'granola';
//     }

//     exerciseRoutine(exercise);

//     // we could give this function a name if we wanted to,
//     // but since it's only available _inside_ morningRoutine(),
//     // we don't need to
//     return function() {
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     }
// }

// var afterExercise = morningRoutine(liftWeights);

// afterExercise();