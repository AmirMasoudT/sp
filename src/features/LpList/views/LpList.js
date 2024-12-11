import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DirectionsIcon from "@mui/icons-material/Directions";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import WarningIcon from "@mui/icons-material/Warning";
import {
  Grow,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader
} from "@mui/material";
import {
  Stack
} from "@mui/system";
import { useEffect, useState } from "react";
import FilterSelect from "../../../components/FilterSelect";
import LicensePlate from "../../../components/LicensePlate";
import { fakeData } from "../../../data/fakeData";
import Rtl from "../../../utils/Rtl";
import { useSelection } from "../../../utils/SelectionContext";

const LpList = () => {
  const { selected, setSelected } = useSelection();

  const [sender, setSender] = useState("");
  const handleSender = (event) => {
    setSender(event.target.value);
  };
  const [pursuitReason, setPursuitReason] = useState("");
  const handlePursuitReason = (event) => {
    setPursuitReason(event.target.value);
  };

  const handleListItemClick = (id) => {
    setSelected(id);
  };

  const filteredList = fakeData.filter(
    (car) =>
      (sender === "" || car.senderCam === sender) &&
      (pursuitReason === "" || car.pursuitReason === pursuitReason)
  );

  useEffect(() => {
    if (selected !== null && !filteredList.some((car) => car.id === selected)) {
      setSelected(null);
    }
  }, [filteredList, selected]);

  return (
    <Grow in>
      <Stack sx={{ height: "100%" }}>
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
                color: "var(--mui-palette-primary-dark) !important",
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
              {filteredList.map((car) => {
                return (
                  <ListItem alignItems="flex-start" disableGutters>
                    <ListItemButton
                      selected={selected === car.id}
                      onClick={() => handleListItemClick(car.id)}
                      sx={{ borderRadius: 2 }}
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
                        <LicensePlate licenseNo={car.licenseNo} />
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
                          <WarningIcon fontSize="2px" />
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
                          <LocationCityIcon fontSize="2px" />
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
                          <CameraAltIcon fontSize="2px" />
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
                          <DirectionsIcon fontSize="2px" />
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
