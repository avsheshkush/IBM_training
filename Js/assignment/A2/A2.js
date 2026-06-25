// Q1. Find Grades
let M = 1; 

console.log("Grades:");
switch (true) {
    case (M >= 0 && M <= 10):
        console.log("E");
        break;
    case (M <= 20):
        console.log("D");
        break;
    case (M <= 30):
        console.log("C");
        break;
    case (M <= 40):
        console.log("B");
        break;
    case (M <= 50):
        console.log("A");
        break;
    default:
        console.log("Invalid marks");
}

// Q2. Get Value

let ch = "P"; 

console.log("The value is : ");
switch (ch) {
    case "P":
    case "p":
        console.log("PrepBytes");
        break;

    case "Z":
    case "z":
        console.log("Zenith");
        break;

    case "E":
    case "e":
        console.log("Expert Coder");
        break;

    case "D":
    case "d":
        console.log("Data Structure");
        break;
}


// Q3. Maximum Out of Three
let A = 2, B = 5, C = 4; 

console.log("Maximum of the given three numbers are : ");
if (A === B && B === C) {
    console.log(-1);
} else if (A >= B && A >= C) {
    console.log(A);
} else if (B >= A && B >= C) {
    console.log(B);
} else {
    console.log(C);
}


// Q4. Second Smallest
let X = 2, Y = 9, Z = 23;

console.log("Second smallest numbe is :");
if ((X > Y && X < Z) || (X > Z && X < Y)) {
    console.log(X);
} else if ((Y > X && Y < Z) || (Y > Z && Y < X)) {
    console.log(Y);
} else {
    console.log(Z);
}


// Q5. Acute or Obtuse Triangle
let angle1 = 60, angle2 = 100, angle3 = 20;

console.log("Given traiangle is : ");
if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
    console.log("obtuse");
} else {
    console.log("acute");
}