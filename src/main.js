const user = document.querySelector('#user');
const coin = document.querySelector('#coin');
const button = document.querySelector('#button');

let balance;

getBalances();

button.addEventListener("click", (e) => {
  nombre = coin.innerHTML.toLowerCase();
  coin.innerHTML = `${nombre}: ${balance[nombre]}`;
});

function getBalances() {
  fetch("https://server.duinocoin.com/balances.json")
    .then((result) => result.json())
    .then((output) => {
      console.log("Output: ", output);
      balance = output;
      button.disabled = false;
    })
    .catch((err) => {
      console.error(err);
      coin.innerHTML = "error";
      setTimeout(getBalances, 1000);
    });
}
