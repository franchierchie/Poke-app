import { HomePageWrapper } from "@/components";
import { getPokemons } from "@/actions";

export default async function Home() {
  const pokemons = await getPokemons( 151 );

  return (
    <HomePageWrapper pokemons={ pokemons } />
  );
}
