import Image from "next/image";
import { PokemonType } from "./PokemonType";
import Link from "next/link";

const typesExample = [  //! BORRAR
  {
    "slot": 1,
    "type": {
      "name": "fire",
      "url": "https://pokeapi.co/api/v2/type/10/"
    }
  },
];


export const PokemonGridItem = () => {
  const newName = ("charmander").charAt(0).toUpperCase() + ("charmander").slice(1);

  return (
    <Link
      href="/pokemon/4"
      className="flex flex-col items-center gap-4 w-full bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm p-5 rounded-md border-2 border-[#E5E7EB] dark:border-[#3F3F46] hover:border-[#2563EB]"
    >
      <Image
        src="/example.png"
        alt="example image"
        width={ 96 }
        height={ 96 }
        style={{objectFit: "contain"}}
        priority
      />

      <div className="text-center">
        <p className="text-current/50">#{ 4 }</p>
        <p className="font-bold text-2xl">{ newName }</p>
      </div>

      <div className="flex justify-center items-center gap-2 flex-wrap">{/* Types */}
        {
          typesExample.map(typeExample => (
            <PokemonType key={ typeExample.slot } pokemonType={ typeExample.type.name } />
          ))
        }
      </div>
    </Link>
  )
}
