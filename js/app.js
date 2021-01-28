'use strict'

console.log('Hello Cookie Lovers');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

console.log(hours);

let seattleList = document.getElementById('Seattle');

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,

  // a method to calculate random number of customers per hour
  randomCustEachHour: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  // a method to calculate and populate our number of cookies sold per hour array
  cookiesSoldArray: [],
  cookieTotal: 0,
  cookiesEachHour: function (){
    this.randomCustEachHour();
    for (let i = 0; i < hours.length; i++){
      this.cookiesSoldArray.push(Math.ceil(this.randomCustEachHour() * this.avgCookies));
    }
  },

  // a method to render the list items
  render: function(){
    this.cookiesEachHour();
    for (let i = 0; i < this.cookiesSoldArray.length; i++){
      this.cookieTotal = this.cookieTotal + this.cookiesSoldArray[i];
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${(this.cookiesSoldArray[i])} cookies`;
      seattleList.appendChild(li);
    }
    let totalDaySales = document.createElement('li');
    totalDaySales.textContent = `Total: ${this.cookieTotal} cookies`;
    seattleList.appendChild(totalDaySales);
  },
};

// console.log(seattle.randomCustEachHour());
// console.log(seattle.cookiesEachHour());
seattle.render();


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