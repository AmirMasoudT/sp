import {
  Avatar,
  Card,
  CardContent,
  dividerClasses,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
  Box,
  Divider,
  Zoom,
  Grow,
  Grid2,
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsIcon from "@mui/icons-material/Directions";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import QrCodeIcon from "@mui/icons-material/QrCode";
import TimerIcon from "@mui/icons-material/Timer";
import WarningIcon from "@mui/icons-material/Warning";
import DatasetIcon from "@mui/icons-material/Dataset";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SpeedIcon from "@mui/icons-material/Speed";
import { fakeData } from "../../../data/fakeData";
import { useSelection } from "../../../utils/SelectionContext";
import Rtl from "../../../utils/Rtl";
import { Stack } from "@mui/system";

const DataDisplay = () => {
  const { selected } = useSelection();
  const selectedObject = fakeData.find((object) => object.id === selected);

  if (!selected)
    return (
      <Zoom in>
        <Paper elevation={2} sx={{ width: "100%", height: "100%" }}>
          <Stack alignItems="center" justifyContent="center" height="100%">
            <DatasetIcon sx={{ fontSize: 60, color: "text.disabled", mb: 2 }} />
            <Typography variant="h6">داده ای برای نمایش نیست</Typography>
          </Stack>
        </Paper>
      </Zoom>
    );
  return (
    <Grow in timeout={500}>
      <Paper elevation={2} sx={{ height: "100%" }}>
        <Grid2 container>
          <Grid2 size={6}>
            <Rtl>
              <List
                dense
                disablePadding
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& .MuiAvatar-root": {
                    bgcolor: "primary.main",
                    width: 35,
                    height: 35,
                  },
                  "& .MuiListItem-root": {
                    width: { xs: "100%", sm: "50%" },
                    boxSizing: "border-box",
                  },
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DirectionsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="محل عبور"
                    secondary={selectedObject.passageWay}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationCityIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="محور عبور"
                    secondary={selectedObject.passageCity}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccessTimeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="ساعت عبور"
                    secondary={selectedObject.travelTime}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CameraAltIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="گروه دوربین"
                    secondary={selectedObject.senderCam}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <QrCodeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="کد دوربین"
                    secondary={selectedObject.camCode}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <TimerIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="میزان تاخیر"
                    secondary={`${selectedObject.delay} ثانیه`}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="کد استان"
                    secondary={selectedObject.cityCode}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SpeedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="سرعت"
                    secondary={`${selectedObject.speed} کیلومتر بر ساعت`}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CalendarMonthIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="تاریخ عبور"
                    secondary={selectedObject.passageDate}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocalPoliceIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="ایست بازرسی"
                    secondary={selectedObject.checkingStation}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WarningIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="نوع تخلف"
                    secondary={
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          bgcolor: selectedObject.status,
                        }}
                      />
                    }
                  />
                </ListItem>
              </List>
            </Rtl>
          </Grid2>
        </Grid2>
      </Paper>
    </Grow>
  );
};

export default DataDisplay;
