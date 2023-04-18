import { Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ButtonComp = ({ value, id }) => {
  const [display, setDisplay] = useState(new Array(21).fill(false));
  useEffect(() => {}, display);
  return (
    <Box className="buttonBox">
      <Link to={`/question/${id}`} target={"blank"}>
        <Button
          key={value}
          id={value}
          variant="contained"
          color={
            value % 3 === 0
              ? "error"
              : value % 4 === 0
              ? "warning"
              : value % 2 === 0
              ? "success"
              : "info"
          }
          disabled={display[id - 1] ? true : false}
          sx={{
            borderRadius: "20px",
            marginBottom: "15px",
            padding: "15px",
            width: "100%",
            fontSize: "2rem",
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
