import Image from "next/image";
import Link from "next/link";

import { getPokemonById } from "@/actions";
import { PokemonStat, PokemonType } from "@/components";

import { IoArrowBack } from "react-icons/io5";
import { StatName } from "@/interfaces";
import { GiMagicSwirl } from "react-icons/gi";
import clsx from "clsx";


interface Props {
  params: Promise<{ id: string }>;
}


export default async function PokemonPage({ params }: Props) {
  const { id } = await params;
  const pokemon = await getPokemonById( Number(id) );

  const newName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="flex flex-col gap-10 justify-center">
      <Link
        className="w-fit flex justify-center items-center gap-2 my-5 px-4 py-2 bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm rounded-md"
        href="/"
      >
        <IoArrowBack size={ 30 } />
        <p className="text-xl">Back</p>
      </Link>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <div className="place-self-center">
          <div>
            <Image
              src={ pokemon.sprites!.front_default }
              alt={`An image of ${ pokemon.name }`}
              width={ 256 }
              height={ 256 }
              style={{objectFit: "contain"}}
              priority
            />
          </div>

          <div className="flex justify-center items-center gap-4 mt-6"> {/* Evolutions */}
            <Image
              src={ pokemon.sprites!.front_default }
              alt={`An image of ${ pokemon.name }`}
              width={ 64 }
              height={ 64 }
              style={{objectFit: "contain"}}
              priority
            />
            <Image
              src={ pokemon.sprites!.front_shiny }
              alt={`An image of ${ pokemon.name } shiny`}
              width={ 64 }
              height={ 64 }
              style={{objectFit: "contain"}}
              priority
            />
          </div> {/* Evolutions - */}
        </div>

        <div className="min-w-fit flex flex-col gap-10 px-10 py-7 bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm rounded-xl">
          <div> {/* Header */}
            <p className="font-bold text-4xl">{ newName } - { pokemon.id }</p>
            <div className="flex items-center gap-3 mt-2">
              {
                pokemon.types.map(type => (
                  <PokemonType key={ type } pokemonType={ type } />
                ))
              }
            </div>
          </div> {/* Header - End */}

          <div> {/* Basic info */}
            <p className="font-semibold text-xl">Basic information</p>

            <ul className="ml-4">
              <li>Height: { ( pokemon.height ) * 10 }cm</li>
              <li>Weight: { ( pokemon.weight ) * 10 }kg</li>
              <li>Base Experience: { pokemon.base_experience } xp</li>
            </ul>
          </div> {/* Basic info - End */}

          <div> {/* Stats */}
            <p className="font-semibold text-xl">Stats</p>

            <div className="flex justify-center flex-wrap gap-6 mt-2">
              {
                pokemon.stats.map(stat => (
                  <PokemonStat key={ stat.stat.name } data={{
                    ...stat,
                    stat: { ...stat.stat, name: stat.stat.name as StatName }
                  }} />
                ))
              }
            </div>

          </div> {/* Stats - End */}
        </div>
      </div>

      <div className="w-full md:max-w-7xl mx-auto bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm rounded-xl px-10 py-7">
        <p className="font-bold text-4xl">Abilities</p>

        <div> {/* Abilities */}
          <ul className="mt-6 flex flex-col gap-4">
            {
              pokemon.abilities.map(ab => (
                <li key={ ab.ability.name }>
                  <div className="flex items-center gap-1">
                    {
                      ( ab.is_hidden ) && <GiMagicSwirl className="fill-yellow-400" size={ 20 } />
                    }
                    <p
                      className={
                        clsx(
                          "font-bold uppercase",
                          { 'text-yellow-400': ab.is_hidden }
                        )
                      }
                    >
                      { ab.ability.name }:
                    </p>
                  </div>
                  <p>{ ab.ability.effect }</p>
                </li>
              ))
            }
          </ul>
        </div> {/* Abilities - End */}
      </div>

      <div className="w-full md:max-w-7xl mx-auto bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm rounded-xl px-10 py-7">
        <p className="font-bold text-4xl">Type Matchups</p>

        <div className="flex flex-col gap-6 mt-6">
          <div>
            <p className="font-semibold text-xl">Strong against <span className="text-lg font-normal text-current/50">(x2 damage to)</span></p>
            
            <div className="flex items-center gap-2 mt-1">
              {
                pokemon.typeMatchups.strongAgainst.map(typeMatchup => (
                  <PokemonType key={ typeMatchup } pokemonType={ typeMatchup } />
                ))
              }
            </div>
          </div>

          <div>
            <p className="font-semibold text-xl">Weak against <span className="text-lg font-normal text-current/50">(x2 damage from)</span></p>
            
            <div className="flex items-center gap-2 mt-1">
              {
                pokemon.typeMatchups.weakAgainst.map(typeMatchup => (
                  <PokemonType key={ typeMatchup } pokemonType={ typeMatchup } />
                ))
              }
            </div>
          </div>

          <div>
            <p className="font-semibold text-xl">Resistant <span className="text-lg font-normal text-current/50">(x0.5 damage from)</span></p>
            
            <div className="flex items-center gap-2 mt-1">
              {
                pokemon.typeMatchups.resistantAgainst.map(typeMatchup => (
                  <PokemonType key={ typeMatchup } pokemonType={ typeMatchup } />
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}