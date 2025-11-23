import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useSwitchTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      useLocalStorage("dark");
    } else {
      document.documentElement.classList.remove("dark");
      useLocalStorage("light");
    }
  }, [theme]);

  function switchTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return { theme, switchTheme };
}
