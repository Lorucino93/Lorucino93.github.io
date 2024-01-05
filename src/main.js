const user = document.querySelector('#user');
const coin = document.querySelector('#coin');
const button = document.querySelector('#button');

button.addEventListener("click", function(e) {
    coin.innerHTML = "pulsado"
    nombre = user.value;
    fetch('https://server.duinocoin.com/balances.json')
        .then(result => result.json())
        .then((output) => {
          console.log('Output: ', output);
          coin.innerHTML = `${nombre}: ${output[nombre]}`;
        })
        .catch(err => console.error(err));
})
