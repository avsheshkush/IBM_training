let x=5;
if (x>10) {
    console.log("x is greater than 10");
}
else{
    console.log("x is smaller");
}
let day=parseInt(prompt("enter your number"));

let  marks=parseInt(prompt("enter marks"));

// switch (marks) {
// use switch with true to handle range cases in increments of 10
switch (true) {
    case (marks >= 0 && marks <= 10):
        console.log("E");
        break;
    case (marks > 10 && marks <= 20):
        console.log("D");
        break;
    case (marks > 20 && marks <= 30):
        console.log("C");
        break;
    case (marks > 30 && marks <= 40):
        console.log("B");
        break;
    case (marks > 40 && marks <= 50):
        console.log("A");
        break;
    default:
        console.log("invalid");
        break;
}

let num =5;
for (let i = 0; i < num; i++) {
    console.log("hello",i);
      
}

// Multiplication table: take input and print table
let tableNum = parseInt(prompt("Enter a number to print its multiplication table:"), 10);
let tableLimit = parseInt(prompt("Enter how many multiples to print (e.g., 10):"), 10);
if (!isNaN(tableNum) && !isNaN(tableLimit) && tableLimit > 0) {
    for (let i = 1; i <= tableLimit; i++) {
        console.log(`${tableNum} x ${i} = ${tableNum * i}`);
    }
} else {
    console.log("Invalid input for table or limit.");
}

