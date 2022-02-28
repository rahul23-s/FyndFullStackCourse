// var my_name = "Rahul Sharma";
// var my_boolean = true;
// var my_number = 23;
// var my_char;
// var my_float = 2.3;
// var my_symbol = Symbol("This is a Symbol");
// var my_test = null;
// var myNAN = NaN;

// console.log(typeof my_name);
// console.log(typeof my_boolean);
// console.log(typeof my_number);
// console.log(typeof my_char);
// console.log(typeof my_float);
// console.log(typeof my_symbol);
// console.log(typeof my_test);
// console.log(typeof myNAN);

//Operators

//Assignment Operator

//If Else

// let age = 21;

// if (age >= 18) {
//   console.log("You can Vote!");
// } else {
//   console.log("You can't Vote!");
// }

// if (!null) {
//   console.log("Null Value");
// } else {
//   console.log("Not null Value");
// }

// if (NaN) {
//   console.log("Unreachable code");
// } else {
//   console.log("Not a Number");
// }

// if (!"") {
//   console.log("empty String");
// }

// let loading = true;

// if (loading) {
//   console.log("Page is Loading");
// } else {
//   console.log("Page has Loaded!");
// }

// console.log("10" + 20);
// console.log("10" - 20);
// console.log(10 + 20);
// console.log([] - NaN); //NaN
// console.log([10, 20] - [5, 10]);

// var a = [1, 2, 3, 4, 5, 6];
// var b = 3.14;
// console.log(typeof b);

// const subs2 = (a, b) => `After Substracting, The value is ${a - b}`;

// // console.log(subs2(50, 20));

// const cel2fah = (celsius) => {
//   let fahrenheit = 1.8 * celsius + 32;
//   return `Temperature in Fahrenheit will be ${fahrenheit}`;
// };

// // console.log(cel2fah(0));

// const knowTheWeekDay = (dayNum = "nothing") => {
//   let weekday;

//   switch (dayNum) {
//     case 0:
//       weekday = "Sunday";
//       break;
//     case 1:
//       weekday = "Monday";
//       break;
//     case 2:
//       weekday = "Tuesday";
//       break;
//     case 3:
//       weekday = "Wednesday";
//       break;
//     case 4:
//       weekday = "Thursday";
//       break;
//     case 5:
//       weekday = "Friday";
//       break;
//     case 6:
//       weekday = "Saturday";
//       break;
//     case "nothing":
//       console.log("You forgot to enter any Number");
//       return;

//     default:
//       weekday = "No such day for that corresponding number!";
//       console.log(weekday);
//       return;
//   }

//   console.log(`Today is ${weekday}`);
// };

// knowTheWeekDay(-5);

// let array3 = [1, 2, 3, 4, 5, 6, 7, 8];

// let filteredAndSorted = array3
//   .filter((item) => item >= 5)
//   .sort((a, b) => a - b);

// console.log(filteredAndSorted);

// console.log(array3.reduce((acc, item) => acc + item, 10));

// let studentData = [
//   {
//     name: "Rahul",
//     favGame: "Valorant",
//     rank: "Expert",
//     randomNumber: 7,
//   },
//   {
//     name: "Mayank",
//     favGame: "Sonic",
//     rank: "Pro",
//     randomNumber: 3,
//   },
//   {
//     name: "Alok",
//     favGame: "Mario",
//     rank: "Rookie",
//     randomNumber: 8,
//   },
//   {
//     name: "Satvik",
//     favGame: "Ludo",
//     rank: "Master",
//     randomNumber: 5,
//   },
//   {
//     name: "Deepak",
//     favGame: "PUBG",
//     rank: "Conquerer",
//     randomNumber: 12,
//   },
// ];

// let result = [];
// studentData
//   .sort((a, b) => a.randomNumber - b.randomNumber)
//   .forEach((item) => {
//     let obj = { randomNumber: item.randomNumber, name: item.name };
//     result.push(obj);
//   });
// console.log(result);

let users = [
  {
    id: 1,
    name: "Rahul",
    leaves: [
      {
        id: 1,
        reason: "Sick",
        dates: ["2022-02-02", "2022-02-08"],
      },
      {
        id: 2,
        reason: "Out Of Station",
        dates: ["2022-02-10", "2022-02-15", "2022-02-22"],
      },
    ],
  },
  {
    id: 2,
    name: "Rishabh",
    leaves: [
      {
        id: 3,
        reason: "Family Event",
        dates: ["2022-01-23", "2022-02-08", "2022-02-28"],
      },
    ],
  },
];

let lowerDate = "2022-01-01";
let upperDate = "2022-02-25";
let d = new Date();
// let defPara = ;

// console.log(typeof defPara);

const getLeavesInRange = (lower, upper = d.toISOString().substring(0, 10)) => {
  let filteredUsers = users.map((item) => {
    return {
      id: item.id,
      name: item.name,
      leaves: item.leaves.map((leave) => {
        return leave.dates.filter(
          (i) =>
            new Date(lower) <= new Date(i) && new Date(upper) >= new Date(i)
        );
      }),
    };
  });
  // return filteredUsers.filter((user) =>
  //   user.leaves[0].length ? user.leaves.dates.length != 0 : false
  // );
  return filteredUsers;
};

console.log(getLeavesInRange(lowerDate));
