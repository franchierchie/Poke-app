'use server';

import { PokemonDetails, PokemonTypes, SinglePokemon } from "@/interfaces";
import { getPokemonAbilities, getPokemonTypeMatchups } from "./";

export const getPokemonById = async( id: number ): Promise<PokemonDetails> => {
  try {
    const data: SinglePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`)
      .then(res => res.json());
      
      const { name, id: pokemonId, types, height, weight, base_experience, stats, abilities, sprites } = data;

      const typeMatchups = await getPokemonTypeMatchups( types );
      const pokemonAbilities = await getPokemonAbilities( abilities );

      return {
        name, id: pokemonId, height, weight, base_experience, stats,
        abilities: pokemonAbilities,
        types: types.map((t: PokemonTypes) => t.type.name),
        sprites: sprites.other?.["official-artwork"],
        typeMatchups,
      }
    
  } catch (error) {
    console.log( error );
    throw new Error('There was an error fetching the Pokemon.');
  }
}
