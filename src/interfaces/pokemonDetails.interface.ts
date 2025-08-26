import { AbilityWithEffect, Stat } from "./";

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  stats: Stat[];
  abilities: AbilityWithEffect[];
  types: string[];
  sprites: {
    front_default: string;
    front_shiny: string;
  } | undefined;
  typeMatchups: TypeMatchups;
}

export interface TypeMatchups {
  strongAgainst: string[];
  weakAgainst: string[];
  resistantAgainst: string[];
}