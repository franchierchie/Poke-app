import Image from "next/image";
import { PokemonType } from "./PokemonType";
import Link from "next/link";
import { SimplePokemon } from "@/interfaces";

interface Props {
  pokemon: SimplePokemon;
}


export const PokemonGridItem = ({ pokemon }: Props) => {
  const newName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <Link
      href={`/pokemon/${ pokemon.id }`}
      className="flex flex-col items-center gap-4 w-full max-w-xs bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm p-5 rounded-md border-2 border-[#E5E7EB] dark:border-[#3F3F46] hover:border-[#2563EB]"
    >
      <Image
        src={ pokemon.sprite }
        alt="example image"
        width={ 96 }
        height={ 96 }
        style={{objectFit: "contain"}}
        priority
      />

      <div className="text-center">
        <p className="text-current/50">#{ pokemon.id }</p>
        <p className="font-bold text-2xl">{ newName }</p>
      </div>

      <div className="flex justify-center items-center gap-2 flex-wrap">{/* Types */}
        {
          pokemon.types.map((type) => (
            <PokemonType key={ `${ pokemon.id }-${ type }` } pokemonType={ type } />
          ))
        }
      </div>
    </Link>
  )
}
