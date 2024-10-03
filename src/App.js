import { Box, Stack } from "@mui/system";
import Header from "./components/Header";
import LpList from "./components/LpList";

function App() {
  return (
    <Box>
      <Header />
      <Stack>
        <LpList />
      </Stack>
    </Box>
  );
}
export default App;
