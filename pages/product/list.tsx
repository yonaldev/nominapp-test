import { Grid } from "@mui/material";
import { GetStaticProps } from "next";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ListProducts } from "../../components/organisms/ListProducts";
import { getAllPokemons } from "../../services/pokemon.service";

const queryClient = new QueryClient();

const ListProductsPage: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <ListProducts />
    </QueryClientProvider>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await getAllPokemons();

//   return {
//     props: {
//       pokemons: res,
//     },
//   };
// };

export default ListProductsPage;
