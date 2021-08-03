// var names = { name: ["vijay", "Rishi", "paramesh", "june3", "January14"] };

// var ages = [21, 56, 3, 25, 36, 24];

// var t = names["name"].push("kumar");

// console.log(names.name.slice().concat(ages));

// var details = [
//   { name: "Rishi", age: 18, gender: "male" },
//   { name: "Vijay", age: 16, gender: "male" },
//   { name: "Mounika", age: 23, gender: "female" },
//   { name: "kumari", age: 23, gender: "female" },
//   { name: "Paramesh", age: 14, gender: "male" },
// ];

// var t = details.map((det) => {
//   return { ...det, name: "ji" + det.name };
// });

// console.log(t);

// var person = { name: "Rishi", age: 24, gender: "male" };
// console.log(person);

// var person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`my name is ${this.name}, Am I human ${this.isHuman}`);
//   },
// };

// var j = Object.create(person);

// j.name = "Rishi";
// j.isHuman = true;

// j.printIntroduction();

// var person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`Hi my name is ${this.name} and i'm human ${this.isHuman}`);
//   },
// };

// var t = Object.create(person);

// t.name = "rishi";
// t.isHuman = true;
// t.printIntroduction();

// var job = {
//   position: "Cashier",
//   type: "hourly",
//   isAvailable: true,
//   showDetails() {
//     const accepting = this.isAvailable
//       ? "is accepting applications"
//       : "is currently not accepting applications";
//     console.log(
//       `The ${this.position} position is ${this.type} and ${accepting} `
//     );
//   },
// };

// const posName = Object.create(job);

// posName.position = "Manager";
// posName.isAvailable = false;
// posName.showDetails();

// var employees = {
//   position: "cashier",
//   secretary: "Pam",
//   sales: "Jim",
//   accountant: "Oscar",
// };

// // var par = Object.entries(employees).forEach((emp) =>
// //   console.log(`${emp[0]} : ${emp[1]}`)
// // );

// // var val = Object.values(employees);
// var output = Object.keys(employees).forEach((employee) => {
//   let value = employees[employee];
//   console.log(`${employee} : ${value}`);
// });

// // Object.keys(employees).forEach((e) => {
// //   let val = employees[e];
// //   console.log(`${e}: ${val}`);
// // });

// var emp = Object.keys(employees).length;

// console.log(emp);

// var t = Object.values(employees);
// // console.log(t);

// const entries = Object.entries(employees);

// // console.log(entries);

// entries.forEach((entry) => {
//   let key = entry[0];
//   let value = entry[1];
//   console.log(`${key} : ${value}`);
// });

// const name = {
//   firstName: "Pavan",
//   lastName: "Kumar",
// };

// const details = {
//   job: "Web developer",
//   employer: "Planet Express",
// };

// const character = Object.assign(name, details);
// console.log(character);

// Object.keys(character).forEach((char) => {
//   let value = character[char];
//   console.log(`${char} : ${value}`);
// });

// Object.entries(character).forEach((name) => {
//   let key = name[0];
//   let value = name[1];
//   console.log(`${key}: ${value}`);
// });

// const merge = Object.assign(character, employees);

// Object.keys(merge).forEach((key) => {
//   let value = merge[key];
//   console.log(`${key} : ${value}`);
// });

// var character = { ...name, ...details };
// var character = Object.assign(name, details);
// console.log(character);

// var employees = {
//   position: "cashier",
//   secretary: "Pam",
//   sales: "Jim",
//   accountant: "Oscar",
//   showDetails() {
//     console.log(
//       `Yes i'm a ${this.position} and my secratary is ${this.secretary} my salary is ${this.package}`
//     );
//   },
// };

// var add = { ...employees, salary: "10LPA" };

// console.log(add);

// // Object.freeze() method won't let access to override the object values and properties.

// var t = Object.freeze(employees);

// t.position = "Manager";

// t.package = "10LPA";

// t.showDetails();

// var t = Object.seal(employees);

// t.position = "Manager";
// t.package = "10LPA";
// t.showDetails();

// console.log(t);

// let john = {
//   firstName: "John",
//   lastName: "Doe",
//   mass: 42,
//   height: 1.68,
//   checkBMI() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// let mark = {
//   firstName: "Mark",
//   lastName: "Armstrong",
//   mass: 53,
//   height: 1.72,
//   checkBMI() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// john.checkBMI() > mark.checkBMI()
//   ? console.log(
//       `${john.firstName} ${
//         john.lastName
//       } has BMI of ${john.checkBMI()} it is more than Mark's BMI of ${mark.checkBMI()}`
//     )
//   : console.log(
//       `${mark.firstName} ${
//         mark.lastName
//       } has BMI of ${mark.checkBMI()} it is more than John's BMI of ${john.checkBMI()}`
//     );
