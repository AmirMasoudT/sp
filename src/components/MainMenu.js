import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MainMenu = () => {
  const pages = ["اطلاعات پایه", "مدیریت کابران", "سپاپد", "گزارشات", "راهنما"];
  return (
    <Box>
      {pages.map((page) => (
        <Button sx={{ "&:hover": { color: "secondary.dark" } }} color="inherit">
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default MainMenu;
