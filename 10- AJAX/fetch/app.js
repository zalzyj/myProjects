const fetch = require('node-fetch');
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
.then(handleErrors)
.then(function(request){
    console.log("everything is fine!");
    return request.json();
}).then(function(data){
    console.log(data.bpi.USD.rate);
})
.catch(function(err){
    console.log("There is an error: ", err);
});

function handleErrors(request){
    if (!request.ok){
        throw Error(request.status);
    }
    return request;
}