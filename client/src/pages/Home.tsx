import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnim />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: { md: "row", xs: "column" },
            gap: 5,
            my: 10,
          }}
        >
          <img src="" alt="" style={{ width: "200px", margin: "auto" }} />
          <img src="" alt="" style={{ width: "200px", margin: "auto" }} />
        </Box>
        <Box sx={{ display: "flex", width: "100%", mx: "auto" }}>
          <img
            src=""
            alt=""
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "60%" : "80%",
              borderRadius: 20,
              boxShadow: " -5px -5px 105px #64f3d5",
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
