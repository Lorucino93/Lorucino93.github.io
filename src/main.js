const user = document.querySelector('#user');
const coin = document.querySelector('#coin');
const button = document.querySelector('#button');

const balance = null;

getBalances();

button.addEventListener("click", (e) => {
  coin.innerText = balance[user.innerText]
});

function getBalances() {
  const callBackPromise = fetch("https://server.duinocoin.com/balances.json");
  callBackPromise.then((result) => result.json())
    .then((output) => {
      console.log("Output: ", output);
      balance = output;
      button.disabled = false;
    })
    .catch((err) => {
      console.error(err);
      coin.innerHTML = "error";
    });
}