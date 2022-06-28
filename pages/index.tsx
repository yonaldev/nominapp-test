import {
  TextField,
  Button,
  Box,
  Tooltip,
  Alert,
  Typography,
} from "@mui/material";
import { FormControl } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import InfoIcon from "@mui/icons-material/Info";
import { object, ref, string } from "yup";
import { useQuery } from "react-query";
import { useCustomQuery } from "../hooks/useCustomeQuery/index";
import { login } from "../services/user.service";
import { useState } from "react";
import { useRouter } from "next/router";

// Utils

interface Form {
  email: string;
  password: string;
}

const Home = () => {
  const [errorPassword, setErrorPassword] = useState(false);
  const router = useRouter();
  const validationSchema = object({
    email: string()
      .email("Invalid email address")
      .required("Correo obligatorio"),
    password: string().required("Contraseña obligatorio"),
  });

  const formik = useFormik<Form>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (payload: Form) => {
      const resp = await login(payload);

      if (resp.statusCode === 401) {
        setErrorPassword(true);
      } else {
        console.log(resp);
        window.localStorage.setItem("id", resp.result.id);
        router.push("/product/list");
      }
    },
  });

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography component="h2" variant="h4">
        Inicia Session
      </Typography>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 280,
          width: 300,
          justifyContent: "space-around",
        }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          fullWidth
          id="outlined-basic"
          name="email"
          label="Correo"
          variant="outlined"
          size="small"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          sx={{ marginRight: 2, minWidth: 300 }}
          fullWidth
          id="outlined-basic"
          size="small"
          type="password"
          name="password"
          label="Contraseña"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        {errorPassword && (
          <Alert severity="error">Correo o contraseña inválidos</Alert>
        )}
        <LoadingButton
          type="submit"
          size="large"
          variant="contained"
          loading={false}
        >
          Iniciar session
        </LoadingButton>
      </FormControl>
    </Box>
  );
};

export default Home;
