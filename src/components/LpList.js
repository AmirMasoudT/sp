import { Stack } from "@mui/system";
import { fakeData } from "../data/fakeData";
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Rtl from "../Rtl";
import FilterSelect from "./FilterSelect";

const LpList = () => {
  const [sender, setSender] = useState("");
  const handleSender = (event) => {
    setSender(event.target.value);
  };
  const [pursuitReason, setPursuitReason] = useState("");
  const handlePursuitReason = (event) => {
    setPursuitReason(event.target.value);
  };

  return (
    <Stack height={"87vh"}>
      <FilterSelect
        id="listSender"
        value={sender}
        label="فرستنده"
        onChange={handleSender}
        listArray={fakeData.map((car) => car.senderCam)}
      />
      <FilterSelect
        id="listPursuitReason"
        value={pursuitReason}
        label="گروه علت تعقیب"
        onChange={handlePursuitReason}
        listArray={fakeData.map((car) => car.pursuitReason)}
      />
      <Stack
        pt={0.5}
        px={1}
        m={0.5}
        mt={1.4}
        spacing={0.2}
        sx={{ overflowY: "auto" }}
        divider={<Divider flexItem />}
      >
        <Stack
          direction={"row"}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{
            position: "sticky",
            top: 0,
            py: 0.5,
            outline: "1px solid black",
            borderRadius: "5px",
            bgcolor: "secondary.main",
            color: "primary.main",
            pr: "10px",
            fontSize: "0.7rem",
            fontWeight: "bold",
          }}
        >
          <Typography
            fontWeight={"inherit"}
            fontSize={"inherit"}
            width={125}
            textAlign={"center"}
            alignContent={"center"}
          >
            شماره پلاک
          </Typography>
          <Typography
            fontWeight={"inherit"}
            fontSize={"inherit"}
            width={80}
            textAlign={"center"}
            alignContent={"center"}
          >
            زمان تردد
          </Typography>
          <Typography
            fontWeight={"inherit"}
            fontSize={"inherit"}
            width={150}
            textAlign={"center"}
            alignContent={"center"}
          >
            علت تعقیب
          </Typography>
          <Typography
            fontWeight={"inherit"}
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
              divider={
                <Divider
                  sx={{ borderColor: "primary.main" }}
                  orientation="vertical"
                  flexItem
                />
              }
              sx={{
                height: 35,
                outline: 1,
                outlineColor: "primary.main",
                borderRight: "10px solid",
                borderRightColor: car.status,
                borderRadius: "5px",
                fontSize: "0.65rem",
                fontWeight: "bold",
              }}
            >
              <Typography
                fontWeight={"inherit"}
                fontSize={"inherit"}
                width={125}
                textAlign={"center"}
                alignContent={"center"}
              >
                {car.licenseNo}
              </Typography>
              <Typography
                fontWeight={"inherit"}
                fontSize={"inherit"}
                width={80}
                textAlign={"center"}
                alignContent={"center"}
              >
                {car.travelTime}
              </Typography>
              <Typography
                fontWeight={"inherit"}
                fontSize={"inherit"}
                width={150}
                textAlign={"center"}
                alignContent={"center"}
              >
                {car.pursuitReason}
              </Typography>
              <Typography
                fontWeight={"inherit"}
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
    </Stack>
  );
};

export default LpList;
