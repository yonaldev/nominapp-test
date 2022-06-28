import { Box, CircularProgress } from "@mui/material";

export const Loading = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "80px",
    }}
  >
    <CircularProgress size={80} />
  </Box>
);
