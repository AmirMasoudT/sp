import { Button, Divider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const MainMenu = () => {
  const pages = ["اطلاعات پایه", "مدیریت کابران", "سپاپد", "گزارشات", "راهنما"];
  return (
    <Stack
      direction="row"
      divider={
        <Divider
          sx={{ backgroundColor: "inherit" }}
          orientation="vertical"
          flexItem
        />
      }
    >
      {pages.map((page) => (
        <Button sx={{ "&:hover": { color: "secondary.dark" } }} color="inherit">
          {page}
        </Button>
      ))}
    </Stack>
  );
};

export default MainMenu;
