import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";

import { PokemonGrid } from "@/components";

export default function Home() {
  return (
    <div>
      {/* searhBar */}
      <label
        className="flex justify-between gap-5 pr-4 sm:w-fit mx-auto my-5 bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm rounded-md w-full sm:min-w-xl border-2 border-[#E5E7EB] dark:border-[#3F3F46]"
        htmlFor="searhBar"
      >
        <input
          id="searhBar"
          type="search"
          placeholder="Search your pokemon!"
          className="w-full p-4"
        />
        <button>
          <IoSearchOutline size={ 30 } />
        </button>
      </label>

      <PokemonGrid />
    </div>
  );
}
