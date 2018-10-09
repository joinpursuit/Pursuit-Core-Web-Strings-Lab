//1
let name = "Andres"
console.log (name[0])

// 2
// let name = "Andres"
// console.log (name.length)

// 3
// let name = "Andrerpy"
// console.log (name[name.length-1])

// 4
 // let name = "Miluska paz"
// name.split("z").join("Z")
 // console.log(name.slice(0,name.length-1) + name[name.length-1].toUpperCase())

// 5 This is my thought process , here you over thought it. If you look at the answer it was nothing more than
// if else statement where you assign a variable to a dollar amt and then you compare it with a truthy and a falsy
// let sentence = "${i} + dollars"
// for(let i = 10; i <= 1000000; i*10){
//    if (i > 1000000) {
//   console.log(sentence)
// } else ( i === 1000000 )
//   console.log(sentence + "pinky")
// }
//
// }

//  Correct answer
// let dollarAmt = 1200000
//
// if(dollarAmt >= 1000000){
//  console.log(dollarAmt + ' dollars' + ' (pinky)')
// } else {
//  console.log(dollarAmt + ' dollar')
// }



// let sentence = `Hello, my name is ${name}.`
// console.log(sentence)



// 7.Create a withoutLast code block that takes a single string variable, and returns a copy of the string without the last
// let word = "withoutLast"
// option A
// word.slice(0,7)
// option b
// console.log( word.slice(0,word.length-4))



// what if there were many letters to this string. One right way will beusing the slice method.
// From a starting index to whichever index by defualt or give it an argument or two.
