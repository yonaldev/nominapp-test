import { useId } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Fab, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ReactQueryDevtools } from "react-query/devtools";

//Components
import { Loading } from "../../atoms/Loading";
import { CardItem } from "../../molecules/CardItem";

// Services
import { getAllProducts } from "../../../services/product.service";

// types
import { Product } from "../../../types/product.type";

export const ListProducts: React.FC = (): any => {
  const id = useId();
  const router = useRouter();

  const { isLoading, data } = useQuery<Product[]>("products", () =>
    getAllProducts()
  );

  if (isLoading) return <Loading />;

  return (
    <Box>
      <Fab
        sx={{
          position: "fixed",
          right: 80,
          bottom: 80,
        }}
        color="primary"
        aria-label="add"
        onClick={() => router.push("/product/create")}
      >
        <AddIcon />
      </Fab>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3 }}
      >
        {data?.map((product, index) => (
          <Link href={`/product/detail/${product.id}`} key={`${id}-${index}`}>
            <Box>
              <CardItem item={product} />
            </Box>
          </Link>
        ))}
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </Box>
    </Box>
  );
};
