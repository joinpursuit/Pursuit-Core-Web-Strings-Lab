// const str = "funhouse"
// console.(log(str[0]);
// console.((log(str.length);
// console.log(str[str.length - 1]);
// const str = "jimmy";
// console.log(str.slice(0,4) + str[4].toUpperCase());

// let amount = 100000;
// if(amount === 1000000) {
//     console.log(`${amount} dollars (pinky)`);
// } else {
//     console.log(`${amount} dollars`);
// }

// let str = "box";
// let strIndex = str.length - 1;
// if(str.length >= 3 && str[strIndex] === "g" && str[strIndex - 1] === "n" && str[strIndex - 2] === "i") {
//     console.log(`${str}ly`);
// } else if (str.length >= 3) {
//     console.log(`${str}ing`);
// } else {
//     console.log(str);
// }

// const str = "I love coding";
// console.log(str.split(""))

// let name = "popi";
// if(name.length % 2 === 1) {
//     console.log(`${name}#`);
// } else {
//     console.log(name);
// }

// const str = "Ro";
//     if (str.length >= 3) {
//         console.log(`${str[str.length - 3]}${str[str.length - 2]}${str[str.length - 1]}`)
//     } else {
//         console.log("String isn't long enough")
//     }

// const str = "Ire";
// if(str[0] === "A" || str[0] === "E" || str[0] === "I" || str[0] === "O" || str[0] === "U") {
//     console.log(`${str} starts with a vowel`);
// } else {
//     console.log(`${str} doesn't start with a vowel`);
// }

// let str1 = "hello";
// let str2 = "world";
// const str1Half = Math.floor(str1.length / 2);
// console.log(str1.slice(0,str1Half + 1) + str2 + str1.slice(str1Half + 1));

let str = "TAQ";
let vowel;
for (let i = 0; i < str.length; i += 1) {
    if(str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
        vowel = true;
    }
}
if (vowel === true) {
    console.log(`'${str}' has a vowel.`);
} else {
    console.log(`'${str}' does not have a vowel`);
}

