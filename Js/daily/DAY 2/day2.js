// let x=5;
// if (x>10) {
//     console.log("x is greater than 10");
// }
// else{
//     console.log("x is smaller");
// }
// let day=parseInt(prompt("enter your number"));

// let  marks=parseInt(prompt("enter marks"));

// // switch (marks) {
// // use switch with true to handle range cases in increments of 10
// switch (true) {
//     case (marks >= 0 && marks <= 10):
//         console.log("E");
//         break;
//     case (marks > 10 && marks <= 20):
//         console.log("D");
//         break;
//     case (marks > 20 && marks <= 30):
//         console.log("C");
//         break;
//     case (marks > 30 && marks <= 40):
//         console.log("B");
//         break;
//     case (marks > 40 && marks <= 50):
//         console.log("A");
//         break;
//     default:
//         console.log("invalid");
//         break;
// }

// let num =5;
// for (let i = 0; i < num; i++) {
//     console.log("hello",i);
      
// }


// let tableNum = parseInt(prompt("Enter a number to print its multiplication table:"), 10);


//     for (let i = 1; i <= 10; i++) {
//         console.log(`${tableNum} x ${i} = ${tableNum * i}`);
//     }

// let obj ={
//     "name": "avshesh",
//     "age":22,
//     "email":"avskush@gmail.com"
// }

// console.log(obj);

// for(let key in obj){
//     console.log(`${key}=${obj[key]}`);
// }

// let i=0;
// do {
//     console.log("do while laga ha ",i)
    
// i++;
// } while (i<5);

var str="Avshesh Kushwaha";

// let res = str.indexOf("ush");
let res = str.lastIndexOf("ush");

console.log(res);

var str1="hello";
var str2="world";

var str3=str1.concat(str2);
console.log(str3);

var name="you will be an amazing developer";

// var newmess= name.slice(7,13);
// console.log(newmess);
// newmess=name.slice(-7,13);
// console.log(newmess);
newmess=name.slice(7);
console.log(newmess);
// newmess=name.slice(-7);
// console.log(newmess);

console.log(name.replace('','-'));

console.log(name.replaceAll('','-'));

console.log(name.trim());

console.log(name);

console.log(name.split(" "));
