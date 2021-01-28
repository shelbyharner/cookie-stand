'use strict'

console.log('Hello Cookie Lovers');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

console.log(hours);

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  // a method to calculate random number of customers per hour
  randomSeattleCust: function (min=this.min, max=this.max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random() * ((max - min + 1) + min));
    let customers = `${randomNum} customers per hour.`
    return customers; 
  },
  // a method to calculate and populate our number of cookies sold per hour array
  // a method to render the list items
};

seattle.randomSeattleCust();
console.log(seattle.randomSeattleCust());

// let tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
// };

// let dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
// };

// let paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
// };

// let lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
// };