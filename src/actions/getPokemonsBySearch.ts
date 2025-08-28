import { SimplePokemon } from "@/interfaces";

export const getPokemonsBySearch = ( pokemonsArray: SimplePokemon[], searchText: string ) => {
  const results = pokemonsArray.filter(pokemon =>
    pokemon.name.toLocaleLowerCase().includes( searchText )
  );

  return results;
}
