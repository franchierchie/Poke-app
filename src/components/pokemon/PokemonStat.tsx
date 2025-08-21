import React from "react";

interface Props {
  children: React.ReactNode;
  stat: string;
  data: number;
}

export const PokemonStat = ({ children, data, stat }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1.5 bg-[#F8F9FC] dark:bg-[#1C1C1E] shadow-md dark:shadow-sm w-[8rem] aspect-[1/1] rounded-md">
      { children }

      <div className="text-center">
        <p className="font-bold">{ stat }</p>
        <p className="font-bold text-4xl">{ data }</p>
      </div>
    </div>
  )
}
