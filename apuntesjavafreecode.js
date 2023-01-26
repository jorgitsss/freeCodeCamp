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

/* Push ["dog", 3] onto the end of the myArray variable. */
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);


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

myOutfit();myOutfit();
const outerWear = "T-Shirt";

function myOutfit() {
const outerWear = "sweater";
return outerWear;
}
console.log(myOutfit()); // Output: "sweater"
console.log(outerWear); // Output: "coat"
const outerWear = "T-Shirt";

function myOutfit() {
const outerWear = "sweater";
return outerWear;
}
console.log(myOutfit()); // Output: "sweater"
console.log(outerWear); // Output: "coat"

/* Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined. */
let sum = 0;
function addThree() {
sum += 3;
}

function addFive() {
sum += 5;
}

addThree();
addFive();
console.log(sum); // Output: 5
console.log(addFive());

/*Call the processArg function with an argument of 7 and assign its return value to the variable processed. */
let processed = processArg(7);

function processArg(num) {
  return (num + 3) / 5;
}

/* Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.*/

function nextInLine(arr, item) {
  // Only change code below this line
return item;
  // Only change code above this line
}
// Setup
let testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// Tests
Passed:nextInLine([], 5) should return a number.
Passed:nextInLine([], 1) should return 1
Failed:nextInLine([2], 1) should return 2
Failed:nextInLine([5,6,7,8,9], 1) should return 5
Failed:After nextInLine(testArr, 10), testArr[4] should be 10

// Solucion 
function nextInLine(arr, item) {
  // Only change code below this line
arr.push(item);
arr[4] = 10;
return arr[0];
  // Only change code above this line

}

// Setup
let testArr = [0,1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* ========================================================== */
// boolean
function welcomeToBooleans() {
  // Only change code below this line

 return true; // Change this line
  // Only change code above this line
}


/* Create an if statement inside the function to return Yes, that was true 
if the parameter wasThatTrue is true and return No, that was false otherwise.*/
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line
}
trueOrFalse(true);
trueOrFalse(false);

/* Add the equality operator to the indicated line so that 
the function will return the string Equal when val is equivalent to 12. */
/*
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
*/
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

/*  Use the strict equality operator in the 
   if statement so the function will return the string Equal when val is strictly equal to 7. */
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);


/* Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99. */
// Setup
function testNotEqual(val) {
  if (val != "99" ) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

/*Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17*/
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

/*  Add the greater than operator to the indicated lines so that the return statements make sense. */
function testGreaterThan(val) {
  if (val > 100 ) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

/*  Add the greater than or equal to operator to the indicated lines so that the return statements make sense. */
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

/* Add the less than operator to the indicated lines so that the return statements make sense. */
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  if (val < 55) {  // Change this line
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

/* Add the less than or equal to operator to the indicated lines so that the return statements make sense. */
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

/* Replace the two if statements with one statement, using the && operator, which will return the string 
Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No. */
function testLogicalAnd(val) {
  // Only change code below this line
  if (val >= 25 && val <= 50) {
   return "Yes";
}
  // Only change code above this line
  return "No";
}
testLogicalAnd(10);

/*  Combine the two if statements into one statement 
which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside. */

function testLogicalOr(val) {
  // Only change code below this line
  if (val > 20 || val < 10) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}
testLogicalOr(15);


/* Combine the if statements into a single if/else statement. */
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}
testElse(4);

/* Convert the logic to use else if statements. */
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
  }
  
  testElseIf(7);

/*  */
/*  */
