import { Stack } from "@mui/system";
import { fakeData } from "../../../data/fakeData";
import {
  Avatar,
  Card,
  CardActionArea,
  Divider,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import { useState } from "react";
import FilterSelect from "../../../components/FilterSelect";
import Rtl from "../../../utils/Rtl";

const LpList = () => {
  const [sender, setSender] = useState("");
  const handleSender = (event) => {
    setSender(event.target.value);
  };
  const [pursuitReason, setPursuitReason] = useState("");
  const handlePursuitReason = (event) => {
    setPursuitReason(event.target.value);
  };

  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (e, index) => {
    setSelectedIndex(index);
  };

  const filteredList = fakeData.filter(
    (car) =>
      (sender === "" || car.senderCam === sender) &&
      (pursuitReason === "" || car.pursuitReason === pursuitReason)
  );

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
      {/* <Stack
        p={0.5}
        m={0.5}
        mt={1.4}
        spacing={0.6}
        sx={{
          overflowY: "auto",
          scrollbarWidth: "thin",
        }}
      >
        <Stack
          direction={"row"}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{
            zIndex: 1,
            position: "sticky",
            top: 0,
            transform: "translateY(-3px)",
            py: 0.5,
            outline: "1px solid black",
            borderRadius: "4px",
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
        {filteredList.map((car) => {
          return (
            <Card
              sx={{
                overflow: "visible",
                outline: 1,
                outlineColor: "primary.main",
                borderRight: "10px solid",
                borderRightColor: car.status,
              }}
            >
              <CardActionArea>
                <Stack
                  direction={"row"}
                  sx={{ fontSize: "0.65rem", fontWeight: "bold" }}
                  divider={
                    <Divider
                      sx={{
                        borderColor: "primary.main",
                      }}
                      orientation="vertical"
                      flexItem
                    />
                  }
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
              </CardActionArea>
            </Card>
          );
        })}
      </Stack> */}
      <Rtl>
        <List
          sx={{
            width: "100%",
            position: "relative",
            overflow: "auto",
            maxHeight: 320,
            "& ul": { padding: 0 },
          }}
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              لیست پلاک‌ها
            </ListSubheader>
          }
        ></List>
        {filteredList.map((car, index) => {
          return (
            <ListItem alignItems="flex-start">
              <ListItemButton
                selected={selectedIndex === index}
                onClick={(e) => handleListItemClick(e, index)}
              >
                <ListItemText
                  primary={car.licenseNo}
                  secondary={
                    <>
                      <Stack spacing={1}>
                        <Stack direction="row" alignItems="center">
                          <CarCrashIcon sx={{ display: "inline" }} />
                          <Typography
                            variant="body2"
                            sx={{ color: "text.primary" }}
                          >
                            {car.travelTime}
                          </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                          <CarCrashIcon sx={{ display: "inline" }} />
                          <Typography
                            variant="body2"
                            sx={{ color: "text.primary" }}
                          >
                            {car.pursuitReason}
                          </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                          <CarCrashIcon sx={{ display: "inline" }} />
                          <Typography
                            variant="body2"
                            sx={{ color: "text.primary" }}
                          >
                            {car.passageCity}
                            <br />
                            {car.passageWay}
                          </Typography>
                        </Stack>
                      </Stack>
                    </>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </Rtl>
    </Stack>
  );
};

export default LpList;
