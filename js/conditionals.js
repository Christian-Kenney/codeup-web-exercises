"use strict";

// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  */
//
// function askNumber(){
//     return confirm("Do you want to enter a number?");
// }
//
// function askForNumber(){
//     var userNumber = prompt("Please enter a number");
//     if (isNaN(userNumber)){
//         return alert("Your input is not a number");
//     }
//     else
//         return userNumber;
// }
//
// function checkEven(userNumber){
//     if (userNumber % 2 == 0) {
//         alert("You number is even");
//     }
//     else {
//         alert("your number is odd");
//     }
// }
//
// function add100(userNumber) {
//     var addingNumber = parseInt(userNumber);
//     var hund = parseInt(100);
//     return alert("your number added to 100 is " + (addingNumber + hund));
// }
//
// function checkPositive(userNumber) {
//     if (userNumber >= 0) {
//         return alert("your number is positive");
//     }
//     else {
//         return alert("your number is negative");
//     }
// }
//
// if(askNumber()){
//     var userNumber = askForNumber();
//     checkEven(userNumber);
//     add100(userNumber);
//     checkPositive(userNumber);
// }
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined above, if the color passed is not
//  * one of the ones defined above, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// var userColor = prompt("What is your favorite color?");
// function analyzeColor(color){
//     switch(color) {
//         case 'red':
//             alert('Strawberries are red');
//             break;
//         case 'orange':
//             alert('Orange is one of the colors of my alma mater');
//             break;
//         case 'yellow':
//             alert('yellow is my favorite color');
//             break;
//         case 'green':
//             alert('green is the color of the grass');
//             break;
//         case 'blue':
//             alert('Blue is one of the colors of my alma mater');
//             break;
//         case 'indigo':
//             alert('indigo is a shade of purple');
//             break;
//         case 'violet':
//             alert('violet is a color, but also a name of a character from Willy Wonka');
//             break;
//         default:
//             alert('I dont know anything about ' + color);
//     }
//
// }
// console.log(analyzeColor(userColor));
//
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message everytime you refresh the page
//  */
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// /* ########################################################################## */
//
// function calculateTotal(luckyNumber, totalAmount){
//     if (luckyNumber === 0) {
//         return totalAmount;
//     }
//     else if (luckyNumber === 1){
//         return parseInt(totalAmount - (totalAmount * .10));
//     }
//     else if (luckyNumber === 2){
//         return parseInt(totalAmount - (totalAmount * .25));
//     }
//     else if (luckyNumber === 3){
//         return parseInt(totalAmount - (totalAmount * .35));
//     }
//     else if (luckyNumber === 4){
//         return parseInt(totalAmount - (totalAmount * .50));
//     }
//     else if (luckyNumber === 5){
//         return 0;
//     }
// }
//
// console.log(calculateTotal(1, 100));
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 5);
// var totalBill = prompt("What was your total bill? ");
// alert("Your lucky number was " + luckyNumber);
// alert("Your total bill before the discount was " + totalBill);
// alert("Your total bill after the discount is " + calculateTotal(luckyNumber, totalBill));


function multiply(num1, num2){
    parseInt(num1);
    parseInt(num2);
    if(typeof(num1) !== "number" || typeof(num2) !== "number"){
        return false;
    }
    var num3 = parseInt(num1);
    var num4 = parseInt(num2);
    return parseInt(num3 * num4);
}
console.log(multiply("2", "3"));

