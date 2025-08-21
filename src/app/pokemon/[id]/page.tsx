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
    <div>
      <Link
        className="w-fit flex justify-center items-center gap-2 my-5 px-4 py-2 bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm rounded-md"
        href="/"
      >
        <IoArrowBack size={ 30 } />
        <p className="text-xl">Back</p>
      </Link>

      <div className="mt-5 px-30 grid grid-cols-2">
        <div className="place-self-center">
          <Image
            src="/example.png"
            alt="example image"
            width={ 256 }
            height={ 256 }
            style={{objectFit: "contain"}}
            priority
          />
        </div>


          <div className="flex flex-col gap-10 px-10 py-7 bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm rounded-xl">

            <div> {/* Header */}
              <p className="font-bold text-4xl">{ newName }</p>
              <div className="flex items-center gap-3 mt-2">
                <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#EE8130]">FIRE</p>
                <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#EE8130]">FIRE</p>
                <p className="w-fit py-1 px-4 rounded font-bold text-md text-[#1E1E1E] bg-[#EE8130]">FIRE</p>
              </div>
            </div>

            <div> {/* Basic info */}
              <p className="font-semibold text-xl">Basic information</p>

              <ul className="ml-4">
                <li>Height: { 6 * 10 }cm</li>
                <li>Weight: { 85 * 10 }kg</li>
                <li>Base Experience: { 62 } xp</li>
              </ul>
            </div>

            <div> {/* Stats */}
              <p className="font-semibold text-xl">Stats</p>

              <div className="w-fit grid grid-cols-3 gap-6 mt-2 mx-auto">
                <PokemonStat stat="HP" data={ 39 }>
                  <FaHeart className="fill-[#FF5959]" size={ 30 } />
                </PokemonStat>

                <PokemonStat stat="Attack" data={ 52 }>
                  <RiSwordLine className="fill-[#F5AC78]" size={ 30 } />
                </PokemonStat>

                <PokemonStat stat="Defense" data={ 43 }>
                  <IoShield className="fill-[#FAE078]" size={ 30 } />
                </PokemonStat>

                <PokemonStat stat="Sp. Attack" data={ 60 }>
                  <GiMagicSwirl className="fill-[#9DB7F5]" size={ 30 } />
                </PokemonStat>

                <PokemonStat stat="Sp. Defense" data={ 50 }>
                  <GiAura className="fill-[#A7DB8D]" size={ 30 } />
                </PokemonStat>

                <PokemonStat stat="Speed" data={ 65 }>
                  <FaBolt className="fill-[#FA92B2]" size={ 30 } />
                </PokemonStat>
              </div>

            </div>
          </div>

          {/* <Image  // Evolutions
            src="/example.png"
            alt="example image"
            width={ 96 }
            height={ 96 }
            style={{objectFit: "contain"}}
            priority
          /> */}
      </div>
    </div>
  );
}