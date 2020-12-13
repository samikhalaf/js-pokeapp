export default () => {
  const API_BASE_URL = "https://pokeapi.co/api/v2/";

  window.onload = function () {};

  fetch(API_BASE_URL + "pokemon")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let pokemons = data.results;
      console.log(pokemons);

      pokemons.map((pokemon) => {
        console.log(pokemon.url);
        fetch(pokemon.url)
        .then((res) => res.json()
        .then((specificPokemon) => console.log(specificPokemon))

        
        );
      });
    });

  const views = "<h1>Esto es la home</h1>";

  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  return divElement;
};
