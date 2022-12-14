const api = {
  endpoint: "https://api.openweathermap.org/data/2.5/",
  key: "62ec8868273035b80fb16c0e9f6eddeb" }

const input = document.querySelector('#input');
input.addEventListener('keydown', enter);

function enter(e) {
  if(e.keycode === 13) {
    getInfo(input.value);
  }
}

async function getInfo(dat) {
  const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`)
  const result = await res.json();
  displayResult(result);
}

function displayResult(result) {

}