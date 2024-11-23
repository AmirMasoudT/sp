import {
  Card,
  CardContent,
  dividerClasses,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
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
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText></ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
};

export default DataDisplay;
