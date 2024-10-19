import { Box } from "@mui/system";
import Header from "./components/Header";
import LpList from "./components/LpList";
import { useState } from "react";
import { Grid2 } from "@mui/material";

function App() {
  const [size, setSize] = useState("");

  return (
    <Box>
      <Header />
      <Grid2 container width={{ lg: "35%" }}>
        <Grid2 item>
          <LpList />
        </Grid2>
      </Grid2>
    </Box>
  );
}
export default App;
