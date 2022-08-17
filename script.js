const api = {
  endpoint: "https://api.openweathermap.org/data/2.5/",
  key: "62ec8868273035b80fb16c0e9f6eddeb" }

const input = document.querySelector('#input');
input.addEventListener('keypress', enter);

function enter(e) {
  if (e.keyCode === 13) {
    getInfo(input.value);
  }
}

async function getInfo(data) {
  const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
  const result = await res.json();
  console.log(result)
  displayResult(result);
}

function displayResult(result) {
let city = document.querySelector('#city');
city.textContent = `${result.name}, ${result.sys.country}`;

let temperature = document.querySelector('#temperature');
temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

let feelslike = document.querySelector('#feelslike');
feelslike.innerHTML = `Feels like: ${Math.round(result.main.feels_like)}<span>°</span>`;
}