import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProductDetail } from "../../../components/organisms/ProductDetail";

const queryClient = new QueryClient();

const DetailsPage = () => {
  const { id } = useRouter().query;

  return (
    <QueryClientProvider client={queryClient}>
      <ProductDetail id={id} />
    </QueryClientProvider>
  );
};

export default DetailsPage;
