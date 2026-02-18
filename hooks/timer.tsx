import { constructNow, getTime } from "date-fns";
import { useEffect, useState } from "react";

export function useClock() {
  const [now, setNow] = useState<number>(getTime(constructNow(new Date())));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(getTime(constructNow(new Date())));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { now };
}
