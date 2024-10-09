import { Box, Stack } from "@mui/system";
import Header from "./components/Header";
import LpList from "./components/LpList";
import { Grid2 } from "@mui/material";

function App() {
  const [size, setSize] = useState(second);

  return (
    <Box sx={{ height: "100vh", overflow: "auto" }}>
      <Header />
      <Grid2 container sx={{ height: "80vh" }} size={{ lg: 4 }}>
        <Grid2 item sx={{ height: "80%", overflowY: "auto" }}>
          <LpList />
        </Grid2>
      </Grid2>
    </Box>
  );
}
export default App;
