import { Box, Stack } from "@mui/system";
import Header from "./components/Header";
import LpList from "./components/LpList";
import { Grid2 } from "@mui/material";

function App() {
  return (
    <Box sx={{ height: "100vh", overflow: "auto" }}>
      <Header />
      <Stack direction={{ xs: "column", md: "row" }}>
        <Grid2 container sx={{ height: "70vh" }} size={{ xs: 12, md: 5 }}>
          <Grid2 item sx={{ height: "60%", overflowY: "auto" }}>
            <LpList />
          </Grid2>
        </Grid2>
      </Stack>
    </Box>
  );
}
export default App;
