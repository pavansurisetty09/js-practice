// var a = 10;
// var b = 20;

// const { func } = require("prop-types");

// console.log(a, b);
// var c;
// c = a;
// a = b;
// b = c;

// console.log(a, b);ś

// function check(n) {
//   if (n % 2 == 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }

// check(2);
// check(5);
// check(6);
// check(9);
// check(11);

// function billCheck(bill) {
//   if (bill % 3 === 0 && bill % 5 === 0) {
//     console.log("Bill Money Won by Jassu ");
//   } else if (bill % 3 === 0) {
//     console.log("Bill Money won by Vasu");
//   } else if (bill % 5 === 0) {
//     console.log("Bill Money won by Raju");
//   }
// }

// billCheck(1500);
// billCheck(491);
// billCheck(9);
// billCheck(100);

// function heightCheck(feet) {
//   if (feet >= 7) {
//     console.log("More Height");
//   } else if (feet >= 5) {
//     console.log("Average Height");
//   } else {
//     console.log("Less Height");
//   }
// }

// heightCheck(6);
// heightCheck(4);
// heightCheck(8);

// var years = [2003, 1997, 2021, 2000];

// var largest = years[0];
// var secondLargest = years[0];

// for (var i = 0; i < years.length; i++) {
//   if (years[i] >= largest) {
//     largest = years[i];
//   } else if (years[i] > secondLargest) {
//     secondLargest = years[i];
//   }
// }

// console.log(largest);
// console.log(secondLargest);

// function checkBiggest(years) {
//   var biggest = years[0];
//   var secondBiggest = years[0];

//   for (var i = 0; i < years.length; i++) {
//     if (years[i] >= biggest) {
//       biggest = years[i];
//     } else if (years[i] > secondBiggest) {
//       secondBiggest = years[i];
//     }
//   }

//   console.log(biggest);
//   console.log(secondBiggest);
// }
// checkBiggest([2003, 2005, 2006, 2021]);

// var numbers = [10, 20, 20, 30, 40];

// const findNum = numbers.includes(10);
// const findNum2 = numbers.includes(50);
// console.log(findNum);

// function checkNum(number) {
//   var found = false;

//   numbers.forEach((num) => {
//     if (num === number) {
//       found = true;
//     }
//   });
//   console.log(found ? "found" : "not found");
// }

// checkNum(10);
// checkNum(50);
// checkNum(20);

// var numbers = [10, 20, 27, 10, 30, 20, 40];
// var repeatedNum = [];

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] === numbers[i]) {
//     repeatedNum.push(numbers[i]);
//   }
// }

// console.log(repeatedNum);

// console.log(numbers);

// for (var i = 0; i < numbers.length; i++) {
//   for (var j = i; j < numbers.length; j++) {
//     if (i != j && numbers[i] == numbers[j]) {
//       console.log(numbers[j]);
//     }
//   }
// }

// for (var i = 1; i < 5; i++) {
//   for (var j = i; j < 5; j++) {
//     // console.log(i, j);
//   }
// }

// var i = 5;

// function print(n, g) {
//   for (var i = 1; i <= g; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
//   }
// }

// print(5, 12);
// print(1);

// function factorial(n) {
//   var result = 1;
//   for (var i = 1; i <= n; i++) {
//     result = i * result;
//   }
//   console.log(result);
// }

// factorial(5);

// function factorial(n) {
//   var result = 1;
//   for (var i = 2; i <= n; i++) {
//     result = result + i;
//   }
//   console.log(result);
// }

// factorial(0);

// var sentense = "my name is rishi";

// sentWords = sentense.split(" ");

// var finalString = "";
// console.log(sentWords);

// for (var i = 0; i < sentWords.length; i++) {
//   finalString =
//     finalString + " " + sentWords[i][0].toUpperCase() + sentWords[i].slice(1);
// }

// console.log(finalString);

// var word = ["my", "name", "is", "rishi"];

// var sentense = "";

// // for (var i = 0; i < word.length; i++) {
// //   sentense = sentense + " " + word[i];
// // }

// // console.log(sentense);

// var sentense = word.join(" ");

// console.log(sentense);

// var word = ["Hello", "world", "how", "are", "you"];

// var sentense = "";

// for (var i = 0; i < word.length; i++) {
//   sentense = sentense + " " + word[i];
// }

// console.log(sentense);

// var nums = [56, 52, 6, 23, 41];

// function checkLargest(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     var k = nums[i];
//     console.log(k);
//   }
// }
// checkLargest(nums);
// words = ["hi", "rishi", "how", "are", "you"];

// sentense = "";

// for (var i = 0; i < words.length; i++) {
//   sentense = sentense + " " + words[i][0].toUpperCase() + words[i].slice(1);
// }

// console.log(sentense);

// var sentense =
//   "writing is known as majuscule—majuscule meaning an all-capital script.... Lowercase letters as we know them—called minuscule script—can be traced to the court of the early French King Charlemagne. The newly developed minuscule script became a faster and more appealing writing system for monks and scholars";

// var splitSent = sentense.split(" ");

// finalSentense = "";

// console.log(splitSent);

// for (var i = 0; i < splitSent.length; i++) {
//   finalSentense =
//     finalSentense + " " + splitSent[i][0].toUpperCase() + splitSent[i].slice(1);
// }

// console.log(finalSentense);

// (function () {
//   var a = (b = 3);
// })();

// console.log("a defined " + (typeof a !== "undefined"));
// console.log("b defined " + (typeof b !== "undefined"));

// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log("outer func:  this.foo = " + this.foo);
//     console.log("outer func:  self.foo = " + self.foo);
//     (function () {
//       console.log("inner func:  this.foo = " + this.foo);
//       console.log("inner func:  self.foo = " + self.foo);
//     })();
//   },
// };
// myObject.func();

// function foo1() {
//   return {
//     bar: "hello",
//   };
// }

// function foo2() {
//   return;
//   {
//     bar: "hello";
//   }
// }

// console.log("foo1 returns:");
// console.log(foo1());
// console.log("foo2 returns:");
// console.log(foo2());

// for (var i = 1; i <= 80; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// for (var i = 80; i >= 1; i--) {
//   if (i % 2 !== 0) console.log(i);
// }

// function factorial(n) {
//   var result = 1;
//   for (var i = 1; i <= n; i++) {
//     result = i * result;
//   }
//   console.log(result);
// }

// factorial(4);

// function factorial(x) {
//   var result = 1;
//   for (var i = 1; i <= x; i++) {
//     result = result * i;
//   }
//   console.log(result);
// }

// factorial(5);

// var sentense = "Surisetty Pavan Kumar";

// var words = sentense.split(" ");
// // console.log(splitSent);

// finalString = "";

// for (var i = 0; i < words.length; i++) {
//   if (i === words.length - 1) {
//     finalString = finalString + words[i];
//   } else {
//     finalString = finalString + words[i] + "_";
//   }
// }

// console.log(finalString);

// take list of persons in an array

// personsAge = [
//   { name: "rishi", age: 27 },
//   { name: "vijju", age: 26 },
// ];

// ageSum = 0;

// for (i = 0; i < personsAge.length; i++) {
//   ageSum = ageSum + personsAge[i].age;
// }

// console.log(ageSum);

// names = ["rishi", "vijay", "praveen"];

// callProf = [];

// for (i = 0; i < names.length; i++) {
//   callProf[i] = "Mr. " + names[i];
// }

// console.log(callProf);

// personsAge = [
//   { name: "rishi", age: 27 },
//   { name: "vijju", age: 26 },
// ];

// names = [];

// // console.log(names);

// for (i = 0; i < personsAge.length; i++) {
//   names[i] = "Mr." + personsAge[i].name;
//   // personsAge.push(names);
// }

// console.log(names);

// var updatedPersons = [];

// for (var i = 0; i < personsAge.length; i++) {
//   updatedName = "Mr." + personsAge[i].name;
//   var element = { ...personsAge[i], name: updatedName };
//   // var element = { name: updatedName, age: personsAge[i].age };
//   // updatedPersons[i] = element;
//   updatedPersons.push(element);
// }
// console.log(updatedPersons);

// personsAge = [
//   { name: "rishi", age: 27 },
//   { name: "vijju", age: 26 },
// ];

// var updateNames = [];

// for (var i = 0; i < personsAge.length; i++) {
//   var updateName = "Mr." + personsAge[i].name;
//   var element = { ...personsAge[i], name: updateName };
//   updateNames[i] = element;
// }

// console.log(updateNames);

// var shirts = ["red", "blue", "green", "blue", "greem", "white" ]

// var colors = [
//   {
//     shirt: "red",
//   },
//   {
//     shirt: "green",
//   },
//   {
//     shirt: "pink",
//   },
//   {
//     shirt: "red",
//   },
//   {
//     shirt: "pink",
//   },
//   {
//     shirt: "orange",
//   },
// ];

// var numColors = [];

// colors.map((color) => {

// });

// function revString(str) {
//   var name = str.split("");
//   name.reverse();
//   str = name.join("");
//   console.log(str);
// }
// revString("praveen");

// function palindrome(str) {
//   var isPalindrome = str.split("").reverse().join("");
//   console.log(str === isPalindrome);
// }

// palindrome("abba");

// function findRep(str) {
//   var obj = {};
//   for (var char of str) !obj[char] ? (obj[char] = 1) : obj[char]++;
//   console.log(obj);
// }

// findRep("hjkhkehfe");

// age = 30;

// age = 52;

// console.log(age);

// let score;

// score = 30;

// console.log(score);

//String, Number, boolean, null, undefined,

// const name = "Rishi";
// const age = 23;

//Concatination

// console.log(`my name is ${name} and i'm ${age} years old `);

// var greet = "Hello World";

// const person = {
//   firstName: "Rishi",
//   lastName: "Kumar",
//   age: 30,
//   hobbies: ["music", "Movies", "sports"],
//   address: {
//     street: "50 Main st",
//     city: "Boston",
//     state: "MA",
//   },
// };

// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person;

// console.log(city);

// var j = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(j + " x " + i + " = " + j * i);
// }

// var persons = ["rishi", "vijay", "pavan", "rohith", "paramesh", "harish"];
// var ages = ["23", "65", "45", "56", "89", "96"];

// console.log(Math.max(...ages));

// const chunks = ((arr, n) => {
//   const chuncked = [];
//   for (let elem of arr) {
//     let last = chuncked[chuncked.length - 1];
//     if (!last || last.length === n) chuncked.push([elem]);
//     else last.push(elem);
//   }
//   return chuncked;
// })([1, 4, 12, 3, 2, 6, -9, 0], 5);

// console.log(chunks);

// var myNum;
// myNum = Math.round(3.5);
// myNum = Math.floor(3.5);
// myNum = Math.ceil(3.5);
// myNum = Math.pow(3, 4);
// myNum = Math.sqrt(64);
// myNum = Math.abs(-64);
// myNum = Math.min(1, 2, 5, 6, 9);
// myNum = Math.max(1, 2, 5, 6, 9);
// myNum = Math.E;

// console.log(myNum);

// var a = window.prompt("Enter side A");
// var b = window.prompt("Enter side B");
// var c;

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log("side C =", c);

// function flip(){}

// function success() {}

// function fail() {}

// function reset() {}

//TODO: shuffle

// function check(n) {
//   if (n % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("Odd");
//   }
// }

// check(6);

// function checkNum(num1, num2, num3) {
//   if (
//     (num1 >= 50 && num1 <= 99) ||
//     (num2 >= 50 && num2 <= 99 && num3 >= 50 && num3 <= 99)
//   ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// checkNum(55, 10, 10);

// var arr = [];

// function itrNum(num) {
//   for (let i = 1; i <= num; i++) {
//     arr[i - 1] = i;
//   }
//   return arr;
// }

// console.log(itrNum(20));

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// var num = [10, 56, 86, 23, 57];
// arr = [];
// for (let i in num) {
//   console.log(num[i]);
// }

// const object = {
//   name: 1,
//   age: 23,
//   gender: 5,
// };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// for (let property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// var name = prompt("whats your name?");

// console.log(`Hello ${name} Good Evening`);
// alert(`Hello ${name} Good Evening`);

// 10 == 10; returns true;
// 10 === 10; returns true;
// 10 == "10"; returns true;
// 10

// var name = "paramesh";

// var name = "rishi";

// name = "mouni";
// name = "pavan";
// console.log(name);

// let name1 = "paramesh";

// name1 = "rishi";
// console.log(name1);

// let string = "Hello World";
// string = "I'm a String";
// string[0] = "M";

// console.log(string);
// let string = "Hello World";
// string = "I'm a String";
// // string[0] = "M";

// console.log(string);

// var nums = [23, 21, 25];
// function addNum(nums) {
//   //   nums.map((num) => console.log(num + 1));
//   for (let i = 0; i < nums.length; i++) {
//     num = nums[i];
//     console.log(num + 1);
//   }
// }

// addNum(nums);
// function revStr(str) {
//   var strArr = "";
//   for (i = 0; i <= str.length - 1; i++) {
//     strArr = str[i] + strArr;
//   }
//   console.log(strArr);
// }
// revStr("pavan");
// const addNum = (nums) => {
//   var nums = [23, 21, 25];

//   nums.map((num) => console.log(num + 2));
// };

// addNum();

// name = "Rishi";

// console.log(name);

// function checkNum(num) {
//   if (num % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }

// checkNum(40);
// checkNum(27);
// checkNum(69);

// var x = 1;
// while (x <= 10) console.log("Hello");
// x++;

// var count = 1;
// while (count <= 10) {
//   console.log("Hello");
//   count++;
// }

// var name = "Rishi";
// var i = 0;

// while (i < name.length) {
//   console.log(name[i]);
//   i++;
// }

// var n = 5;

// while (n <= 100) {
//   if (n % 3 === 0 && n % 5 === 0) {
//     console.log(n);
//   }

//   n++;
// }

// var num = 1;
// while (num <= 100) {
//   if (num % 6 === 0 && num % 9 === 0) {
//     console.log(num);
//   }
//   num++;
// }

// var name = prompt("Enter Your Favourite Actress Name:");
// while (name !== "sunny") {
//   name = prompt("Enter Your Favourite Actress Name:");
// }

// alert("Thanks for Confirmation as your Favourite Actress is Sunny.");

// for (let i = 1; i <= 10; i++) {
//   console.log("Hello");
// }

// var name = "rishi";

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// var word = prompt("Enter a name");

// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

// var name = prompt("Enter Your Name:");
// var actor = prompt("Enter your Favourite Actor:");
// var luckyNum = prompt("Enter your Lucky Number:");
// var dish = prompt("Enter your Favourite Dish:");

// var nameCondition = false;
// var actorCondition = false;
// var luckyNumCondition = false;
// var dishCondition = false;

// if (name[0] == "d") {
//   nameCondition = true;
// }

// if (actor[actor.length - 1] == "r") {
//   actorCondition = true;
// }

// if (luckyNum == 7) {
//   luckyNumCondition = true;
// }

// if (dish.length >= 6) {
//   dishCondition = true;
// }

// alert(`Hello ${name} Thanks for your Information.`);

// if (nameCondition && actorCondition && luckyNumCondition && dishCondition) {
//   console.log("Hello Secret Agent our next operation is:");
//   console.log(
//     "We have to kill atleast 10 sleeping students in the class room because these are burdent to country"
//   );
// }

// function greeting() {
//   console.log("Good Morning");
// }
// greeting();

// function wish(name) {
//   alert(`Good Morning ${name}`);
// }

// wish(prompt("Enter your Name"));

// function wish(name = "Guest") {
//   console.log(`Hello Good Morning ${name}`);
// }
// wish();
// wish("Rishi");

// function square(num) {
//   console.log(num * num);
// }
// square(10);

// function sumNums(num1, num2) {
//   console.log(num1 + num2);
// }

// sumNums(2, 5);

// function conToUpC(name) {
//   console.log(name.toUpperCase());
// }

// conToUpC("rishi");

// function conToUpC(name) {
//   console.log(`${name[0].toUpperCase() + name.slice(1)}`);
// }
// conToUpC("rishi");

// function conToUpC(names) {
//   var names = ["pavan", "rishi", "praveen", "paramesh", "vijay"];
//   names.map((name) => console.log(`${name[0].toUpperCase() + name.slice(1)}`));
// }

// conToUpC();

// function checkNum(num) {
//   if (num % 2 === 0) {
//     console.log("Given Number is even");
//   } else {
//     console.log("Given Number is odd");
//   }
// }

// checkNum(21);

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(15));
// console.log(isEven(10));

// function factorial(n) {
//   var result = 1;
//   for (let i = 1; i <= n; i++) {
//     result = i * result;
//   }
//   console.log(result);
// }
// factorial();

// replace

// function conSToK(str) {
//   var newString = str.replace("_", "-");
//   return newString;
// }

// console.log(conSToK("rishi_rhys"));
// var name = "rishi";
// function changeName(name) {
//   let chName = name[0].toUpperCase() + name.slice(1);
//   console.log(chName);
// }

// changeName(); (Not Working Method)

// Global Scope & Local Scope

// Global Scope

// If the variables are declared outside of a function are having global scope, these variables can access from any function.

// var x = 10;
// function f1() {
//   console.log(x);
// }

// function f2() {
//   console.log(x);
// }

// f1();
// f2();

// Local Scope

// The variables which are declared inside of a function then the variables having local Scope and it is available for only the particular function, we cannot access those local scoped variables in another function.

// function f1() {
//   var x = 10;
//   console.log(x);
// }

// f1();
// console.log(x);

// var x = 10;
// function f1() {
//   x = 177;
//   console.log(x);
// }

// function f2() {
//   console.log(x);
// }

// f1();
// f2();

// var x = 10;

// function f1() {
//   x = 177;
//   console.log(x);
// }

// function f2() {
//   console.log(x);
// }

// f2();
// f1();

// var x = 10;

// function f1() {
//   var x = 177;
//   console.log(x);
// }

// function f2() {
//   console.log(x);
// }

// f1();
// f2();

// function singASong() {
//   console.log("Jill JIll Jigelu Raja");
//   console.log("Rangamma Mangamma");
// }

// setInterval(singASong, 3000);

// clearInterval(5);

// var age = Number(prompt("Enter your age"));
// if (age > 60) {
//   alert(
//     "Your age already crossed marriage age.. No Chance to getting marriage"
//   );
// } else if (age < 18) {
//   alert("Plz wait some more time... Definitely you will get a good Match");
// } else {
//   alert("Thanks for Registration.. you will get a match details soon");
// }
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(3));

// function addNum(num1, num2) {
//   return num1 + num2;
// }
// var result = addNum(32, 6);
// console.log(result);

// function snakeToKebab(str) {
//   var newString = str.replace("_", "-");
//   return newString;
// }
// console.log(snakeToKebab("Pavan_Praba"));

// function sleep_in(weekday, vacation) {
//   return !weekday || vacation;
// }

// console.log(`Is Employee sleeping`, sleep_in(true, false));
// console.log(`Is Employee sleeping`, sleep_in(true, true));
// console.log(`Is Employee sleeping`, sleep_in(false, false));
// console.log(`Is Employee sleeping`, sleep_in(false, true));

// function monkey_trouble(a_smile, b_smile) {
//   return (a_smile && b_smile) || (!a_smile && !b_smile);
// }

// console.log(`Is Person in trouble ${monkey_trouble(true, true)}`);
// console.log(`Is Person in trouble ${monkey_trouble(true, false)}`);
// console.log(`Is Person in trouble ${monkey_trouble(false, true)}`);
// console.log(`Is Person in trouble ${monkey_trouble(false, false )}`);

// function string_times(str, n) {
//   result = "";
//   var count = 1;
//   while (count <= n) {
//     result = result + str;
//     count++;
//   }
//   return result;
// }

// console.log(string_times("Rishi ", 5));

// function string_times(str, n) {
//   result = "";
//   var count = 1;
//   while (count <= n) {
//     result = result + str;
//     count++;
//   }
//   return result;
// }

// console.log(string_times("Pavan ", 5));

// function lucky_sum(a, b, c) {
//   if (a == 13) {
//     return 0;
//   }
//   if (b == 13) {
//     return a;
//   }
//   if (c == 13) {
//     return a + b;
//   }
// }
// console.log(lucky_sum(13, 1, 4));
// console.log(lucky_sum(5, 4, 13));
// console.log(lucky_sum(5, 13, 4));

// function checkSpeedLimit(speed, isBirthday) {
//   result = "";
//   if (isBirthday) {
//     speed = speed - 5;
//   }
//   if (speed <= 60) {
//     return (result = 0);
//   }
//   if (speed >= 61 && speed <= 80) {
//     return (result = 1);
//   }
//   if (speed >= 81) {
//     return (result = 2);
//   }
// }

// console.log(checkSpeedLimit(64, false));
// console.log(checkSpeedLimit(85, true));
// console.log(checkSpeedLimit(75, false));

// JavaScript Array Methods
// An Array is an indexed collection of elements.

// The main advantage of array concept is we can represent multiple values by using a single variable. so that, the length of the code is reduced and code readability can be improved.

// var names = ["rishi", "pavan", "paramesh", "Vijay"];

// console.log(names[1]);
// console.log(names);

// var names = [];

// UPDATE
// names[1] = "Kumar";

// console.log(names);

// ADD
// names[4] = "Chaitu";

// console.log(names);

// var number = ["rishi", "pavan", "paramesh", "Vijay"];
// var number = new Array("rishi", "pavan", "paramesh", "Vijay");

// console.log(number);

// var names = ["rishi", "pavan", "paramesh", "Vijay"];

// console.log(names.length);

// var person = ["rishi", 24, true, null];

// console.log(person);

// PUSH

// var names = ["rishi", "pavan", "paramesh", "Vijay"];

// names.push("Praveen");

// console.log(names);

// var names = ["rishi", "pavan", "paramesh", "Vijay"];

// names.pop();

// console.log(names);

// names.unshift("Praveen");

// console.log(names);

// var names = ["rishi", "pavan", "paramesh", "Vijay"];

// var nums = [21, 23, 25, 29];
// names.shift();

// console.log(names);

// console.log(names.indexOf("Vijay"));

// mixAll = names.concat(nums);

// console.log(mixAll);

// console.log(names.copyWithin(3, 1));
// sliceNames = names.slice(1);

// console.log(sliceNames);

// var nums = [
//   [21, 23, 25, 29],
//   [61, 89, 65, 78],
//   [89, 8, 4, 66],
// ];

// console.log(nums[1][2]);

// let hai = "vijay";
// hai = "Rishi";

// console.log(hai);

// console.log(x);

// let x = "rishi";
// console.log(x);

// console.log(x);

// var x = "rishi";
// console.log(x);
// console.log("Rishi");

// function wish(msg) {
//   return console.log(msg);
// }

// wish("Hello Rishi");

// While Loop

// var nums = [22, 56, 32, 54, 78];

// var i = 0;
// while (i < nums.length) {
//   console.log(nums[i]);
//   i++;
// }

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// for (rishi of nums) {
//   console.log(rishi);
// }

// var nums = [22, 56, 32, 54, 78];

// function printNumbers(numbers) {
//   console.log(numbers);
// }
// nums.forEach(printNumbers);

// var names = ["Rishi", "Paramesh", "Vijay", "Mounika", "Praveen"];

// function printElements(element) {
//   console.log(element);
// }
// names.forEach(printElements);

// names.forEach(function printElements(element) {
//   convertString = element[0].toLowerCase();
//   console.log(`${convertString}${element.slice(1)}`);
// });

// var names = ["Rishi", "Paramesh", "Vijay", "Mounika", "Praveen"];

// names.forEach(console.log);

// console.log(names.slice(2));

// function reverse(names) {
//   for (var i = names.length - 1; i >= 0; i--) {
//     console.log(names[i]);
//   }
// }
// reverse(["Rishi", "Paramesh", "Vijay", "Mounika", "Praveen"]);

// function reverseNames(names) {
//   for (var i = names.length - 1; i >= 0; i--) {
//     console.log(names[i]);
//   }
// }

// reverseNames(["Rishi", "Paramesh", "Vijay", "Mounika", "Praveen"]);

// function reverseElements(elements) {
//   for (var i = elements.length - 1; i >= 0; i--) {
//     console.log(elements[i]);
//   }
// }

// reverseElements(["Rishi", "Paramesh", "Vijay", "Mounika", "Praveen"]);

// var names = ["Rishi", "Paramesh", "Vijay", "Mounika", "Praveen"];

// slicedNames = names.slice(1, 5);

// console.log(slicedNames);

// names.splice(3, 1);

// console.log(names);

// var names = ["Rishi", "Paramesh", "Vijay", "Mounika", "Praveen"];

// Book Management App
// var books = [];

// var input = prompt("which operator you want to perform[add|list| exit]:");

// while (input != "exit") {
//   if (input == "add") {
//     var newBook = prompt("Enter name of the Book:");
//     books.push(newBook);
//   } else if (input == "list") {
//     console.log("List of Available Books:");
//     console.log(books);
//   } else {
//     console.log("Enter Valid Option");
//   }
//   input = prompt("which operator you want to perform[add|list| exit]:");
// }

// console.log("Thanks for using our Application");

// var numbers = [21, 6, 5, 89, 5];

// numbers[0] = 1;

// console.log(numbers);

// var names = ["Rishi", "Paramesh", "Vijay", "Mounika", "Praveen"];

// names[0] = "Kumar";

// console.log(names);

// var name = "sunny";

// name[0] = "B";

// console.log(name);

// function identicalNums(nums) {
//   var first = nums[0];
//   for (var i = 1; i < nums.length; i++) {
//     if (nums[i] != first) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(identicalNums([10, 10, 10, 10, 10]));
// console.log(identicalNums([10, 30, 11, 56, 89]));

// function findMax(num) {
//   var max = num[0];
//   for (var i = 1; i < num.length; i++) {
//     if (num[i] > max) {
//       max = num[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([10, 30, 11, 56, 89]));

// function sumAll(nums) {
//   var sum = 0;
//   for (var i = 0; i < nums.length; i++) {
//     sum = nums[i] + sum;
//   }
//   return sum;
// }

// console.log(sumAll([23, 56, 21, 5]));

// let abc = "webdeveloping24x7";

// console.log("abc".length);

// var names = ["rishi", "paramesh", "vijay", "praveen"];

// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// names.forEach(function (name) {
//   console.log(name);
// });

// names.forEach(function (name) {
//   console.log(name);
// });

// var nums = [2, 5, 6, 4];

// var sum = 0;

// for (i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }
// console.log(sum);

// nums.forEach((num) => {
//   sum += num;
// });
// console.log(sum);

// var doubledNumbers = [];

// for (var i = 0; i < nums.length; i++) {
//   doubledNumbers.push(nums[i] * 2);
// }
// console.log(doubledNumbers);
// console.log(nums);

// var doubled = [];

// doubled = nums.map(function (nums) {
//   return nums * 2;
// });
// console.log(doubled);

// var years = [1997, 2021, 2000, 2003];

// var śś = years[0];
// var secondLargest = years[0];

// for (var i = 0; i < years.length; i++) {
//   if (years[i] >= śś) {
//     secondLargest = śś;
//     śś = years[i];
//   } else if (years[i] > secondLargest) {
//     secondLargest = years[i];
//   }
// }

// console.log(śś);
// console.log(secondLargest);

// var years = [2000, 1987, 2012, 2005];

// var śś = years[0];
// secondLargest = śś;

// for (let i = 0; i < years.length; i++) {
//   if (years[i] >= śś) {
//     śś = years[i];
//   } else if (years[i] > secondLargest) {
//     secondLargest = years[i];
//   }
// }
// console.log(śś);
// console.log(secondLargest);

// function reverseString(str) {
//   var reverseStr = str.split("");
//   reverseStr.reverse();
//   reverseStr.join("");
//   console.log(reverseStr);
// }
// reverseString("hello");

// function reverseString(str) {
//   var reverseStr = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     reverseStr = reverseStr + str[i];
//   }
//   console.log(reverseStr);
// }
// reverseString("rishi");

// function reverseString(str) {
//   var reverseStr = "";
//   for (var i = 0; i <= str.length - 1; i++) {
//     reverseStr = str[i] + reverseStr;
//   }
//   console.log(reverseStr);
// }
// reverseString("rishi");

// function reverseString(str) {
//   let reverseStr = "";
//   str.split("").forEach((char) => {
//     reverseStr = char + reverseStr;
//   });
//   console.log(reverseStr);
// }
// reverseString("pavan");

// function reverseString(str) {
//   let reverseStr = "";
//   reverseStr = str.split("").reduce(function (reverseStr, char) {
//     return (reverseStr = char + reverseStr);
//   }, "");
//   console.log(reverseStr);
// }
// reverseString("rishi");

// var revString = "";
// function reverseString(str) {
//   for (s of str) {
//     revString = s + revString;
//   }
//   console.log(revString);
// }
// reverseString("pavan");

// var revStr = "";

// function reverseString(str) {
//   for (var i = 0; i <= str.length - 1; i++) {
//     revStr = str[i] + revStr;
//   }
//   console.log(revStr);
// }
// reverseString("kumar");

// function reverseString(str) {
//   var revStr = "";
//   str.split("").map(function (char) {
//     revStr = char + revStr;
//   });
//   console.log(revStr);
// }
// reverseString("kumar");

// var revArr = [];
// function reverseArray(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     revArr = arr[i];
//     console.log(revArr);
//   }
// }
// reverseArray(["rishi", "pavan", "mounika", "vijaya", "venkatarao"]);

// check palindrome

// var revName = "";
// function checkPalindrome(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     revName = revName + str[i];
//   }
//   console.log(revName);
//   if (revName === str) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// checkPalindrome("pavan");
// checkPalindrome("racecar");

// const checkPalindrome = (str) => {
//   var revName = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revName = revName + str[i];
//   }
//   if (revName === str) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };
// checkPalindrome("racecar");
// checkPalindrome("pavan");
// checkPalindrome("pavap");

// const checkPalindrome = (str) => {
//   var revName = "";
//   for (name of str) {
//     revName = name + revName;
//   }
//   if (revName === str) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };
// checkPalindrome("racecar");
// checkPalindrome("pavan");
// checkPalindrome("pavap");

// const checkPalindrome = (str) => {
//   var revName = "";
//   revName = str
//     .split("")
//     .map((item) => item)
//     .reverse()
//     .join("");
//   console.log(revName);
//   if (revName === str) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };
// checkPalindrome("racecar");
// checkPalindrome("pavan");
// checkPalindrome("pavap");

// const fizzBuzz = () => {
//   var output = "";
//   for (let i = 1; i <= 100; i++) {
//     output = i;
//     if (output % 3 === 0 && output % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (!(output % 3)) {
//       console.log("Fizz");
//     } else if (!(output % 5)) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzBuzz();

// const fizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     i % 3 === 0 && i % 5 === 0
//       ? console.log("FizzBuzz")
//       : !(i % 3)
//       ? console.log("Fizz")
//       : !(i % 5)
//       ? console.log("Buzz")
//       : console.log(i);
//   }
// };
// fizzBuzz();

// const fizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     i % 3 === 0 && i % 5 === 0
//       ? console.log("FizzBuzz")
//       : i % 3 === 0
//       ? console.log("Fizz")
//       : i % 5 === 0
//       ? console.log("Buzz")
//       : console.log(i);
//   }
// };
// fizzBuzz();

// var names = ["rishi", "pavan", "paramesh", "vijay", "mounika", "praveen"];

// function revArr() {
//   names.reverse().map((item) => {
//     console.log(`Mr.${item}`);
//   });
// }
// revArr(names);

// function revArr() {
//   var revArr = [];
//   for (let i = names.length - 1; i >= 0; i--) {
//     revArr = names[i];
//     console.log(revArr);
//   }
// }
// revArr(names);

// function revInt(int) {
//   var output = int.toString().split("").reverse().join("");
//   console.log(parseInt(output) * Math.sign(int));
// }

// revInt(-456789);

// function revInt(int) {
//   var output = int.toString();

// }

// revInt([45, 66, 56, 88]);

// var person = {
//   name: "Rishi",
//   age: 24,
//   hobbies: ["hacking", "singing", "playing guitar", "chess"],
//   location: "visakhapatnam",
// };
// var output = Object.values(person);

// console.log(output);
// function longestWord(sen) {
//   var wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//   var sorted = wordArr.sort(function (a, b) {
//     return b.length - a.length;
//   });

//   var longestWordinSen = sorted.filter(function (item) {
//     return item.length === sorted[0].length;
//   });
//   console.log(longestWordinSen);
//   // longestWordinSen.length === 1
//   //   ? console.log(longestWordinSen[0])
//   //   : console.log(longestWordinSen);
// }
// longestWord("Hey, This is Rishiii Kumar");

// const longestWord = (sen) => {
//   var wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//   var sortSen = wordArr.sort((a, b) => b.length - a.length);
//   var longestWordinSen = sortSen.filter(
//     (item) => item.length === sortSen[0].length
//   );
//   console.log(longestWordinSen);
// };
// longestWord("Hey, This is me Rishi Kumar");

// const products = [
//   { name: "iphone", type: "electronics", quantity: 10, price: 250 },
//   { name: "case", type: "Accessories", quantity: 15, price: 10 },
//   { name: "blanket", type: "home", quantity: 50, price: 45 },
//   { name: "air conditioner", type: "appliances", quantity: 5, price: 350 },
// ];

// var output = products.filter(
//   (product) => product.type === "home" && product.quantity > 49
// );
// console.log(output);
// var output = products.find((item) => item.type === "electronics");
// console.log(output);

// function Car(model) {
//   this.model = model;
// }

// var cars = [new Car("Buick"), new Car("Camaro"), new Car("Focus")];

// var output = cars.find((car) => car.model === "Camaro");
// console.log(output);

// function Field(value) {
//   this.value = value;
// }

// var userName = new Field("2cool");
// var password = new Field("my-password");

// var numbers = [20, 30, 56, 50];

// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// var numbers = [20, 30, 56, 50];

// var sum = 0;

// sum = numbers.reduce(function (sum, number) {
//   return sum + number;
// }, 0);
// console.log(sum);

// var nums = [2, 4, 7, 9];
// var sum = 0;

// sum = nums.reduce((sum, number) => sum + number, 0);

// // for (i of nums) {
// //   sum += i;
// // }śś
// console.log(sum);

// var years = [1997, 2003, 2008, 2012];

// var largest = years[0];
// var secondLargest = years[0];

// function checkLargestYear(years) {
//   years.forEach((year) => {
//     if (year >= largest) {
//       largest = year;
//     } else if (year > secondLargest) {
//       secondLargest = year;
//     }
//   });
// }
// checkLargestYear(years);
// console.log(largest);
// console.log(secondLargest);

// var years = [2001, 2005, 2021, 2009];

// var largest = years[0];
// var secondLargest = years[0];

// for (let i = 0; i < years.length; i++) {
//   if (years[i] >= largest) {
//     largest = years[i];
//   } else if (years[i] > secondLargest) {
//     secondLargest = years[i];
//   }
// }
// console.log(largest);
// console.log(secondLargest);

// function longestWord(sen) {
//   var wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//   var sorted = wordArr.sort((a, b) => b.length - a.length);

//   var longestWord = sorted.filter((word) => word.length === sorted[0].length);
//   console.log(longestWord);
// }
// longestWord("Hey this is me Rishi Kumar");

// var a = 20;
// var b = 30;

// var c;

// c = a;   c = 20;
// a = b;   a = 30;
// b = c;   b = 20;

// console.log(a, b);

// var chunkedArr = [];

// var arr = [1, 2, 3, 4, 5, 6, [7]];
// function chunkArr(arr, len) {
//   var i = 0;
//   while (i < arr.length) {
//     chunkedArr.push(arr.slice(i, i + len));
//     i += len;
//   }
//   chunkedArr;
// }
// chunkArr([1, 2, 3, 4, 5, 6, [7]], 2);
// console.log(chunkedArr);

// function checkLongestWord(sen) {
//   var wordArr = sen.match(/[A-Za-z0-9]+/g);
//   console.log(wordArr);
//   var sorted = wordArr.sort((a, b) => b.length - a.length);

//   var longestWord = sorted.filter((word) => word.length === sorted[0].length);

//   console.log(longestWord);
// }
// checkLongestWord("Hey Darling, abcdefg How are you");

// var details = [
//   { name: "Rishi", age: 18, gender: "male" },
//   { name: "Vijay", age: 16, gender: "male" },
//   { name: "Mounika", age: 23, gender: "female" },
//   { name: "kumari", age: 23, gender: "female" },
//   { name: "Paramesh", age: 14, gender: "male" },
// ];

// var profNames = details.map((user) => {
//   //   console.log(user);
//   if (user.gender == "male") {
//     return { ...user, name: "Mr. " + user.name, age: user.age + 1 };
//   } else if (user.gender == "female") {
//     return { ...user, name: "Ms. " + user.name };
//   }
// });
// // console.log(profNames);

// var addCat = profNames.map((detail) => {
//   if (detail.age >= 18) {
//     return { ...detail, category: "Major" };
//   } else {
//     return { ...detail, category: "Minor" };
//   }
// });
// // console.log(addCat);
// var addRank = addCat.map((person) => {
//   return person.age;
// });

// var sorted = addRank.sort((a, b) => b - a);
// var output = addCat.map((rank) => {
//   if (rank.age >= sorted[0]) {
//     return { ...rank, ranked: "Leader" };
//   } else {
//     return rank;
//   }
// });

// console.log(output);

// console.log(details);

// var movies = [
//   {
//     name: "Bahubali",
//     year: 2016,
//     hero: "prabhas",
//   },
//   {
//     name: "Shivam",
//     year: 2018,
//     hero: "ram",
//   },
// ];

// var output = movies.map((movie) => {
//   if (movie.name === "Shivam") {
//     return { ...movie, heroin: "Rashikanna" };
//   } else {
//     return movie;
//   }
// });

// console.log(output);

// var movie = {
//   name: "Shivam",
//   year: 2018,
//   hero: "ram",
// };
// var add = "";
// console.log(movie["year"].toString().split(""));

// function checkNum(n) {
//   !(n % 2) ? console.log("even") : console.log("odd");
// }
// checkNum(12);

// const nums = [20, 10, 50, 30, 10, 40, 50, 10, 20, 90];
// var repeatedNums = [];
// var counts = {};
// function checkRepeated(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (counts[nums[i]]) {
//       counts[nums[i]] += 1;
//     } else {
//       counts[nums[i]] = 1;
//     }
//   }
// }
// checkRepeated(nums);
// console.log(counts);

// var details = [
//   { name: "Rishi", age: 18, gender: "male" },
//   { name: "Vijay", age: 16, gender: "male" },
//   { name: "Mounika", age: 23, gender: "female" },
//   { name: "kumari", age: 25, gender: "female" },
//   { name: "Paramesh", age: 14, gender: "male" },
// ];

// var newDetails = [];

// var profNames = details.map((user) => {
//   return user.gender == "male"
//     ? { ...user, name: "Mr. " + user.name }
//     : { ...user, name: "Ms. " + user.name };
// });

// var catUpdate = profNames.map((cat) => {
//   return cat.age >= 18
//     ? { ...cat, category: "Major" }
//     : { ...cat, category: "Minor" };
// });

// var agesArr = catUpdate.map((userAge) => {
//   return userAge.age;
// });
// var sortedAges = agesArr.sort((a, b) => b - a);

// var rankedUser = catUpdate.map((rank) => {
//   if (rank.age === sortedAges[0]) {
//     return { ...rank, ranked: "Leader" };
//   } else {
//     return { ...rank };
//   }
// });

// newDetails = { ...rankedUser };

// console.log(newDetails);

// var nums = [1, 2, 3, 4, 5];

// var add = nums.reduce((acu, num) => {
//   return acu + num;
// });
// console.log(add);

// var sorted = nums.sort((a, b) => {
//   return b - a;
// });
// console.log(sorted);

// var revArr = nums.reverse();
// console.log(revArr);

// nums.unshift(0);
// nums.pop();
// nums.shift();
// var removed = nums.filter((num) => {
//   return num !== 4;
// });
// console.log(removed);

// var names = ["rishi", "pavan", "vijay", "paramesh", "praveen", "mounika"];

// var revStr = names.reverse();
// console.log(revStr);

// var value = "vijay";
// var remStr = revStr.filter((name) => {
//   return name !== value;
// });
// console.log(remStr);

// names.forEach((name) => {
//   return console.log(name);
// });

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
// var reverse = [];
// for (let i = names.length - 1; i >= 0; i--) {
//   reverse = names[i];
//   console.log(reverse);
// }

// var str = "pavan";
// var arrStr = str.split("").reverse().join("");
// console.log(arrStr);

// var name = "rishi";
// name[0] = "R";

// console.log(name);

// for (let i = 0; i <= 1; i++) {
//   console.log(i);
// }

// var output = "";
// function revStr(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     output += str[i];
//   }
//   console.log(output);
// }
// revStr("pavan");

// function revStr(str) {
//   var output = str.toString().split("").reverse().join("");

//   console.log(parseInt(output));
// }
// revStr(12345);

// function palindrome(str) {
//   var splitted = str.split("").reverse().join("");
//   if (str == splitted) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindrome("racecar"));
// console.log(palindrome("pavan"));
// console.log(palindrome("pop"));

// function printTable(n, m) {
//   for (let i = 1; i <= m; i++) {
//     var table = `${n} x ${i} = ${n * i}`;
//     console.log(table);
//   }
// }
// printTable(4, 12);

var years = [2003, 2021, 2006, 2005, 1997];

var largest = years[0];
var secondLargest = years[0];

for (let i = 0; i <= years.length; i++) {
  if (years[i] > largest) {
    largest = years[i];
  } else if (years[i] > secondLargest && years[i] < largest) {
    secondLargest = years[i];
  }
}

console.log(largest);
console.log(secondLargest);
