//1.
let string1 = "Hello"
console.log(string1[0])
//2.
console.log(string1.length)
//3.
console.log(string1[string1.length-1])
//4.
let copy = string1[0].toLowerCase() + string1.slice(1,4) + string1[4].toUpperCase()
console.log(copy)
//5.
let drEvil = 1000000;
    if(drEvil >= 1000000){
        console.log(`${drEvil} dollars (pinky)`)
    }else{
        console.log(`${drEvil} dollars`)
    }
//6.
let word = 'box';
    if(word[word.length -1] === 'g'){
        console.log(`${word}ly`)
    }else(word[word.length -1] !== 'g'){
        console.log(`${word}ing`)
    }
//7.
let withoutLast = 'halloween'
let newWithoutLast = withoutLast.slice(0,withoutLast.length-1)
console.log(newWithoutLast)