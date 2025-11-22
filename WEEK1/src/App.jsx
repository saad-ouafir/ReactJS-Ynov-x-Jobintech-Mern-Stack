import { useEffect, useRef, useState } from "react";
import useFetch from "./hooks/useFetch";

import UsersCard from "./components/UsersCard";
import NavBar from "./components/NavBar";

export default function App() {

  return (
    <>
      <NavBar />
      <UsersCard />
    </>
  );
}
