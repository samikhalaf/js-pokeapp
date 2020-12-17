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
        fetch(pokemon.url).then((res) =>
          res
            .json()
            .then((specificPokemon) => {
              printCard(specificPokemon);
            })
            .catch((error) => {
              console.error(error);
              console.log("*** Something went wrong ***");
            })
        );
      });
    });

  const printCard = (pokemon) => {
    const content = document.getElementById("content");

    const pokemonCard = document.createElement("div");
    pokemonCard.setAttribute("class", "pokemon-card");

    content.append(pokemonCard);

    const pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("src", pokemon.sprites.front_default);
    pokemonImage.setAttribute("alt", pokemon.name);
    pokemonImage.setAttribute("class", "pokemon-card--image");
    pokemonCard.append(pokemonImage);

    const pokemonName = document.createElement("p");
    pokemonName.textContent = pokemon.name;
    pokemonName.setAttribute("class", "pokemon-card--name");
    pokemonCard.append(pokemonName);
  };

  const views = "<h1>soy la home</h1>";

  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  return divElement;
};
