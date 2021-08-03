// concat is used for adding 2 array elements and returns a new array

// var name1 = "rishi" || ["rishi"];
// var name2 = "pavan" || ["pavan"];
// console.log(name1 + " " + name2);

//Join is used for if you want to join an array of elements with any specific symbol sideby side then we use join method
// (or)
// Join will add all elements in an array to a string

// var names = ["vijay", "Rishi", "paramesh", "june3", "January14"];

// var output = names.join();
// console.log(output);

// var names = ["vijay", "Rishi", "paramesh", "june3", "January14"];

// names.pop();
// output it will take out the last element of an array and returns the remain of elemnts.

// names.shift();
//output it will take out the first element of an array and returns the remain array of elemnts.

// names.unshift("harish");
//output it will add a given string in to array as a first element and returns the remain array of elemnts.

// names.push("harish");
// console.log(names);
// output it will add a given string to the array as a  last element.

// var s = names.slice(0, 3);
// names.splice(3, 1);
// console.log(names);

// var letters = [];

// var word = "racecar";
// var rword = "";

// for (let i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }
// // letters = word.split("");

// // for (let i = word.length - 1; i >= 0; i--) {
// //   rword += word[i];
// // }

// rword = letters.reverse();
// console.log(rword);

// var names = ["rishi", "pravEen", "vijAy", "paRaMesh"];

// var ki = names.map((name) => {
//   return name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
// });
// console.log(ki);

// var names = ["vijay", "Rishi", "paramesh", "june3", "January14"];

// delete names[1];
// delete names[names.length - 1];

// console.log(names);

// names.map((name) => console.log(name));

// var b = "pavan";

// var t = b.charAt(0).toUpperCase();

// var op = names.map((name) => {
//   return name.charAt(0).toUpperCase() + name.slice(1);
// });

// console.log(op.join());

// names = ["pavan", ...names];
// names = [...names, "kumar"];
// names = ["pavan", ...names, "kumar"];
// console.log(names);

// var names = ["vijay", "Rishi", "paramesh", "june3", "January14"];

// var newNames = [...names, "pavan"];
// console.log(newNames);

// names.splice(3, 0, "mounika");

// console.log(names);

// var boyNames = ["vijay", "Rishi", "paramesh"];

// var girlNames = ["june3", "January14", "mounika"];

// var all = boyNames.concat(girlNames);
// // var all = boyNames.splice().concat(girlNames);

// console.log(all);
