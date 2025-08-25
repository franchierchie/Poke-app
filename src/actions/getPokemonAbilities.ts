'use server';

import { Ability, EffectEntry } from "@/interfaces";

export const getPokemonAbilities = async( abilities: Ability[] ) => {
  try {
    const resp = await Promise.all(
      abilities.map( async(ab) => {
        const data = await fetch(ab.ability!.url).then(res => res.json());

        // get effects
        const effectEntry = data.effect_entries.find(
          (entry: EffectEntry) => entry.language.name === 'en'
        );

        return {
          ...ab,
          ability: {
            name: ab.ability?.name,
            effect: effectEntry ? effectEntry.effect : 'This ability has no effects.'
          }
        }
      })
    );

    return resp;
    
  } catch (error) {
    console.log( error );
    throw new Error('There was an error fetching the Pokemon.');
  }
}
