'use server';

import { DamageRelations, PokemonTypes, TypeMatchups } from "@/interfaces";

interface PokemonType {
  name: string;
  url: string;
}


const allTypes = ["normal","fire","water","electric","grass","ice","fighting","poison","ground", "flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"];


export const getPokemonTypeMatchups = async( types: PokemonTypes[] ): Promise<TypeMatchups> => {
  try {
    const multipliers: Record<string, number> = {};
    allTypes.forEach((t) => (multipliers[t] = 1));

    // fetch types
    const data = await Promise.all(
      types.map(
        async(t) => {
          const res: { damage_relations: DamageRelations } = await fetch(`https://pokeapi.co/api/v2/type/${ t.type.name }`)
            .then(res => res.json());

            return res;
        })
    );

    // calculate defensive multipliers
    data.forEach(res => {
      const rel: DamageRelations = res.damage_relations;

      // defensive (Weak against && Resistant)
      rel.double_damage_from.forEach(t => multipliers[t.name] *= 2);
      rel.half_damage_from.forEach(t => multipliers[t.name] *= 0.5);
    });

    // offensive (Strong against)
    const strongAgainst = Array.from(
      new Set( data.flatMap(res => res.damage_relations.double_damage_to.map((t: PokemonType) => t.name)) )
    );

    // classify by multipliers
    const weakAgainst = Object.entries(multipliers)
      .filter(([_, mult]) => mult > 1)
      .map(([t]) => t);

    const resistantAgainst = Object.entries(multipliers)
      .filter(([_, mult]) => mult > 0 && mult < 1)
      .map(([t]) => t);

    return {
      strongAgainst,
      weakAgainst,
      resistantAgainst,
    }
    
  } catch (error) {
    console.log( error );
    throw new Error('There was an error fetching type matchups.');
  }
}
