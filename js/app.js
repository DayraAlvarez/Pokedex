//Obtener valor de  input
function getPokemonName (){
  var pokemonName = document.getElementById('searchPokemon').value;
  console.log('searchPokemon');
}
//Agregar accion al boton de buscar 
function searchPokemon (){
  searchButton.addEventListener
}

//Obtener nombre de pokemons e imprimir en DOM
function loadPokemons (){
  $.ajax({
    url:'https://pokeapi.co/api/v2/pokemon',
    crossDomain: true,
    type:'GET',
  })
  .done(function(resp){
   console.log(resp);
  var pokemons = resp.results;
  console.log(pokemons);
  for ( var i=0; i<pokemons.length; i++){
    var name = pokemons[i].name;
    var pokemonRef = pokemons[i].url;
    console.log(name);
    /*("#pokedex").append(document.createElement("p" + name));*/
    $("#pokedex").append("<div class='eachPokemon' data-url='"+pokemonRef+"'>"+name+"</div>");
    /*var pokemonIdCard = document.createElement("p");*/
    /*pokemonIdCard.appendChild(name);*/
    /*var pokemonId = document.createTextNode(name)*/
    /*$("#pokedex").append(armarTemplate(name));
    var armarTemplate = function(name){
    var pokemonIdCard = "<div class='elemento'>"+name+"<div>"
    return pokemonIdCard;
   }*/
 
  }
  $(".eachPokemon").click(function(e){
      console.log(e.target.dataset.url);
      console.log("funciona"); 
      $.ajax({
        url: e.target.dataset.url,
        crossDomain: true,
        type: "GET"
      })
      .done(function(resp){
       console.log(resp);
      })
      var pokemonPhoto 
    });
  })
 

}

var pokemonName = []

loadPokemons();



/*Giphy

$(document).ready(function(){
    var dibujarGifs=function(data){
     var gif ="";
     var url = "";
     data.forEach(function(element) {
         gif=element.images.downsized_large.url;
         url=element.bitly_gif_url;
         $("#elementos").append(armarTemplate(gif,url));
     });
   }
 
 var armarTemplate = function(gif,url){
     var t = "<div class='elemento'><img src='"+gif +"'/><a href='"+url+"'>ver mas</a></div"
     return t;
 }
 
 var ajaxGif= function(gif){
     $.ajax({
         url: 'https://api.giphy.com/v1/gifs/search',
         type:'GET',
         datatype:'json',
         data:{
             q:gif,
             api_key:'itfa6ajXCMJjPzyIiOS8GcKiQsi6Dwl8'

         }
     })
     .done(function(response){
         console.log(response);
         dibujarGifs(response.data);
     })
     .fail(function(){
         console.log("error");
     })
 }
 
 $("#buscar-gif").click(function(event){
     console.log("entro");
     $("#elementos").empty();
     var gif=$("#gif-text").val();
     ajaxGif(gif);
     });
 });*/



/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    document.getElementById("demo").innerHTML = xhttp.responseText;
    }
    };
xhttp.open("GET", "filename", true);
xhttp.send();*/


