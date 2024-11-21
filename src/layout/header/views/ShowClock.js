import { Stack } from "@mui/system";
import { useEffect, useState } from "react";

let today = new Date().toLocaleDateString("fa-IR", {
  year: "numeric",
  month: "long",
  day: "2-digit",
});

const ShowClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <Stack direction="row" justifyContent="space-between" width="120px">
      <div>{today}</div>
      <div>
        {time.toLocaleString("fa-IR", {
          hour: "numeric",
          minute: "numeric",
          second: "2-digit",
        })}
      </div>
    </Stack>
  );
};

export default ShowClock;
