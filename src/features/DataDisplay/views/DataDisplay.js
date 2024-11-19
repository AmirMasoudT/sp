import {
  Card,
  CardContent,
  dividerClasses,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const DataDisplay = ({ selected }) => {
  console.log(selected);
  if (!selected) return <div>داده ای برای نمایش نیست</div>;
  return (
    <Paper elevation={2}>
      <Card>
        <CardContent>
          <Typography>محل عبور</Typography>
          <Typography>{selected.passageWay}</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default DataDisplay;
