import { getTypeColor } from "@/actions";

interface Props {
  pokemonType: string;
}

export const PokemonType = ({ pokemonType }: Props) => {
  const bgColor = getTypeColor( pokemonType );

  return (
    <p
      className="py-2 px-4 rounded font-bold text-[#1E1E1E]"
      style={{ backgroundColor: bgColor }}
    >
      { pokemonType.toUpperCase() }
    </p>
  )
}
