'use strict';

const booking = [];


const createBooking = (firstName, numberOfTickets = 1) => {

               var price = numberOfTickets * 2000;
               booking.push(firstName, numberOfTickets, price);
               console.log(booking);

}

let booker1 = createBooking("Jose", 4);


const flightNum = 'LH444';
const jonas = {
               name: "jonas",
               passport: 8492039582,
}

const checking = (flightName, passanger) => {

               flightName = "LH37486";
               if (passanger.passport === passanger.passport) {
                              alert("checked in");
               } else {

                              console.log("HAck");
                              alert("wrong passport");


               }
               console.log(flightName, passanger);




}
const passwordCreater = (person) => {
               var passportNumberCreater = Math.trunc(Math.random() * 1000000000);
               return (person.passport = passportNumberCreater);
}


passwordCreater(jonas);

checking(flightNum, jonas);


const UpperCaseLetter = (word) => {
               var [firstLetter, ...other] = word.split(' ');
               return [firstLetter.toUpperCase(), ...other].join(' ');
}

const transformer = (word, func) => {
               console.log(` original string ${word}`);
               console.log(`transformed string ${func(word)}`);
}

var js = `javascript is the best`;
transformer(js, UpperCaseLetter);



// fuinction inside functions

const greetingHandler = (intro) => {
               return (hobby) => {
                              return (` Hello ${intro} nice to meet you my hobby is  ${hobby}`);
               }
}

console.log(greetingHandler("Yamaguchi")("anime"));


// bind function 

const book = (bookname, author) => {
               console.log(bookname, author);
               alert(` ${bookname} ${author}`);
}

// basically in bind method there work is same as those method which you call but the name of the function is changed but there prototype is point to the same function
const marvel = book.bind();
marvel("capcomics", "JJ thompson");

book("capppy", "witv");