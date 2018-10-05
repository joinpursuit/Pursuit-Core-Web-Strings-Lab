// //1
// let str = "stringTest";
// let strFirstChar = str.substr(0,1);
// console.log("strFirstChar:", str[0], strFirstChar);
//
// //2
// console.log("strLength:", str.length);
//
// //3
// let strLastChar = str.charAt(str.length - 1);
// console.log("strLastChar:", str[str.length - 1], strLastChar);

//4
// let word = "Mateo";
// let lastCap = word.slice(0, word.length - 1) + word[word.length - 1].toUpperCase();
// console.log(lastCap);

//5
// let num = 1;
// let d = " dollar";
// let p = " (pinky)";
// if (num === 1) {
//   num += d;
// } else if (num === 1000000) {
//   num += d + "s" + p;
// } else {
//   num += d + "s";
// }
// console.log(num);

//6
// let verb = "go";
// const verbing = function(v){
//   if (v.length < 3){
//     return v;
//   } else if (v.slice(v.length - 3) === "ing"){
//     return v + "ly";
//   } else {
//     return v + "ing";
//   }
// }
// console.log(verbing(verb));

//7
// let str = "long word"
// let withoutLastChar = function(s){
//   return s.slice(0, s.length - 1);
// }
// console.log(withoutLastChar(str));
