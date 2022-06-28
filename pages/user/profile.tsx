import { Box, Typography, TextField, CardMedia } from "@mui/material";
import { useQuery } from "react-query";
import { getUserInfo } from "../../services/user.service";
import { Loading } from "../../components/atoms/Loading";

const ProfilePage = () => {
  const { data, isLoading } = useQuery("userInfo", () =>
    getUserInfo(window.localStorage.getItem("id"))
  );

  if (isLoading) return <Loading />;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "300px auto", xs: "auto" },
      }}
    >
      <Box
        sx={{
          width: "194px",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/5146d1dbf9146c4d12a7249e72065a58.png"
          alt="Paella dish"
        />
      </Box>

      <Box>
        <Box>
          <Typography color="primary" component="h2" variant="h6">
            Datos Personales
          </Typography>
          <Box display="flex">
            <Typography marginRight={3} component="p" variant="subtitle1">
              {data?.name}
            </Typography>
            <Typography component="p" variant="subtitle1">
              {data?.lastName}
            </Typography>
          </Box>
        </Box>

        <Box marginTop={3}>
          <Typography color="primary" component="h2" variant="h6">
            Datos de contacto
          </Typography>
          <Box>
            <Typography component="p" variant="subtitle1">
              {data?.email}
            </Typography>
            <Typography component="p" variant="subtitle1">
              {data?.cellphone}
            </Typography>
          </Box>
        </Box>

        <Box marginTop={3}>
          <Typography color="primary" component="h2" variant="h6">
            Cambio de contraseña
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 300,
            }}
          >
            <TextField
              sx={{ marginTop: 2 }}
              id="outlined-basic"
              size="small"
              type="password"
              name="password"
              label="Contraseña actual"
              variant="outlined"
              // value={formik.values.password}
              // onChange={formik.handleChange}
              // error={formik.touched.password && Boolean(formik.errors.password)}
              // helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              sx={{ marginTop: 2 }}
              id="outlined-basic"
              size="small"
              type="password"
              name="password"
              label="Nueva contraseña"
              variant="outlined"
              // value={formik.values.password}
              // onChange={formik.handleChange}
              // error={formik.touched.password && Boolean(formik.errors.password)}
              // helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              sx={{ marginTop: 2 }}
              id="outlined-basic"
              size="small"
              type="password"
              name="password"
              label="Confirmar contraseña"
              variant="outlined"
              // value={formik.values.password}
              // onChange={formik.handleChange}
              // error={formik.touched.password && Boolean(formik.errors.password)}
              // helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
