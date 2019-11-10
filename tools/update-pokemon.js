let fetch = require("node-fetch");
let fs = require("fs");
let typesAmount = 0;
let baseUrl = "https://pokeapi.co/api/v2/";
let types = [];
let pokemon = {};
let pokemonTypeList = {};
fetch(`${baseUrl}type/?limit=100`)
  .then(r => r.json())
  .then(j => {
    typesAmount = j.count;
    j.results.forEach(t => types.push(t.name));
    fetchPokemon();
  });

let fetchPokemon = async () => {
  for (const t of types) {
    let typesPokemon = [];
    let result = await fetch(`${baseUrl}type/${t}`);
    let j = await result.json();
    if (j.id < 30) {
      j.pokemon.forEach(p =>
        typesPokemon.push(formatPokemonName(p.pokemon.name))
      );
      pokemonTypeList[j.name] = typesPokemon;
    }
  }
  formatPokemonList();
};

let formatPokemonList = () => {
  for (const t of Object.keys(pokemonTypeList)) {
    for (const p of pokemonTypeList[t]) {
      if (pokemon[p]) {
        pokemon[p].push(t);
      } else {
        pokemon[p] = [t];
      }
    }
  }

  let formattedPokemonList = [];
  for (const n of Object.keys(pokemon)) {
    formattedPokemonList.push({
      value: `${titleCase(pokemon[n][0])}|${
        pokemon[n][1] ? titleCase(pokemon[n][1]) : titleCase(pokemon[n][0])
      }`,
      label: n
    });
  }
  fs.writeFileSync(
    "../src/data/pokemon.json",
    JSON.stringify(formattedPokemonList),
    "utf-8"
  );
};
let formatPokemonName = name => {
  return titleCase(name.replace("-", " "));
};

let titleCase = name => {
  var splitStr = name.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};
