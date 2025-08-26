import { Ability } from "./";

export interface Generation {
  name: string;
  url:  string;
}

export interface Name {
  language: Generation;
  name:     string;
}

export interface GameIndex {
  game_index: number;
  generation: Generation;
}

export interface AbilityWithEffect extends Omit<Ability, "ability"> {
  ability: {
    name?: string;
    effect: string;
  };
}