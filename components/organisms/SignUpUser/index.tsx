import Box from "@mui/material/Box";

// Components
import { FormSigUp } from "../../molecules/FormSingUp";

export const SigUpUser = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormSigUp />
    </Box>
  );
};
