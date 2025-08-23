'use server';

import { PokemonsResponse, PokemonTypes, SimplePokemon } from "@/interfaces";

export const getPokemons = async( limit = 20, offset = 0 ):Promise<SimplePokemon[]> => {
  try {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
      .then(res => res.json());

    const pokemons = await Promise.all(
      data.results.map(async(pokemon) => {
        const { id, name, types, sprites } = await fetch( pokemon.url ).then(res => res.json());

        return {
          id: id,
          name: name,
          types: types.map((t: PokemonTypes) => t.type.name),
          sprite: sprites.other['official-artwork'].front_default,
        }
      })
    );

    return pokemons;
    
  } catch (error) {
    console.log( error );
    throw new Error('There was an error fetching the Pokemons.');
  }
}
