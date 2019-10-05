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

let str = "box";
let strIndex = str.length - 1;
if(str.length >= 3 && str[strIndex] === "g" && str[strIndex - 1] === "n" && str[strIndex - 2] === "i") {
    console.log(`${str}ly`);
} else if (str.length >= 3) {
    console.log(`${str}ing`);
} else {
    console.log(str);
}