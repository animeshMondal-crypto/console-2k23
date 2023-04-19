import { Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ButtonComp = ({ value, id }) => {
  const [display, setDisplay] = useState(new Array(30).fill(false));
  useEffect(() => {}, display);
  return (
    <Box className="buttonBox">
      <Link to={`/question/${id}`} target={"blank"}>
        <Button
          key={value}
          id={value}
          variant={"contained"}
          disabled={display[id - 1] ? true : false}
          color={
            value % 1 === 0 && value % 5 === 0
              ? "error"
              : value % 2 === 0 && value % 4 === 0
              ? "warning"
              : value % 3 === 0 && value % 6 === 0
              ? "secondary"
              : value % 7 === 0
              ? "success"
              : "info"
          }
          sx={{
            borderRadius: "20px",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "800",
            padding: "0.5rem",
            margin: "0.1rem",
            width: "100%",
            "&:hover": {
              boxShadow: "10px 10px 5px grey",
            },
          }}
          onClick={() => {
            const items = [...display];
            items[id - 1] = true;
            setDisplay(items);
          }}
        >
          {value}
        </Button>
      </Link>
    </Box>
  );
};

export default ButtonComp;
