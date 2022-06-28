import axios from "axios";
import { Pokemon } from "../types/pokemon.types";

const URL_BASE = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemons = (): Promise<Pokemon> =>
  axios
    .get(`${URL_BASE}/?limit=100&offset=0`)
    .then((res) => res.data.results)
    .catch((err) => console.error(err));

export const getPokemonInfo = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.error(err));
