'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  rname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  MixFood: (pizza, garlic_bread) => {
    return [restaurant.mainMenu[pizza], restaurant.starterMenu[garlic_bread]]
  },

  delivery: ({
    starterIndex,
    mainIndex = 0,
    time = '20:00',
    address,
  }) => {
    console.log(`order delivered ! ${starterIndex} at time ${time} address ${address}`);
  },
  cakeMaker: (...sweetIngredients) => {
    console.log("our sweet cake which is made up of ", sweetIngredients);
  }

};

restaurant.delivery({
  time: "22:30",
  address: "23 block saitama ",
  starterIndex: restaurant.starterMenu[1],
  mainIndex: 0,
});


// taking values to the starter menu
let [focaccia, , garlicBread] = restaurant.starterMenu;
console.log(focaccia, garlicBread);

// let if you want to swapping the values without taking any variable but its to easy with the help of modern JS

[focaccia, garlicBread] = [garlicBread, focaccia];
console.log(`after swapping name of foccasia dish is${focaccia}   and the garlic bread is ${garlicBread}`);
console.log(
  restaurant.MixFood(1, 2));

/// nested destructuring   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],


const nestedDestrucutre = [1, 2, [6, 4]];

const [value1, , [value2, value3]] = nestedDestrucutre;
console.log(value1, value2, value3);


// object destructuring 

const {
  rname,
  openingHours,
  categories,
} = restaurant;

console.log(rname, openingHours, categories);

const {
  rname: restaurentName,
  openingHours: hours,
  categories: foodCatagories,
} = restaurant;
console.log(`taking the name of the objects name inside object Destructure variable rname      ${restaurentName} openingHours ${hours} catagories : ${foodCatagories}  `);
console.log(restaurentName, hours, foodCatagories);

// in object destructuring you have to assign the variable name as same as present in object otherwise it's not work because as you know object does not take any indexes they understand by the name of the value or heading 



/// spread Operator they take only elements of an array not whole strucutre of array

// lets create my hero acadmia team 
/* Yuga Aoyama 
Mina Ashido 
Tsuyu Asui
Mashiro Ojiro 
Hanta Sero 
Koji Koda

*/
// const options = () => {
//   return (` which options you want to choose 
//             1 : show class A 
//             2 : add student 
//             3 : delete Student`)
// }

let classA = Array("Yuga Aoyama ", "Mina Ashido", "Mashiro Ojiro ", "Hanta Sero ", "Koji Koda");

console.log(classA);

let classATopStudents = Array(...classA, "Bakugo ", "todoroki", "tsukuyomi", "midoriya", "lida");

console.log(...classA, "midoria");

let bool = true;




// let anyNo = prompt(`enter no`);

// while (bool) {



//   switch (anyNo) {
//     case 1: {
//       console.log(`students of class A are`, ...classA);
//     }

//     break;
//   case 2: {
//     let studentName = prompt(`Enter student name`);
//     classA = Array(studentName);
//     prompt("Student Added Succesfully");
//   }
//   break;

//   case 3: {
//     let removeStudent = prompt(` which student delete `);
//     classA.pop(removeStudent);
//     prompt(` removed  ${removeStudent}`)

//   }
//   break;
//   case 4: {
//     bool = false;
//   }
//   break;
//   }
// }


// in ES2018 ES9 now you can use spread operator in objects also 

const newRestaurent = {
  ...restaurant,
  founder: "Charle steeve",
  founding: "1894"
}
console.log(newRestaurent);


// the Rest Operators  which are created in left side they pack the elements in one container objects also 

const [a, b, ...packet] = [1, 2, 3, , 4, 5, 5, 6, 6, 7, 7, 7, 85, 5343, 2];
console.log(...packet);



const [...packet1] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...packet1);


const magicOfRestOperator = (...number) => {
  /* ...number = a[ 1/0 ]    */
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += number[i];
    console.log(sum);

  }
  return sum
}

console.log(magicOfRestOperator(1, 2, 3, 5, 5, 6, 7, 7, 4, 12, 3423));
console.log(magicOfRestOperator(1, 2, 3, 44, 3));

console.log(restaurant.cakeMaker("choclate", "cheese", "strawberry", "vanilla", "starch"));

// use rest operator when you want to pack multiple arrays , variables in one container it is very usefull for destructuring and infinite parameter arguments in function  
// use spread when you want to add only array elements or use that elements only

const arr = Array(1, 2, 4, 5, 7, 85, 4, 3, 54, 7, 53, 4, 3, 2, 5, 6, 3, 2, 6, 3, 12, 32);
const arr2 = Array(6, 6, 4, 3, 2, 54, 6, 34, 55435345);


console.log(arr);
console.log(...arr);


const [...packetTest] = [...arr, ...arr2];
const [...packetTest1] = [arr, arr2];
console.log(packetTest);
console.log(packetTest1);


// for of loop 

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu, ...restaurant.categories];
console.log(menu);

for (let [index, value] of menu.entries()) {
  console.log(`index ${index} value ${value}`);
}

console.log(...menu.entries());


// object manupulations 

const openDays = Object.keys(openingHours);
console.log(openDays);

const {
  open,
  close
} = openingHours.thu;
console.log(open, close);

for (let [key, {
    open,
    close
  }] of Object.entries(openingHours)) {
  console.log(` ${restaurant.rname}  is open in this days 
    ${key} time is ${open} to ${close} `)
}