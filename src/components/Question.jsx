import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../questions.json";

const Question = () => {
  const params = useParams();
  const [question, setQuestion] = useState("");
  const [second, setSecond] = useState("40");
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    Data.Questions.forEach((element) => {
      if (element.id === params.id) {
        setQuestion(element.q);
      }
    });

    let intervalId;
    const counter = 1;
    if (isActive) {
      intervalId = setInterval(() => {
        let computedSecond =
          parseInt(second) - counter > 0
            ? parseInt(second) <= 10
              ? `0${parseInt(second) - counter}`
              : `${parseInt(second) - counter}`
            : `00`;
        console.log(second, counter);

        setSecond(computedSecond);

        if (parseInt(second) === 0) setIsActive(false);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, second]);

  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <Box
        textAlign={"center"}
        fontWeight={"600"}
        fontSize={"8rem"}
        mt={"50px"}
        bgcolor={"#3C486B"}
        color={"white"}
        borderRadius={"10px"}
        width={"30%"}
        padding={"0 30px"}
        boxShadow={"10px 10px 5px grey"}
      >
        <span>{second}</span>
      </Box>
      <Box m={"5rem"}>
        <Typography variant="h3" fontWeight={"700"}>
          {question}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Question;
