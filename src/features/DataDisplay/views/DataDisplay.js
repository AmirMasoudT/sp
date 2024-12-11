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
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  tableCellClasses,
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
import { Stack, styled } from "@mui/system";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.secondary.main,
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.secondary.light,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DataDisplay = () => {
  const { selected } = useSelection();
  const selectedObject = fakeData.find((object) => object.id === selected);
  // Create a new component to handle map movements
  function MapController({ selectedObject }) {
    const map = useMap(); // useMap hook gives us access to the Leaflet map instance
    
    useEffect(() => {
      if (selectedObject) {
        map.flyTo(
          [selectedObject.location.lat, selectedObject.location.lng],
          15, { duration: 0.5 }
        );
      }
    }, [selectedObject, map]);
    
    return null;
  }

  if (!selected)
    return (
      <Zoom in>
        <Paper
          elevation={2}
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Stack alignItems="center" justifyContent="center" height="100%">
            <DatasetIcon sx={{ fontSize: 60, color: "text.disabled", mb: 2 }} />
            <Typography variant="h6">داده ای برای نمایش نیست</Typography>
          </Stack>
        </Paper>
      </Zoom>
    );
  return (
    <Grow in timeout={500}>
      <Paper elevation={2} sx={{ height: "100%", p: 1 }}>
        <Grid2 container spacing={1} sx={{ height: "100%" }}>
          <Grid2 size={12}>
            <Rtl>
              <List
                dense
                disablePadding
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: "space-between",
                  "& .MuiListItemAvatar-root": {
                    minWidth: 40,
                  },
                  "& .MuiAvatar-root": {
                    bgcolor: "primary.main",
                    width: 35,
                    height: 35,
                  },
                  "& .MuiListItem-root": {
                    p: 0.5,
                    bgcolor: "secondary.main",
                    borderRadius: 1,
                    width: "190px",
                    boxSizing: "border-box",
                  },
                  "& .MuiListItemText-root": {
                    m: 0,
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
                    primary="زمان عبور"
                    secondary={`${selectedObject.travelTime} - ${selectedObject.passageDate}`}
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

          <Grid2 sx={{ height: 1 / 2 }} size={6}>
            <img
              src={selectedObject.imageUrl}
              alt="car"
              width="100%"
              height="100%"
            />
          </Grid2>
          <Grid2 size={6}>
            <MapContainer
              center={[
                selectedObject.location.lat,
                selectedObject.location.lng,
              ]}
              zoom={15}

              style={{ width: "100%", height: "100%" }}
            >
              <MapController selectedObject={selectedObject} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[
                  selectedObject.location.lat,
                  selectedObject.location.lng,
                ]}
              >
                <Popup>This is a popup</Popup>
              </Marker>
            </MapContainer>
          </Grid2>

          <Rtl>
            <Grid2 size={2}>
              <TableContainer component={Paper} sx={{ height: 4 / 5 }}>
                <Table
                  sx={{ width: "100%" }}
                  size="small"
                  aria-label="a dense table"
                  stickyHeader
                >
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="center">
                        اطلاعات شماره گذاری
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">
                          سیستم خودرو: {selectedObject.manufacture}
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">
                          رنگ خودرو: {selectedObject.color}
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">
                          تیپ خودرو: {selectedObject.name}
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">کاربری خودرو: -</Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">
                          مدل خودرو: {selectedObject.model}
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">شماره شاسی: -</Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid2>
            <Grid2 size={3}>
              <TableContainer component={Paper} sx={{ height: 4 / 5 }}>
                <Table
                  sx={{ width: "100%" }}
                  size="small"
                  aria-label="a dense table"
                  stickyHeader
                >
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="center">
                        جزئیات تحت تعقیب
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">سیستم خودرو: -</Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">رنگ خودرو: -</Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">تیپ خودرو: -</Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">کاربری خودرو: -</Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">
                          علت تعقیب: {selectedObject.pursuitReason}
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">
                          نوع دستور: {selectedObject.actionAnnounced}
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant="body2">
                          تاریخ دستور: {selectedObject.actionAnnouncedDate}
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid2>
            <Grid2 size={7}>
              <TableContainer component={Paper} sx={{ height: 4 / 5 }}>
                <Table
                  sx={{ width: "100%" }}
                  size="small"
                  aria-label="a dense table"
                  stickyHeader
                >
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="center" colSpan={5}>
                        لیست ترددهای انجام شده اخیر
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell align="center">ردیف</StyledTableCell>
                      <StyledTableCell align="center">نوع تردد</StyledTableCell>
                      <StyledTableCell align="center">محل تردد</StyledTableCell>
                      <StyledTableCell align="center">
                        زمان تردد
                      </StyledTableCell>
                      <StyledTableCell align="center">سرعت</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {selectedObject.recentlySeen.map((item, index) => (
                      <StyledTableRow key={index + 1}>
                        <StyledTableCell>
                          <Typography variant="body2" align="center">
                            {index + 1}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Box
                            sx={{
                              display: "inline-block",
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              bgcolor: item.status,
                            }}
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <Typography variant="body2" align="center">
                            {item.passageWay}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Typography variant="body2" align="center">
                            {item.travelTime}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Typography variant="body2" align="center">
                            {item.speed}
                          </Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid2>
          </Rtl>
        </Grid2>
      </Paper>
    </Grow>
  );
};

export default DataDisplay;
