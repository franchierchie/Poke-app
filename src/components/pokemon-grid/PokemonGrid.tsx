import { PokemonGridItem } from "./PokemonGridItem";

export const PokemonGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 py-5 sm:px-16 xl:px-32">{/* grid (pokemons) */}
      <PokemonGridItem />
      <PokemonGridItem />
      <PokemonGridItem />
      <PokemonGridItem />
      <PokemonGridItem />
      <PokemonGridItem />
      <PokemonGridItem />
    </div>
  )
}
