import { useEffect, useState } from "react";
import { getPokemonInfo } from "../../../services/pokemon.service";
import { Pokemon } from "../../../types/pokemon.types";
import { CardItem } from "../CardItem";

export const CardPokemon: React.FC<Pokemon> = ({ name, url }) => {
  const [img, setImg] = useState();
  let data = {
    name,
    img,
  };

  const getInfo = async () => {
    const res = await getPokemonInfo(url);
    setImg(res.sprites.front_default);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return <CardItem item={data} />;
};
