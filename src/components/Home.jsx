import { Box, Typography, Stack, styled } from "@mui/material";
import logo from "../assets/CONSOLE logo.png";
import CV from "../assets/CV logo.png";
import React from "react";
import ButtonComp from "./ButtonComp";
const buttons = new Array(30).fill(0);

const StyledBox = styled(Box)({
  marginBottom: "20px",
  animation: "rotateY-anim 4s linear infinite",
  "@keyframes rotateY-anim": {
    "0%": {
      transform: "rotateY(0deg)",
    },
    "100%": {
      transform: "rotateY(360deg)",
    },
  },
});

const Home = () => {
  return (
    <Stack
      direction={"column"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack direction={"row"}>
        <span>
          <img height={"150px"} src={CV} alt="CV" />
        </span>
        <Typography
          fontWeight={"700"}
          fontSize={"6rem"}
          letterSpacing={"1.5rem"}
          fontFamily={"monospace"}
        >
          CONSOLE 2K23
        </Typography>
      </Stack>
      <StyledBox>
        <img height={"150px"} src={logo} alt="logo" />
      </StyledBox>
      <Box className="buttonBox">
        {buttons.map((val, idx) => (
          <ButtonComp key={idx} id={idx + 1} value={idx + 1} />
        ))}
      </Box>
    </Stack>
  );
};

export default Home;
