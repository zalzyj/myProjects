var btn = document.querySelector("#btn");
var span = document.querySelector("#price");

btn.addEventListener("click",function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if (XHR.readyState == 4 &&XHR.status==200){
            var data = JSON.parse(XHR.responseText);
            var price = data.bpi.USD.rate;
            span.innerText = price +" USD";
        }
    }
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});