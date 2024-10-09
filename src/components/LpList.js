import { borderLeft, Box, Stack } from "@mui/system";
import { fakeData } from "../data/fakeData";
import { Divider, Typography } from "@mui/material";

const LpList = () => {
  return (
    <Stack divider={<Divider flexItem />}>
      <Stack
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          height: 30,
          bgcolor: "secondary.main",
          color: "primary.main",
          pr: "10px",
          fontSize: "0.8rem",
        }}
      >
        <Typography
          fontSize={"inherit"}
          width={125}
          textAlign={"center"}
          alignContent={"center"}
        >
          شماره پلاک
        </Typography>
        <Typography
          fontSize={"inherit"}
          width={80}
          textAlign={"center"}
          alignContent={"center"}
        >
          زمان تردد
        </Typography>
        <Typography
          fontSize={"inherit"}
          width={150}
          textAlign={"center"}
          alignContent={"center"}
        >
          علت تعقیب
        </Typography>
        <Typography
          fontSize={"inherit"}
          width={350}
          textAlign={"center"}
          alignContent={"center"}
          pr={1}
        >
          محل عبور
        </Typography>
      </Stack>
      {fakeData.map((car) => {
        return (
          <Stack
            direction={"row"}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
              height: 50,
              borderRight: "10px solid",
              borderRightColor: car.status,
              borderRadius: "5px",
              fontSize: "0.8rem",
            }}
          >
            <Typography
              fontSize={"inherit"}
              width={125}
              textAlign={"center"}
              alignContent={"center"}
            >
              {car.licenseNo}
            </Typography>
            <Typography
              fontSize={"inherit"}
              width={80}
              textAlign={"center"}
              alignContent={"center"}
            >
              {car.travelTime}
            </Typography>
            <Typography
              fontSize={"inherit"}
              width={150}
              textAlign={"center"}
              alignContent={"center"}
            >
              {car.pursuitReason}
            </Typography>
            <Typography
              fontSize={"inherit"}
              pr={1}
              width={350}
              textAlign={"right"}
              alignContent={"center"}
            >
              {car.passageCity}
              <br /> {car.senderCam}، {car.passageWay}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default LpList;
