//learning js
// let x;
// x=19;
// let y='abhi';
// let z=true;
// console.log(typeof z)
// console.log(typeof y)
// console.log(typeof x);
// console.log(`my age is ${x}`);

// let yourName = "AbhiGyan Singh"
// let year = "Third"
// let collegeName = "IIT"

// document.getElementById("p1").textContent = `Your Name is ${yourName}`;
// document.getElementById("p2").textContent = `You are in ${year} Year`;
// document.getElementById("p3").textContent = `Your college Name is ${collegeName}`;

/* operators presedence
1. parenthesis ()
2. exponents
3. multiplication & division & modulo 
4. addition & subtraction
*/

/*Accepting user input 
1. Easy Way = window prompt
2. professional way = html textbox
*/

// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }

/* type conversion
change the datatype of a value to another
(strings, numbers, booleans)
*/

// let age = window.prompt("how old are you?");
// age = Number(age);
// age+=1
// console.log(age);

/* const = a variable that can't be changed
 */
//we only write capital for booleans and numbers not for strings
// const PI = 3.14159;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick = function () {
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   document.getElementById("myH3").textContent = circumference
// };

//counter Program

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }

/* Math = build-in object that provides a collection of properties and methods
 */
// let x = 4;
// let y = 2;
// let z = 1;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x,y);
// z = Math.sqrt(x);
// z = Math.log(x);
// //for trigo function neterdegree directly
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// z = Math.max(x, y, z);
// z = Math.min(x, y, z);
// console.log(z);

//if-else statements program

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){
//     age = myText.value;
//     age = Number(age);

//     if(age>=100){
//         resultElement.textContent = `You are too old to enter this site`;
//     }else if(age == 0){
//         resultElement.textContent = `you are just born`;
//     }else if(age>=18){
//         resultElement.textContent = `you are old enough to enter this site`;
//     }else if(age<0){
//         resultElement.textContent = `you age can't be below 0`;
//     }else{
//         resultElement.textContent = `you must be 18+ to enter this site`;
//     }
// }

/*.checked = property that determines the checked state of an HTML checkbox or radio button element
 */

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");

// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// document.getElementById("mySubmit").onclick = function () {
//   if (myCheckBox.checked) {
//     subResult.textContent = `You are subscribed`;
//     if (visaBtn.checked) {
//       paymentResult.textContent = `You are paying with visa`;
//     } else if (masterCardBtn.checked) {
//       paymentResult.textContent = `You are paying with mastercard`;
//     } else if (payPalBtn.checked) {
//       paymentResult.textContent = `You are payig with paypal`;
//     } else {
//       paymentResult.textContent = `Select atleast one paymeny type`;
//     }
//   } else {
//     subResult.textContent = `You are not subscribed`;
//   }
//   if (visaBtn.checked) {
//     paymentResult.textContent = `You are paying with visa`;
//   } else if (masterCardBtn.checked) {
//     paymentResult.textContent = `You are paying with mastercard`;
//   } else if (payPalBtn.checked) {
//     paymentResult.textContent = `You are payig with paypal`;
//   } else {
//     paymentResult.textContent = `Select atleast one paymeny type`;
//   }
// };

/*ternary operator
 */
// let purchaseAmount = 101;
// let discount = purchaseAmount >=100 ? 10 : 0;
// console.log(purchaseAmount - purchaseAmount*(discount/100));

/*string methods = allows you to manipulate and work with the text(strings)
 */
// let username = "BroCode";
// console.log(username.charAt(0));
// console.log(username.indexOf("o"));
// console.log(username.lastIndexOf("o"));
// console.log(username.length);
// console.log(username.trim());
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.repeat(3));

// let result = username.startsWith("b");
// console.log(result);
// let reesult = username.endsWith("e");
// console.log(reesult);
// let reeesult = username.includes("e");
// console.log(reeesult);

// let phoneNumber = "123-456-789";
// phoneNumber = phoneNumber.replaceAll("-","^");
// console.log(phoneNumber);
// phoneNumber = phoneNumber.padStart(15,"0");
// console.log(phoneNumber);
// phoneNumber = phoneNumber.padEnd(15,"0");
// console.log(phoneNumber);

/* string slicing = create a substring from a portion
of another string
*/
// let fullName = "Broseph code";
// let firstName = fullName.substring(-5);
// console.log(firstName);
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(lastName);

/* Mathod chaining */
// let username = window.prompt("enter your name");
// username = username.trim().slice(0,1).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

// logical operators = used to combine or manipulate boolean values
// (true or false)
// AND = &&
// OR  = ||
// NOT = !

// const temp = -250;

// if (temp <= 0 || temp > 30) {
//     console.log("The weather is BAD");
// } else {
//     console.log("The weather is GOOD");
// }
// const isSunny = true;

// if (!isSunny) {
//     console.log("It is CLOUDY");
// } else {
//     console.log("It is SUNNY");
// }

// =   assignment operator
// ==  comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// !=  inequality operator
// !== strict inequality operator

// const PI = 3.14;

// if (PI !== "3.14") {
//     console.log("That is NOT Pi");
// } else {
//     console.log("That is Pi");
// }

/* while loop = repeat some code WHILE some condition is true*/

// let username = "";

// while (username === "" || username === null) {
//     username = window.prompt("Enter your name");
// }

// console.log(`Hello ${username}`);
// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");

//     if (username === "myUsername" && password === "myPassword") {
//         loggedIn = true;
//         console.log("You are logged in!");
//     } else {
//         console.log("Invalid credentials! Please try again");
//     }
// }

/* for loop = repeat some code a LIMITED amount of times */

// for (let i = 1; i <= 20; i++) {

//     if (i == 13) {
//         continue;
//         //break;
//     } else {
//         console.log(i);
//     }

// }
/* Number guessing game */

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//   guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//   guess = Number(guess);

//   if (isNaN(guess)) {
//     window.alert("Please enter a valid number");
//   } else if (guess < minNum || guess > maxNum) {
//     window.alert("Please enter a valid number");
//   } else {
//     attempts++;

//     if (guess < answer) {
//       window.alert("TOO LOW! TRY AGAIN!");
//     } else if (guess > answer) {
//       window.alert("TOO HIGH! TRY AGAIN!");
//     } else {
//       window.alert(`CORRECT! The answer was ${answer}.It took you ${attempts} attempts`);
//       running = false;
//     }
//   }
// }

// function = A section of reusable code.
// Declare code once, use it whenever you want.
// Call the function to execute that code.

// function happyBirthday(username, age) {
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday to you!");
//   console.log(`Happy birthday dear ${username}!`);
//   console.log("Happy birthday to you!");
//   console.log(`You are ${age} years old`);
// }

// happyBirthday("BroCode", 25);
// happyBirthday("Spongebob", 30);
// happyBirthday("Patrick", 37);

/* function */

// let result;
// function add(x,y){
//     result = x + y;
//     return result;
// }
// let ans = add(1,3);
// console.log(ans);

/* variable scope = where variable is recognised and accessible (global vs local) */
//local is preferred

/* Arrays */

let fruits = ["apple","orange", "banana"];

fruits.push("coconut");

fruits.pop();

fruits.unshift("mango");
console.log(fruits);
// fruits.shift();
// console.log(fruits.length);
// console.log(fruits.indexOf("coconut"))
// console.log(fruits);
// for(let fruit of fruits){
//     console.log(fruit);
// }
// console.log(fruits.sort());
// console.log(fruits.reverse());

/* Spread Operator = ...allows an iterable such as an array or string to be expanded into separate elements(unpacks the elements)*/

// let numbers = [1,2,3,4,5];
// let maximum = Math.max(...numbers);
// let minimun = Math.min(...numbers);
// console.log(...numbers.join("-"));
// console.log(maximum);
// let username = "Bro ji";
// let letters = [...username].join("-");
// console.log([...username]);
// console.log(letters);
// console.log([...username].join("-"));



// rest parameters = (...rest) allow a function work with a variable
// number of arguments by bundling them into an array

// spread = expands an array into separate elements
// rest = bundles seperate elements into an array

// function openFridge(...foods){
//     console.log(foods);
//     console.log(foods.length);
// }

// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);

// console.log(foods);
// function getAverage(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = getAverage(75, 100, 85, 90, 50);

// console.log(total);


