import { Box } from "@mui/material";
import {
  QueryClient,
  QueryClientProvider,
  useQueries,
  useQuery,
  UseQueryResult,
} from "react-query";
import { Loading } from "../../components/atoms/Loading";
import { CardItem } from "../../components/molecules/CardItem/index";
import { CardPokemon } from "../../components/molecules/CardPokemon";
import { getAllPokemons, getPokemonInfo } from "../../services/pokemon.service";
import { Pokemon } from "../../types/pokemon.types";

const queryClient = new QueryClient();

const PokeApiPage = () => {
  const RenderComponent = () => {
    let cont = 0;
    const { data: pokemon, isLoading } = useQuery<Pokemon>("pokemons", () =>
      getAllPokemons()
    );

    if (isLoading) return <Loading />;

    return pokemon?.map(({ name, url }, index) => {
      return <CardPokemon key={index} name={name} url={url} />;
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3 }}
      >
        <RenderComponent />
      </Box>
    </QueryClientProvider>
  );
};

export default PokeApiPage;
