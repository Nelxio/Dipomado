
function traer() {
    fetch('https://lalocaracheo.ml/json/data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            // console.log(myJson["recomendadas"]);
            console.log(myJson["recomendadas"][1].imagen)

            for(var i = 0; i < Object.keys(myJson["recomendadas"]).length ; i++){

                var j =
                "<div class='col'>"+
                "<div class='col-12'>"+
                "<div class='pelicula'>"+
                "<div class='img'>"+
                "<img src='"+myJson["recomendadas"][i].imagen +"'>"+
                "<div class='offset-md-8' id='corazon'>"+
                "<img src='corazon.png'>"+
                "<p id='likes'>"+myJson["recomendadas"][i].likes +"</p>"+
                "</div>"+       
                "</div>"+
                "<div>"+
                "<p id='nombre'>"+myJson["recomendadas"][i].nombre +"</p>"+  
                "<p id='genero'>"+myJson["recomendadas"][i].genero +"</p>"+
                "</div>"+
                "</div>"+
                "</div> "+
                "</div>";
            
                 document.getElementById("pelicula1").innerHTML += j;          
            }
            
            for(var i = 0; i < Object.keys(myJson["nuevas"]).length ; i++){

                var j =
                "<div class='col'>"+
                "<div class='col-12'>"+
                "<div class='pelicula'>"+
                "<div class='img'>"+
                "<img src='"+myJson["nuevas"][i].imagen +"'>"+
                "<div class='offset-md-8' id='corazon'>"+
                "<img src='corazon.png'>"+
                "<p id='likes'>"+myJson["nuevas"][i].likes +"</p>"+
                "</div>"+       
                "</div>"+
                "<div>"+
                "<p id='nombre'>"+myJson["nuevas"][i].nombre +"</p>"+  
                "<p id='genero'>"+myJson["nuevas"][i].genero +"</p>"+
                "</div>"+
                "</div>"+
                "</div> "+
                "</div>";
            
                 document.getElementById("pelicula2").innerHTML += j;          
            }
        });
        
        
}




