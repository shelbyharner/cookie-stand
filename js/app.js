'use strict'

console.log('Hello Cookie Lovers');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

console.log(hours);

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookiesSoldArray: [],
  dayStoreTotal: 0,
  // a method to calculate random number of customers per hour
  randomCustEachHour: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // a method to calculate and populate our number of cookies sold per hour array
  cookiesEachHour: function (){

  },
  // a method to render the list items
  render: function(){

  },
};

// seattle.render();
console.log(seattle.randomCustEachHour());


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