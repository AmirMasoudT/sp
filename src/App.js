import { Box, Stack } from "@mui/system";
import Header from "./components/Header";
import LpList from "./components/LpList";
import { Grid2 } from "@mui/material";
import { useState } from "react";

function App() {
  const [size, setSize] = useState("");

  return (
    <Box>
      <Header />
      <Grid2 container width={{ lg: "35%" }}>
        <Grid2 item sx={{ height: "60%", overflowY: "auto" }}>
          <LpList />
        </Grid2>
      </Grid2>
    </Box>
  );
}
export default App;
