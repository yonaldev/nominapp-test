import { TextField, Box, Tooltip } from "@mui/material";
import { FormControl } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import InfoIcon from "@mui/icons-material/Info";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { object, ref, string } from "yup";

// Services
import { saveUser } from "../../../services/user.service";

// Utils
import { regexPassword } from "../../../utils/regex";
import { useRouter } from "next/router";

interface Form {
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  password: string;
  "confirm-password": string;
}
const messagePassword =
  "La contrasena debe de contener minimo 8 hasta 18 caracteres y puede contener almenos una letra mayuscula y alenmenos un caracter especial";

export const FormSigUp = () => {
  const router = useRouter();
  const mutation = useMutation("user", (user) => saveUser(user));

  const validationSchema = object({
    name: string().required("Nombre obligatorio"),
    lastName: string().required("Apellido obligatorio"),
    email: string()
      .email("Invalid email address")
      .required("Correo obligatorio"),
    cellphone: string().required("Numero celular obligatorio"),
    password: string()
      .matches(
        regexPassword,
        "La contraseña debe de cumplir con las especificaciones"
      )
      .required("Contraseña obligatorio"),
    "confirm-password": string()
      .oneOf([ref("password"), null], "Las contraseñas no coinciden")
      .required("Contraseña obligatorio"),
  });

  const formik = useFormik<Form>({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      cellphone: "",
      password: "",
      "confirm-password": "",
    },
    validationSchema,
    onSubmit: (values: any) => {
      mutation.mutate(values);
      router.push("/product/list");
    },
  });

  return (
    <FormControl
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "auto", md: "350px 350px" },
        gap: { xs: 0, md: 5 },
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Box>
        <TextField
          fullWidth
          margin="dense"
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
          margin="dense"
          id="lastName"
          name="lastName"
          label="Apellido"
          variant="outlined"
          size="small"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          margin="dense"
          id="cellphone"
          name="cellphone"
          label="Celular"
          variant="outlined"
          size="small"
          value={formik.values.cellphone}
          onChange={formik.handleChange}
          error={formik.touched.cellphone && Boolean(formik.errors.cellphone)}
          helperText={formik.touched.cellphone && formik.errors.cellphone}
        />
        <TextField
          fullWidth
          margin="dense"
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
      </Box>
      <Box>
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <TextField
            sx={{ marginRight: 2, minWidth: { xs: "auto", md: 350 } }}
            fullWidth
            margin="dense"
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
          <Tooltip
            disableFocusListener
            disableTouchListener
            title={messagePassword}
            color="primary"
          >
            <InfoIcon />
          </Tooltip>
        </Box>
        <TextField
          fullWidth
          margin="dense"
          id="outlined-basic"
          name="confirm-password"
          label="Confirmar contraseña"
          variant="outlined"
          size="small"
          value={formik.values["confirm-password"]}
          onChange={formik.handleChange}
          error={
            formik.touched["confirm-password"] &&
            Boolean(formik.errors["confirm-password"])
          }
          helperText={
            formik.touched["confirm-password"] &&
            formik.errors["confirm-password"]
          }
        />
        <LoadingButton
          sx={{ marginTop: 3 }}
          type="submit"
          size="large"
          variant="contained"
          loading={false}
        >
          Registrar
        </LoadingButton>
      </Box>
    </FormControl>
  );
};
