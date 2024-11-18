import { Box } from "@mui/system";
import Header from "./layout/header/Header";
import LpList from "./features/LpList/views/LpList";
import { useState } from "react";
import { Grid2 } from "@mui/material";
import DataDisplay from "./features/DataDisplay/views/DataDisplay";

function App() {
  const [selected, setselected] = useState("");
  const getSelected = (index) => {
    setselected(index);
  };

  return (
    <Box>
      <Header />
      <Grid2 container>
        <Grid2 item width={{ md: "40%", lg: "30%" }}>
          <LpList selected={getSelected} />
        </Grid2>
        <Grid2 item>
          <DataDisplay selected={selected} />
        </Grid2>
      </Grid2>
    </Box>
  );
}
export default App;
