import { useQuery } from "react-query";
import { getAllPokemons } from "../services/pokemon.service";

export function GetInfo(){
  const { isLoading, error, data, isFetching } = useQuery('poke',()=> getAllPokemons())
} 