import { StatName } from "@/interfaces";
import { JSX } from "react";

import { FaBolt, FaHeart } from "react-icons/fa6";
import { GiAura, GiMagicSwirl } from "react-icons/gi";
import { IoShield } from "react-icons/io5";
import { RiSwordLine } from "react-icons/ri";

interface Props {
  data: {
    base_stat: number;
    effort: number;
    stat: {
      name: StatName;
      url: string;
    };
  };
}



const statConfig: Record<StatName, { icon: JSX.Element; color: string; }> = {
  hp: {
    icon: <FaHeart className="fill-[#FF5959]" size={ 30 } />,
    color: '#FF5959',
  },
  attack: {
    icon: <RiSwordLine className="fill-[#F5AC78]" size={ 30 } />,
    color: '#F5AC78',
  },
  defense: {
    icon: <IoShield className="fill-[#FAE078]" size={ 30 } />,
    color: '#FAE078',
  },
  ["special-attack"]: {
    icon: <GiMagicSwirl className="fill-[#9DB7F5]" size={ 30 } />,
    color: '#9DB7F5',
  },
  ["special-defense"]: {
    icon: <GiAura className="fill-[#A7DB8D]" size={ 30 } />,
    color: '#A7DB8D',
  },
  speed: {
    icon: <FaBolt className="fill-[#FA92B2]" size={ 30 } />,
    color: '#FA92B2',
  },
}


export const PokemonStat = ({ data }: Props) => {
  const cfg = statConfig[data.stat.name];

  return (
    <div
      className="flex flex-col justify-center items-center gap-1.5 bg-[#F8F9FC] dark:bg-[#1C1C1E] shadow-md dark:shadow-sm w-[8rem] aspect-[1/1] rounded-md border-2"
      style={{ borderColor: cfg.color }}
    >
      { cfg.icon }

      <div className="text-center">
        <p className="font-bold">{ data.stat.name }</p>
        <p className="font-bold text-4xl">{ data.base_stat }</p>
      </div>
    </div>
  )
}
