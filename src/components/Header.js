import { Grid2, Typography } from "@mui/material";
import ShowClock from "./ShowClock";
import AccountMenu from "./AccountMenu";
import MainMenu from "./MainMenu";

const Header = () => {
  return (
    <Grid2
      container
      direction="column"
      color="secondary.light"
      bgcolor="primary.main"
      sx={{
        p: 1,
      }}
    >
      <Grid2 container alignItems="center" justifyContent="space-between">
        <Grid2 item>
          <Typography
            variant="h6"
            component="h1"
            align="center"
            sx={{ fontWeight: 700 }}
          >
            سامانه پایش پلاک‌های دستور دار
          </Typography>
        </Grid2>
        <Grid2 item sx={{ textAlign: "center" }}>
          <ShowClock />
        </Grid2>
      </Grid2>
      <Grid2 container alignItems="center" justifyContent="space-between">
        <Grid2 item>
          <MainMenu />
        </Grid2>
        <Grid2 item>
          <AccountMenu />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Header;
