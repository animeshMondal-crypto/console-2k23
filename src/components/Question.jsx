import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../questions.json";

const Question = () => {
  const params = useParams();
  const [question, setQuestion] = useState("");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [isActive, setIsActive] = useState(true);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    Data.Questions.forEach((element) => {
      if (element.id === params.id) {
        setQuestion(element.q);
      }
    });

    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        if (counter === 60) setIsActive(false);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

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
        <span>{minute}</span>
        <span>:</span>
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
