import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";

const AccountMenu = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Tooltip title="تنظیمات حساب کاربری">
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Tooltip>
      <div>اطلاعات پروفایل</div>
    </Box>
  );
};

export default AccountMenu;
