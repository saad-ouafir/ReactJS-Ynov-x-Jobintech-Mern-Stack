import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import useSwitchTheme from "../hooks/useSwitchTheme";
import { useState, useRef } from "react";
// import useToggle from "../hooks/useToggle";

export default function NavBar() {
  const switchThemeBtn = useRef(null);
  const { theme, switchTheme } = useSwitchTheme();

  return (
    <>
      <header className="bg-black text-white flex justify-between flex-wrap items-center p-4 px-12">
        <h1 className="font-bold text-lg">Mini Projet N1 - Ynov x JobinTech</h1>
        <div className="w-8" ref={switchThemeBtn} onClick={switchTheme}>
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </div>
      </header>
    </>
  );
}
