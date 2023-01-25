// Apuntes FreecodeCam Java

/* Decalarando variables */
var catSound = "";
var catName = "";
let catSound ;
let catName ;

/* Uniendo variables en consola */
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line

/* variables contantes son definidas en uppercase */
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line


Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	word boundary
\f	form feed

/*============================================
string en 3 lineas    */
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
============================================
concatenar dos string
const myStr = "This is the start. " + "This is the end.";
============================================
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastName.length);
============================================
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[3];
console.log(lastName + " 3 de " + lastName.length); 
console.log(thirdLetterOfLastName);
============================================
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
============================================

