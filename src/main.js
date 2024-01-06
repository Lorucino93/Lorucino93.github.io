const user = document.querySelector('#user');
const coin = document.querySelector('#coin');
const button = document.querySelector('#button');

button.addEventListener("click", function(e) {
    coin.innerHTML = "wait"
    nombre = user.value.toLowerCase();
    fetch('https://server.duinocoin.com/balances.json')
        .then(result => result.json())
        .then((output) => {
          console.log('Output: ', output);
          coin.innerHTML = `${nombre}: ${changeToTwoDecimalFloat(output[nombre])}`;
        })
        .catch(err => {
          console.error(err);
          coin.innerHTML = "error";
        });
})

function changeToTwoDecimalFloat(number) {
  return number.parseToFloat();
}