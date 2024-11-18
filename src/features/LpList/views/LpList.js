import {
  bgcolor,
  border,
  borderColor,
  borderRadius,
  Box,
  Stack,
  width,
} from "@mui/system";
import { fakeData } from "../../../data/fakeData";
import {
  Avatar,
  Card,
  CardActionArea,
  Divider,
  Grid2,
  Grow,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SvgIcon,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import { useState } from "react";
import FilterSelect from "../../../components/FilterSelect";
import Rtl from "../../../utils/Rtl";
import IranFlag from "../../../assets/IranFlag.svg";

const LpList = ({ selected }) => {
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
  selected(filteredList[selectedIndex]);

  return (
    <Grow in>
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
              scrollbarWidth: "thin",
              "& ul": { padding: 0 },
              "& .MuiListItemButton-root:hover": {
                bgcolor: "var(--mui-palette-secondary-light) !important",
              },
              "& .Mui-selected": {
                bgcolor: "var(--mui-palette-secondary-main) !important",
                color: "var(--mui-palette-primary-main) !important",
              },
              "& .Mui-selected:hover": {
                bgcolor: "var(--mui-palette-secondary-dark) !important",
              },
            }}
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{
                  color: "#000000",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "1rem",
                  lineHeight: 0.8,
                  py: 1,
                }}
              >
                لیست پلاک‌ها
              </ListSubheader>
            }
          >
            <Stack
              direction="row"
              flexWrap="wrap"
              sx={{
                "& .MuiListItem-root": {
                  width: { sm: 1 / 3, md: "49%" },
                },
              }}
            >
              {filteredList.map((car, index) => {
                return (
                  <ListItem alignItems="flex-start" disableGutters>
                    <ListItemButton
                      selected={selectedIndex === index}
                      onClick={(e) => handleListItemClick(e, index)}
                    >
                      <Stack
                        direction="column"
                        sx={{
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 5,
                            right: 5,
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            bgcolor: car.status,
                          },
                        }}
                      >
                        <Box
                          width="125px"
                          mb={0.5}
                          sx={{
                            bgcolor: "#ffffff",
                            border: 2,
                            borderColor: "#000000",
                            borderRadius: "3px",
                            fontWeight: "600",
                            color: "#000000",
                          }}
                        >
                          <Stack
                            direction="row-reverse"
                            justifyContent="space-between"
                          >
                            <Stack
                              direction="column"
                              justifyContent="space-between"
                              sx={{
                                bgcolor: "blue",
                                width: "11%",
                                p: 0.2,
                              }}
                            >
                              <img width="100%" src={IranFlag} />
                              <Typography
                                sx={{
                                  color: "#ffffff",
                                  fontSize: "0.2rem",
                                  textAlign: "end",
                                }}
                              >
                                I.R. IRAN
                              </Typography>
                            </Stack>
                            <Stack
                              alignSelf="center"
                              direction="row-reverse"
                              justifyContent="space-around"
                              width="100%"
                              px={0.5}
                              letterSpacing={2}
                            >
                              <span>
                                {Number(
                                  car.licenseNo.split(/\s/)[0]
                                ).toLocaleString("fa-IR")}
                              </span>
                              <span>{car.licenseNo.split(/\s/)[1]}</span>
                              <span>
                                {Number(
                                  car.licenseNo.split(/\s/)[2]
                                ).toLocaleString("fa-IR")}
                              </span>
                            </Stack>
                            <Stack
                              sx={{ borderRight: 1, px: 0.3, pb: 0.6 }}
                              spacing={0.5}
                              alignItems="center"
                            >
                              <Typography
                                fontSize="0.5rem"
                                fontWeight="inherit"
                                sx={{
                                  transform: "scaleY(0.5) translateY(-3px)",
                                }}
                              >
                                ایران
                              </Typography>
                              <Typography
                                fontSize="0.8rem"
                                fontWeight="inherit"
                                lineHeight="0.1"
                              >
                                {Number(
                                  car.licenseNo.split(/\s/)[4]
                                ).toLocaleString("fa-IR")}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Box>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.5}
                        >
                          <AccessTimeIcon fontSize="2px" />
                          <ListItemText
                            primary={car.travelTime}
                            primaryTypographyProps={{ fontSize: "0.7rem" }}
                          />
                        </Stack>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.5}
                        >
                          <CarCrashIcon fontSize="2px" />
                          <ListItemText
                            primary={car.pursuitReason}
                            primaryTypographyProps={{ fontSize: "0.7rem" }}
                          />
                        </Stack>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.5}
                        >
                          <SouthAmericaIcon fontSize="2px" />
                          <ListItemText
                            primary={car.passageCity}
                            primaryTypographyProps={{ fontSize: "0.7rem" }}
                          />
                        </Stack>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.5}
                        >
                          <LinkedCameraIcon fontSize="2px" />
                          <ListItemText
                            primary={car.senderCam}
                            primaryTypographyProps={{ fontSize: "0.7rem" }}
                          />
                        </Stack>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.5}
                        >
                          <LocationOnIcon fontSize="2px" />
                          <ListItemText
                            primary={car.passageWay}
                            primaryTypographyProps={{ fontSize: "0.7rem" }}
                          />
                        </Stack>
                      </Stack>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </Stack>
          </List>
        </Rtl>
      </Stack>
    </Grow>
  );
};

export default LpList;
