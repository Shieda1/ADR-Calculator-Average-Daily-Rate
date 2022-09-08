// https://www.omnicalculator.com/finance/adr

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const averagedailyrateRadio = document.getElementById('averagedailyrateRadio');
const roomsrevenueearnedRadio = document.getElementById('roomsrevenueearnedRadio');
const numberofroomssoldRadio = document.getElementById('numberofroomssoldRadio');

let averagedailyrate;
let roomsrevenueearned = v1;
let numberofroomssold = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

averagedailyrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Rooms revenue earned';
  variable2.textContent = 'Number of rooms sold';
  roomsrevenueearned = v1;
  numberofroomssold = v2;
  result.textContent = '';
});

roomsrevenueearnedRadio.addEventListener('click', function() {
  variable1.textContent = 'Average daily rate';
  variable2.textContent = 'Number of rooms sold';
  averagedailyrate = v1;
  numberofroomssold = v2;
  result.textContent = '';
});

numberofroomssoldRadio.addEventListener('click', function() {
  variable1.textContent = 'Average daily rate';
  variable2.textContent = 'Rooms revenue earned';
  averagedailyrate = v1;
  roomsrevenueearned = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(averagedailyrateRadio.checked)
    result.textContent = `Average daily rate = ${computeaveragedailyrate().toFixed(2)}`;

  else if(roomsrevenueearnedRadio.checked)
    result.textContent = `Rooms revenue earned = ${computeroomsrevenueearned().toFixed(2)}`;

  else if(numberofroomssoldRadio.checked)
    result.textContent = `Number of rooms sold = ${computenumberofroomssold().toFixed(2)}`;
})

// calculation

function computeaveragedailyrate() {
  return Number(roomsrevenueearned.value) / Number(numberofroomssold.value);
}

function computeroomsrevenueearned() {
  return Number(averagedailyrate.value) * Number(numberofroomssold.value);
}

function computenumberofroomssold() {
  return Number(roomsrevenueearned.value) / Number(averagedailyrate.value);
}