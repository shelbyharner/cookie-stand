'use strict';

console.log('Hello Cookie Lovers');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// console.log(hours);

let cookieTable = document.getElementById('cookie-table');
const allLocations = [];

function StoreLocation(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesSoldArray = [];
  this.cookieTotal = 0;
  allLocations.push(this);
}

StoreLocation.prototype.randomCustEachHour = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

StoreLocation.prototype.cookiesEachHour = function () {
  let tr = document.createElement('tr');
  this.randomCustEachHour();
  for (let i = 0; i < hours.length; i++){
    this.cookiesSoldArray.push(Math.ceil(this.randomCustEachHour() * this.avgCookies));
    this.cookieTotal = this.cookieTotal + this.cookiesSoldArray[i];
  }
};

StoreLocation.prototype.render = function () {
  this.cookiesEachHour();
  let tr = document.createElement('tr');
  cookieTable.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);
  for (let i = 0; i < this.cookiesSoldArray.length; i++){
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldArray[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.cookieTotal;
  tr.appendChild(td);
};

let locationOne = new StoreLocation('Seattle', 23, 65, 6.3);
let locationTwo = new StoreLocation('Tokyo', 3, 24, 1.2);
let locationThree = new StoreLocation('Dubai', 11, 38, 3.7);
let locationFour = new StoreLocation('Paris', 20, 38, 2.3);
let locationFive = new StoreLocation('Lima', 2, 16, 4.6);

function renderAll() {
  for (let i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
    allLocations[i].renderSection();
  }
}

renderAll();
