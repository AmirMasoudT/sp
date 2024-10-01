import { useEffect, useState } from "react";

const ShowClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      {time.toLocaleString("fa-IR", {
        hour: "numeric",
        minute: "numeric",
        second: "2-digit",
      })}
    </div>
  );
};

export default ShowClock;
