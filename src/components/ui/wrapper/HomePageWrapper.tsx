'use client';

import { useEffect, useState } from "react";

import { SimplePokemon } from "@/interfaces";
import { getPokemonsBySearch } from "@/actions";
import { PokemonGrid, Searchbar } from "@/components";

interface Props {
  pokemons: SimplePokemon[];
}

export const HomePageWrapper = ({ pokemons }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(pokemons);
  
  useEffect(() => {
    const result = getPokemonsBySearch(pokemons, searchValue);
    setSearchResult( result );

    if ( searchValue.length === 0 ) {
      setSearchResult( pokemons );
    }

  }, [searchValue]);

  return (
    <>
      <Searchbar onSearch={ setSearchValue } />
      <PokemonGrid pokemons={ searchResult } />
    </>
  )
}
