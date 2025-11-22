import { useEffect, useState } from "react";

export default function userTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timer;
}
