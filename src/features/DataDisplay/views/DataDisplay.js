import {
  Card,
  CardContent,
  dividerClasses,
  Paper,
  Typography,
} from "@mui/material";
import { fakeData } from "../../../data/fakeData";
import { useSelection } from "../../../utils/SelectionContext";

const DataDisplay = () => {
  const { selected } = useSelection();
  const selectedObject = fakeData.find((object) => object.id === selected);

  if (!selected) return <div>داده ای برای نمایش نیست</div>;
  return (
    <Paper elevation={2}>
      <Card>
        <CardContent>
          <Typography>محل عبور</Typography>
          <Typography>{selectedObject.passageWay}</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default DataDisplay;
