import { Box, Stack } from "@mui/system";
import { fakeData } from "../data/fakeData";
import { Divider, Typography } from "@mui/material";

const LpList = () => {
  return (
    <Stack divider={<Divider flexItem />}>
      <Stack
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ bgcolor: "secondary.main", color: "primary.main" }}
      >
        <Typography width={120} textAlign={"center"} alignContent={"center"}>
          شماره پلاک
        </Typography>
        <Typography width={80} textAlign={"center"} alignContent={"center"}>
          زمان تردد
        </Typography>
        <Typography width={150} textAlign={"center"} alignContent={"center"}>
          علت تعقیب
        </Typography>
        <Typography width={350} textAlign={"center"} alignContent={"center"}>
          محل عبور
        </Typography>
      </Stack>
      {fakeData.map((car) => {
        return (
          <Stack
            direction={"row"}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Typography
              width={120}
              textAlign={"center"}
              alignContent={"center"}
            >
              {car.licenseNo}
            </Typography>
            <Typography width={80} textAlign={"center"} alignContent={"center"}>
              {car.travelTime}
            </Typography>
            <Typography
              width={150}
              textAlign={"center"}
              alignContent={"center"}
            >
              {car.pursuitReason}
            </Typography>
            <Typography width={350} textAlign={"right"} alignContent={"center"}>
              {car.passageWay}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default LpList;
