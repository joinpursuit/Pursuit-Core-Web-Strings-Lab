
// problem 1
let str = "Pursuit"
console.log(str[0])

    // problem 2

console.log(str.length)

    // problem 3

    console.log(str[str.length -1])

    // problem 4

    let name = "phil"
    console.log(name.slice(0,3) + name[3].toUpperCase())

    //problem 5

    let number = 1000
    let variableAmount = "dollars"

    if (number === 1000000){
        console.log(`${number} ${variableAmount} ${"(pinky)"}`)
    } else{
        console.log(`${number} ${variableAmount}`)
    }


    // problem 6

    let verbing = "swim"
    if (verbing.endsWith("ing")) {
        console.log(verbing + "ly")
    } else if (verbing.length >= 3){
        console.log(verbing + "ing")
    } else if(verbing.length < 3){
        console.log(verbing)
    }

    //  problem 7

    
 let withoutLast = "Hello there my name is Rafid"
    for(let i = withoutLast.length -1; i >= 0; i--) {
        if (withoutLast[i] === " "){
             console.log(withoutLast.slice(0, i))
             break;
         }
    }
    // let name1 = "taqe"
    // if (name1.length % 2 === 0){
    //     console.log(name1)
    // } else{
    //     console.log(name1 + "#")
    // }