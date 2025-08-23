import { SimplePokemon } from "@/interfaces";
import { PokemonGridItem } from "./PokemonGridItem";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 py-5 sm:px-16 xl:px-32">{/* grid (pokemons) */}
    <div className="flex flex-wrap justify-center items-center gap-5 md:max-w-7xl mx-auto py-5 sm:px-16 xl:px-32">{/* grid (pokemons) */}
      {
        pokemons.map(pokemon => (
          <PokemonGridItem key={ pokemon.id } pokemon={ pokemon } />
        ))
      }
    </div>
  )
}
