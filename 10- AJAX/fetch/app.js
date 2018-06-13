const fetch = require('node-fetch');
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url).then(function(data){
    console.log(data);
});