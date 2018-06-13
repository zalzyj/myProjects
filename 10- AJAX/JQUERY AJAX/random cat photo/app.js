
$("#btn").click(function(){
    $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler",
        dataType: "json"    
    })
    .done(function(msg){
        console.log(msg);
        $("#bacon").text(msg[0]);
    })
    .fail(function(err){
        console.log("There is an error!");
    });
});






/* $.ajax({
    method: "POST",
    url: "some.php",
    data: { name: "John", location: "Boston" }
  })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
    }); */