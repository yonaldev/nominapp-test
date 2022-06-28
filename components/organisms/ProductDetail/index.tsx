import { Box, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Services
import { getProductById } from "../../../services/product.service";

// Types
import { Product } from "../../../types/product.type";

type Props = {
  id: any;
};

export const ProductDetail: React.FC<Props> = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery<Product>("productDetail", () => getProductById(id));

  return (
    <Box>
      <CardMedia
        component="img"
        height="194"
        image={data?.img}
        alt="Paella dish"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
        }}
      >
        <Typography component="h2" variant="h2">
          {data?.name}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography
            color="primary"
            sx={{ marginRight: 8 }}
            component="p"
            variant="h4"
          >
            Precio:
          </Typography>
          <Typography component="p" variant="h4">
            {data?.price}
          </Typography>
        </Box>
      </Box>
      <Typography component="p" variant="h6">
        {data?.description}
      </Typography>
      <ReactQueryDevtools initialIsOpen />
    </Box>
  );
};
