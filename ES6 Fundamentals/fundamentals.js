"use strict";

// let fd = true;
// if (fd){
//                console.log("i fan of ES6 ")
// }

const fruitPeices = (size) => {
  return size * 4;
};

const fruitProcessor = (oranges, watermellon) => {
  const orangePeices = fruitPeices(oranges);

  const watermellonPeices = fruitPeices(watermellon);

  const juice = ` juice contains orangePeices ${orangePeices} and watermellon peices ${watermellonPeices} `;

  return juice;
};

console.log(fruitProcessor(4, 18));

// challlange

// create calcAvg function to calculate average

// another functoin to check the winner

const calcAvg = (match1, match2, match3) => {
  return (match1 + match2 + match3) / 3;
};

const winner = (team1, team2) => {
  if (team1 >= 2 * team2) {
    console.log("winner");
  }
  console.log("no one win");
};

const paolo = calcAvg(23, 34, 34);
const trwaa = calcAvg(43, 34, 33);

console.log("team avg paolo ", paolo, "and trawwa", trwaa);

winner(paolo, trwaa);

// let john_BMI , schew_BMI;

// const calcBMI=(kg , foot)=>{
//               var m = .324*foot
//                return (kg/(m*m));
// }

// john_BMI = calcBMI(70 , 5.3);
// console.log(john_BMI);

// schew_BMI = calcBMI(69, 5.4);

// if (john_BMI > schew_BMI){
//                if (john_BMI > 25){
//                               console.log("john is overweight")
//                }
//                console.log("john bmi is greater then schew" , john_BMI)
// }

// console.log(`${john_BMI} is greater then ${schew_BMI} `)

const object = {
  firstName: "john",
  lastName: "schertzwehn",
  email: "johnacscreh6tz@gmail.com",
  friends: ["michael", "kenny", "sasha"],
  job: "frontend-dev",
  calculate: (size) => {
    return size;
  },
};

// john has 3 friends and there best friends is michael

const solve = prompt(
  `${object.firstName} has ${object.friends.length} friends and there best friends is ${object.friends[0]}`
);
console.log(solve);

object["city"] = "tokyo";
console.log(object);

console.log(object.calculate(5));

//BUG
