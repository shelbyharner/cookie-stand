'use strict'

console.log('Hello Cookie Lovers');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

console.log(hours);

let seattleList = document.getElementById('Seattle');
let tokyoList = document.getElementById('Tokyo');
let dubaiList = document.getElementById('Dubai');
let parisList = document.getElementById('Paris');
let limaList = document.getElementById('Lima');


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


let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,

  randomCustEachHour: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  cookiesSoldArray: [],
  cookieTotal: 0,
  cookiesEachHour: function (){
    this.randomCustEachHour();
    for (let i = 0; i < hours.length; i++){
      this.cookiesSoldArray.push(Math.ceil(this.randomCustEachHour() * this.avgCookies));
    }
  },

  render: function(){
    this.cookiesEachHour();
    for (let i = 0; i < this.cookiesSoldArray.length; i++){
      this.cookieTotal = this.cookieTotal + this.cookiesSoldArray[i];
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${(this.cookiesSoldArray[i])} cookies`;
      tokyoList.appendChild(li);
    }
    let totalDaySales = document.createElement('li');
    totalDaySales.textContent = `Total: ${this.cookieTotal} cookies`;
    tokyoList.appendChild(totalDaySales);
  },
};


let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,

  randomCustEachHour: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  cookiesSoldArray: [],
  cookieTotal: 0,
  cookiesEachHour: function (){
    this.randomCustEachHour();
    for (let i = 0; i < hours.length; i++){
      this.cookiesSoldArray.push(Math.ceil(this.randomCustEachHour() * this.avgCookies));
    }
  },

  render: function(){
    this.cookiesEachHour();
    for (let i = 0; i < this.cookiesSoldArray.length; i++){
      this.cookieTotal = this.cookieTotal + this.cookiesSoldArray[i];
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${(this.cookiesSoldArray[i])} cookies`;
      dubaiList.appendChild(li);
    }
    let totalDaySales = document.createElement('li');
    totalDaySales.textContent = `Total: ${this.cookieTotal} cookies`;
    dubaiList.appendChild(totalDaySales);
  },
};


let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,

  randomCustEachHour: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  cookiesSoldArray: [],
  cookieTotal: 0,
  cookiesEachHour: function (){
    this.randomCustEachHour();
    for (let i = 0; i < hours.length; i++){
      this.cookiesSoldArray.push(Math.ceil(this.randomCustEachHour() * this.avgCookies));
    }
  },

  render: function(){
    this.cookiesEachHour();
    for (let i = 0; i < this.cookiesSoldArray.length; i++){
      this.cookieTotal = this.cookieTotal + this.cookiesSoldArray[i];
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${(this.cookiesSoldArray[i])} cookies`;
      parisList.appendChild(li);
    }
    let totalDaySales = document.createElement('li');
    totalDaySales.textContent = `Total: ${this.cookieTotal} cookies`;
    parisList.appendChild(totalDaySales);
  },
};


let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,

  randomCustEachHour: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  cookiesSoldArray: [],
  cookieTotal: 0,
  cookiesEachHour: function (){
    this.randomCustEachHour();
    for (let i = 0; i < hours.length; i++){
      this.cookiesSoldArray.push(Math.ceil(this.randomCustEachHour() * this.avgCookies));
    }
  },

  render: function(){
    this.cookiesEachHour();
    for (let i = 0; i < this.cookiesSoldArray.length; i++){
      this.cookieTotal = this.cookieTotal + this.cookiesSoldArray[i];
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${(this.cookiesSoldArray[i])} cookies`;
      limaList.appendChild(li);
    }
    let totalDaySales = document.createElement('li');
    totalDaySales.textContent = `Total: ${this.cookieTotal} cookies`;
    limaList.appendChild(totalDaySales);
  },
};


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();