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
