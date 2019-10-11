let theWord = 'holloween'

//1)
console.log(theWord[0])
//2)
console.log(theWord.length)
//3)
console.log(theWord[theWord.length -1])

//4)
let newTheWord = theWord.slice(0,theWord.length -1)
let lastNewWord = theWord[theWord.length - 1].toUpperCase()
let wholeNewWord = newTheWord + lastNewWord
console.log(wholeNewWord)

//5)

let amount = 1000000; 
    if(amount >= 1000000){
        console.log(`${amount} dollars (pinky)`);
    }else {
        console.log(`${amount} dollars`)
    }

//6)

let word = 'hurt';
    if(word[word.length -1] === 'g'){
        console.log(`${word}ly`)
    }else if(word[word.length -1] !== 'g'){
        console.log(`${word}ing`)
    }

//7

let withoutLast = 'halloween'
let newWithoutLast = withoutLast.slice(0,withoutLast.length-1)
console.log(newWithoutLast)