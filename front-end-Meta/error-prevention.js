'use strict'

function addTwoNums(a, b) {
    if (typeof(a) !== 'number') {
        try {
            throw new ReferenceError('the first argument is not a number');
        } catch (err) {
            console.log("Error!", err)
        }
    } else if (typeof(b) !== 'number') {
        try {
            throw new ReferenceError('the second argument is not a number');
        } catch (err) {
            console.log("Error!", err)
        }
    }
    console.log(a + b);
}

addTwoNums(5, "5")
console.log("It still works");
