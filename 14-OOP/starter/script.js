'use strict';

const Person = function (firstName, birthDate) {
               this.firstName = firstName;
               this.birthDate = birthDate;
}

// const practice = Person("Kane", 334);
// console.log(practice);

const thomas = new Person("Thomas", 1989);
console.log(thomas);

const yamaguchi = new Person("Yamaguchi", 1992);
console.log(yamaguchi);

console.log(Person.prototype);


// inherited prototype
Person.prototype.caclAgeMethod = function () {
               var calc = 2039 - this.birthDate;
               console.log(calc);
}

Person.prototype.introduction = function () {
               return (`the defination of protype inheritance ${Person.prototype}`) // basically prototype is like to show the skeleton structure of class or constructor methods
}

yamaguchi.caclAgeMethod();
console.log(yamaguchi.introduction());


// prototype chain 
const x = document.querySelector('h1');
console.log(x.__proto__.__proto__.__proto__.__proto__);
Person.prototype === yamaguchi.__proto__ ? console.log("correct") : console.log("false");


// Person.prototype ==  __proto__


// challange 1 

// create car constructor 
// create accelerate method by increase speed = 10; 
// create break method by decrease speed = -5;BMW.__proto__



class BicycleShop {

               constructor(firstName, lastName) {
                              this.firstName = firstName;
                              this.lastName = lastName;

                              console.log(`Inforamation regarding Buyer 
                ${this.firstName} 
               ${this.lastName}`);
               }

               tire() {
                              console.log("Add tires")
               }

               brakes() {
                              console.log("Add More Breaks")
               }
               gear() {
                              console.log("add gears more")
               }


}

class Mechenic extends BicycleShop {
               constructor(firstName, lastName, partWanted) {

                              super(firstName, lastName);

                              this.partWanted = partWanted;
                              console.log(this.partWanted);
               }


               partBox() {
                              var parts = ["brack", " stakes"];
                              console.log(parts);
               }
}


const repairMan = new Mechenic("Excel", "Blaze", "waltBrake");
console.log(` Mechenic classs which inherit Bycycle ${repairMan.brakes()} `);
repairMan.tire();

const BicycleShopObjectModel = {

               info(name, lastName) {
                              console.log(`name  ${name}
                              lastName : ${lastName}`);
               },

               tire() {
                              console.log("Add tires")
               },

               brakes() {
                              console.log("Add More Breaks")
               },
               gear() {
                              console.log("add gears more")
               },


}


const vaibhav = new BicycleShop("Vaibhav", "Verma");
vaibhav.tire();
vaibhav.gear();
vaibhav.brakes();


const micheal = Object.create(BicycleShopObjectModel);
micheal.info
micheal.tire();
micheal.brakes();
micheal.info("michael", "sen");




// inheritance 

const Car = function (speed) {
               this.speed = speed;
}

Car.prototype.accelerate = function () {
               console.log(this.speed += 10);

}

Car.prototype.break = function () {
               console.log(this.speed -= 5);

}

const BMW = new Car(120);
console.log(` BMW speed is ${BMW} `);
console.log(`After accelereate speed is ${BMW.accelerate()}`);
console.log(`after brake speed is ${BMW.break()}`);
BMW.accelerate();




const Mechanics = function (firstName, speed) {

               Car.call(this, speed);
               this.firstName = firstName;

}

Mechanics.prototype = Object.create(Car.prototype); // same as like Mechanics extends Car they  basically save the Mechanics prototype to car prototype so they point 


Mechanics.prototype.carName = function () {

               console.log(this.firstName);
}

const test = new Mechanics("TESLA", 360);
test.carName();
test.accelerate();