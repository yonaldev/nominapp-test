import { Box } from "@mui/material";

// Components
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <Box component="main" sx={{ marginX: 10, marginTop: 11 }}>
        {children}
      </Box>

      <Footer />
    </>
  );
};
