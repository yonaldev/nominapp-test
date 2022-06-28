import { FormProduct } from "../../components/molecules/FormProduct";
import { Box, CardMedia, Typography } from "@mui/material";

const CreateProductPage = () => {
  return (
    <Box
      // sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      sx={{ display: "grid", gridTemplateColumns: "500px auto" }}
    >
      <CardMedia
        sx={{
          width: 400,
          height: "100%",
          margin: "0 auto",
        }}
        component="img"
        image="https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png"
        alt="Paella dish"
      />
      <Box>
        <Typography component="h2" variant="h5" marginBottom={3}>
          Registra un nuevo producto
        </Typography>
        <FormProduct />
      </Box>
    </Box>
  );
};

export default CreateProductPage;
