'use client';

import { Dispatch, SetStateAction, useEffect } from "react";

import { useForm } from "@/hooks";

import { IoSearchOutline } from "react-icons/io5";

interface Props {
  onSearch: Dispatch<SetStateAction<string>>;
}

export const Searchbar = ({ onSearch }: Props) => {
  const { searchText, onInputChange } = useForm({ searchText: '' });

  useEffect(() => {
    const trimmedInputValue = searchText.toLocaleLowerCase().trim();
    onSearch( trimmedInputValue ); 
    
  }, [searchText, onSearch]);

  return (
    <form>
      <label
        className="flex justify-between gap-5 pr-4 sm:w-fit mx-auto my-5 bg-white dark:bg-[#2C2C2E] shadow-md dark:shadow-sm rounded-md w-full sm:min-w-xl border-2 border-[#E5E7EB] dark:border-[#3F3F46]"
        htmlFor="searchText"
      >
        <input
          id="searchText"
          type="search"
          placeholder="Search your pokemon!"
          className="w-full p-4"
          name="searchText"
          value={ searchText }
          onChange={ onInputChange }
          autoComplete="off"
        />
        <button>
          <IoSearchOutline size={ 30 } />
        </button>
      </label>
    </form>
  )
}
