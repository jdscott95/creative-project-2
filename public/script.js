document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  try{
    const url = "https://pokeapi.co/api/v2/pokemon/" + value;
    fetch(url)
  .then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
let results = "";
results += '<img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + json.id +'.png" width = "80" heigth = "80" class = "center">';
results += '<h2>Pokemon name: ' + json.name + "</h2>";
results += '<p> Type(s): ';
for (let i=0; i < json.types.length; i++) {
results += json.types[i].type.name
if (i !== json.types.length - 1)
results += ", "
}
results += '<p> Moves: ';""
for (let i=0; i < json.moves.length; i++) {
results += json.moves[i].move.name
if (i !== json.moves.length - 1)
results += ", "
}
results += '<p> Abilities: ';
for (let i=0; i < json.abilities.length; i++) {
results += json.abilities[i].ability.name
if (i !== json.abilities.length - 1)
results += ", "
}
/*for (let i=0; i < json.weather.length; i++) {
results += '<img src="https://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/ class = "center">';
}
results += '<h2>' + json.main.temp + " &deg;F</h2>"
results += "<p>"
for (let i=0; i < json.weather.length; i++) {
results += json.weather[i].description
if (i !== json.weather.length - 1)
results += ", "
   }
 results += "</p>";*/
document.getElementById("pokeStats").innerHTML = results;
})
}
    catch(err){};
});
