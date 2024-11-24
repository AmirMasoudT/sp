import { Box } from "@mui/system";
import Header from "./layout/header/Header";
import LpList from "./features/LpList/views/LpList";
import { Grid2 } from "@mui/material";
import DataDisplay from "./features/DataDisplay/views/DataDisplay";
import { SelectionProvider } from "./utils/SelectionContext";

function App() {
  return (
    <Box>
      <Header />
      <Grid2 container>
        <SelectionProvider>
          <Grid2 item width={{ md: "40%", lg: "30%" }}>
            <LpList />
          </Grid2>
          <Grid2 item sx={{ p: 1.5 }} width={{ md: "60%", lg: "70%" }}>
            <DataDisplay />
          </Grid2>
        </SelectionProvider>
      </Grid2>
    </Box>
  );
}
export default App;
