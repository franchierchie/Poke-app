import { PokemonStat } from "@/components";
import Image from "next/image";
import Link from "next/link";

import { FaHeart, FaBolt } from "react-icons/fa6";
import { GiAura, GiMagicSwirl } from "react-icons/gi";
import { IoArrowBack, IoShield } from "react-icons/io5";
import { RiSwordLine } from "react-icons/ri";

export default function PokemonPage() {
  const newName = ("charmander").charAt(0).toUpperCase() + ("charmander").slice(1);

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
              // src="/example.png"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
              alt="example image"
              width={ 256 }
              height={ 256 }
              style={{objectFit: "contain"}}
              priority
            />
          </div>

          <div className="flex justify-center items-center gap-4 mt-6"> {/* Evolutions */}
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
              alt="example image"
              width={ 64 }
              height={ 64 }
              style={{objectFit: "contain"}}
              priority
            />
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png"
              alt="example image"
              width={ 64 }
              height={ 64 }
              style={{objectFit: "contain"}}
              priority
            />
          </div> {/* Evolutions - */}
        </div>

        <div className="min-w-fit flex flex-col gap-10 px-10 py-7 bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm rounded-xl">
          <div> {/* Header */}
            <p className="font-bold text-4xl">{ newName } - { 4 }</p>
            <div className="flex items-center gap-3 mt-2">
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#EE8130]">FIRE</p>
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#EE8130]">FIRE</p>
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#EE8130]">FIRE</p>
            </div>
          </div> {/* Header - End */}

          <div> {/* Basic info */}
            <p className="font-semibold text-xl">Basic information</p>

            <ul className="ml-4">
              <li>Height: { 6 * 10 }cm</li>
              <li>Weight: { 85 * 10 }kg</li>
              <li>Base Experience: { 62 } xp</li>
            </ul>
          </div> {/* Basic info - End */}

          <div> {/* Stats */}
            <p className="font-semibold text-xl">Stats</p>

            <div className="flex justify-center flex-wrap gap-6 mt-2">
              <PokemonStat stat="HP" data={ 39 } color="#FF5959">
                <FaHeart className="fill-[#FF5959]" size={ 30 } />
              </PokemonStat>

              <PokemonStat stat="Attack" data={ 52 } color="#F5AC78">
                <RiSwordLine className="fill-[#F5AC78]" size={ 30 } />
              </PokemonStat>

              <PokemonStat stat="Defense" data={ 43 } color="#FAE078">
                <IoShield className="fill-[#FAE078]" size={ 30 } />
              </PokemonStat>

              <PokemonStat stat="Sp. Attack" data={ 60 } color="#9DB7F5">
                <GiMagicSwirl className="fill-[#9DB7F5]" size={ 30 } />
              </PokemonStat>

              <PokemonStat stat="Sp. Defense" data={ 50 } color="#A7DB8D">
                <GiAura className="fill-[#A7DB8D]" size={ 30 } />
              </PokemonStat>

              <PokemonStat stat="Speed" data={ 65 } color="#FA92B2">
                <FaBolt className="fill-[#FA92B2]" size={ 30 } />
              </PokemonStat>
            </div>

          </div> {/* Stats - End */}
        </div>
      </div>

      <div className="w-full md:max-w-7xl mx-auto bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm rounded-xl px-10 py-7">
        <p className="font-bold text-4xl">Abilities</p>

        <div> {/* Abilities */}
          <ul className="mt-6 flex flex-col gap-4">
            <li>
              <p className="font-bold uppercase">blaze:</p>
              <p>When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5x as much regular damage.</p>
            </li>
            <li>
              <div className="flex items-center gap-1">
                <GiMagicSwirl className="fill-yellow-400" size={ 20 } />
                <p className="font-bold uppercase text-yellow-400">solar-power:</p>
              </div>
              <p>During strong sunlight, this Pokémon has 1.5x its Special Attack but takes 1/8 of its maximum HP in damage after each turn.</p>
            </li>
          </ul>
        </div> {/* Abilities - End */}
      </div>

      <div className="w-full md:max-w-7xl mx-auto bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm rounded-xl px-10 py-7">
        <p className="font-bold text-4xl">Type Matchups</p>

        <div className="flex flex-col gap-6 mt-6">
          <div>
            <p className="font-semibold text-xl">Strong against <span className="text-lg font-normal text-current/50">(x2 damage to)</span></p>
            
            <div className="flex items-center gap-2 mt-1">
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#A6B91A] uppercase">bug</p>
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#B7B7CE] uppercase">steel</p>
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#7AC74C] uppercase">grass</p>
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#96D9D6] uppercase">ice</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-xl">Weak against <span className="text-lg font-normal text-current/50">(x2 damage from)</span></p>
            
            <div className="flex items-center gap-2 mt-1">
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#E2BF65] uppercase">ground</p>
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#B6A136] uppercase">rock</p>
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#6390F0] uppercase">water</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-xl">Resistant <span className="text-lg font-normal text-current/50">(x0.5 damage from)</span></p>
            
            <div className="flex items-center gap-2 mt-1">
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#A6B91A] uppercase">bug</p>
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#B7B7CE] uppercase">steel</p>
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#7AC74C] uppercase">grass</p>
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#96D9D6] uppercase">ice</p>
              <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#D685AD] uppercase">fairy</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}