import { Box, Typography } from "@mui/material";
import { SigUpUser } from "../../components/organisms/SignUpUser/index";

const SignUpPage = () => {
  return (
    <Box>
      <Typography
        sx={{ textAlign: "center", marginBottom: 1 }}
        component="h1"
        variant="h4"
      >
        Regístrate
      </Typography>
      <SigUpUser />
    </Box>
  );
};

export default SignUpPage;
