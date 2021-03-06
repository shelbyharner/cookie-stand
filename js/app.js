'use strict';

console.log('Hello Cookie Lovers');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// console.log(hours);

let cookieForm = document.querySelector('form');
let cookieTable = document.getElementById('cookie-table');
let tableHeader = document.getElementById('table-header');
let tableFooter = document.getElementById('table-footer');
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

function renderHeader() {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++){
    let td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = 'Daily Store Totals';
  tr.appendChild(td);
  tableHeader.appendChild(tr);
}

// Help from TA Bryant for Lab 7 stretch goal
function getGrandTotal() {
  const grandTotal = new Array(hours.length + 1);
  grandTotal.fill(0);
  for (let i = 0; i < allLocations.length; i++){
    for (let j = 0; j < allLocations[i].cookiesSoldArray.length; j++){
      grandTotal[j] += allLocations[i].cookiesSoldArray[j];
      grandTotal[grandTotal.length - 1] += allLocations[i].cookiesSoldArray[j];
    }
  }
  return grandTotal;
}

function renderFooter() {
  let grandTotal = getGrandTotal();
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);
  for (let i = 0; i < grandTotal.length; i++){
    let td = document.createElement('td');
    td.textContent = grandTotal[i];
    tr.appendChild(td);
  }
  tableFooter.appendChild(tr);
}

function handleSubmit(event) {
  event.preventDefault();

  let locationName = event.target.locationname.value;
  let minimumCustomer = +event.target.minimumcustomer.value;
  let maximumCustomer = +event.target.maximumcustomer.value;
  let averageCookieSale = +event.target.averagecookiesale.value;

  let newStore = new StoreLocation(locationName, minimumCustomer, maximumCustomer, averageCookieSale);
  newStore.render();
  tableFooter.removeChild(tableFooter.lastChild);
  renderFooter();
}

const locationOne = new StoreLocation('Seattle', 23, 65, 6.3);
const locationTwo = new StoreLocation('Tokyo', 3, 24, 1.2);
const locationThree = new StoreLocation('Dubai', 11, 38, 3.7);
const locationFour = new StoreLocation('Paris', 20, 38, 2.3);
const locationFive = new StoreLocation('Lima', 2, 16, 4.6);

function renderAll() {
  for (let i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
}

renderAll();
renderHeader();
renderFooter();

cookieForm.addEventListener('submit', handleSubmit);