const types = {
  normal: {
    normal: 0,
    fighting: 0,
    flying: 0,
    poison: 0,
    ground: 0,
    rock: -1,
    bug: 0,
    ghost: -100,
    steel: -1,
    fire: 0,
    water: 0,
    grass: 0,
    electric: 0,
    psychic: 0,
    ice: 0,
    dragon: 0,
    fairy: 0,
    dark: 0,
  },
  fighting: {
    normal: 1,
    fighting: 0,
    flying: -1,
    poison: -1,
    ground: 0,
    rock: 1,
    bug: -1,
    ghost: -100,
    steel: 1,
    fire: 0,
    water: 0,
    grass: 0,
    electric: 0,
    psychic: -1,
    ice: 1,
    dragon: 0,
    fairy: -1,
    dark:  1,
  },
  flying: {
    normal: 0,
    fighting: 1,
    flying: 0,
    poison: 0,
    ground: 0,
    rock: -1,
    bug: 1,
    ghost: 0,
    steel: -1,
    fire: 0,
    water: 0,
    grass: 1,
    electric:-1, 
    psychic: 0,
    ice: 0,
    dragon: 0,
    fairy: 0,
    dark: 0,
  },
  poison: {
    normal: 0,
    fighting: 0,
    flying: 0,
    poison: -1,
    ground: -1,
    rock: -1,
    bug: 0,
    ghost: -1,
    steel: -100,
    fire: 0,
    water: 0,
    grass: 1,
    electric: 0,
    psychic: 0,
    ice: 0,
    dragon: 0,
    fairy: 1,
    dark: 0,
  },
  ground: {
    normal: 0,
    fighting: 0,
    flying: -100,
    poison: 1,
    ground: 0,
    rock: 1,
    bug: -1,
    ghost: 0,
    steel: 1,
    fire: 1,
    water: 0,
    grass: -1,
    electric: 1,
    psychic: 0,
    ice: 0,
    dragon: 0,
    fairy: 0,
    dark: 0,
  },
  rock: {
    normal: 0,
    fighting: -1,
    flying: 1,
    poison: 0,
    ground: -1,
    rock: 0,
    bug: 1,
    ghost: 0,
    steel: -1,
    fire: 1,
    water: 0,
    grass: 0,
    electric: 0,
    psychic: 0,
    ice: 1,
    dragon: 0,
    fairy: 0,
    dark: 0,
  },
  bug: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: 
  },
  ghost: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: 1
  },
  steel: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: 
  },
  fire: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: 
  },
  water: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: 
  },
  grass: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: 
  },
  electric: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: 
  },
  psychic: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: 1
  },
  ice: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: 
  },
  dragon: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: 
  },
  fairy: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: -1
  },
  dark: {
    normal: 
    fighting: 
    flying: 
    poison: 
    ground: 
    rock: 
    bug: 
    ghost: 
    steel: 
    fire: 
    water: 
    grass: 
    electric: 
    psychic: 
    ice: 
    dragon: 
    fairy: 
    dark: -1
  }
};
export default types;
