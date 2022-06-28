import { useRouter } from "next/router";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { object, string, number } from "yup";

// Services
import { saveProduct } from "../../../services/product.service";

// Types
import { Product } from "../../../types/product.type";

interface Form {
  name: string;
  description: string;
  img: string;
  price: string;
}

export const FormProduct = () => {
  const router = useRouter();
  const validationSchema = object({
    name: string().required("Debes de diligenciar este campo"),
    price: number().required("Debes diligenciar este campo"),
    description: string().required("Debes diligenciar este campo"),
    img: string().required("Contraseña obligatorio"),
  });

  const formik = useFormik<Product>({
    initialValues: {
      name: "",
      description: "",
      img: "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png",
      price: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const resp = await saveProduct(values);
      if (resp) router.push("/product/list");
    },
  });

  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 380,
        width: "100%",
        maxWidth: 500,
        justifyContent: "space-around",
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Nombre"
        variant="outlined"
        size="small"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        fullWidth
        id="outlined-basic"
        size="small"
        name="price"
        label="Precio"
        variant="outlined"
        value={formik.values.price}
        onChange={formik.handleChange}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        name="img"
        // type="file"
        label="Ingresa la url de la imagen"
        variant="outlined"
        size="small"
        value={formik.values.img}
        onChange={formik.handleChange}
        error={formik.touched.img && Boolean(formik.errors.img)}
        helperText={formik.touched.img && formik.errors.img}
      />
      <TextField
        fullWidth
        multiline
        id="outlined-basic"
        size="small"
        name="description"
        label="Escribe una breve descripción"
        variant="outlined"
        rows={4}
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <LoadingButton
        type="submit"
        size="large"
        variant="contained"
        loading={false}
        disabled={!formik.isValid}
      >
        Guardar Producto
      </LoadingButton>
    </FormControl>
  );
};
