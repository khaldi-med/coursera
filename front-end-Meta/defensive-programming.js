'use strict'

function letterFinder(word, match) {
    let condition1 = (typeof(word) == 'string' && word.length >= 2)
    let condition2 = (typeof(match) == 'string' && match.length === 1)

    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at index: ', i)
            } else {
                console.log('---No match found at index: ', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.")
    }
}

letterFinder("cat", 3)
