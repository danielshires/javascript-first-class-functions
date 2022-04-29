// Receives a function

function receivesAFunction(spy) {
    spy()
}

receivesAFunction()

// Named Function

function returnsANamedFunction(numOne) {
    let fn = (numTwo) => {
        return numOne * numTwo
    }
    return fn
}

function returnsAnAnonymousFunction() {
    return () => {}
}

const multiplyer = returnsANamedFunction(2)

console.log(multiplyer(2))