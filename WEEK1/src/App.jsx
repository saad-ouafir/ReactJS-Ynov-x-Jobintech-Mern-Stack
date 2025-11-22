import { useEffect, useRef, useState } from "react";
import useFetch from "./hooks/useFetch";

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import useFilterData from "./hooks/useFilterData";
import useSwitchTheme from "./hooks/useSwitchTheme";
export default function App() {
  // -------------------------------------
  // | fetch des utilisateurs et filtres |
  // -------------------------------------
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  const filteredUsers = useFilterData(users, search);

  // -----------------------------
  // Theme
  // -----------------------------
  const switchThemeBtn = useRef(null);
  const { theme, switchTheme } = useSwitchTheme();

  // -----------------------------
  // Toggle
  // -----------------------------
  const [isHidden, setIsHidden] = useState(false);
  const details = useRef(null);
  function toggleUsersData() {
    setIsHidden((prev) => !prev);
  }

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="">
      <header className="bg-black text-white flex justify-between flex-wrap items-center p-4 px-12">
        <h1 className="font-bold text-lg">Liste des utilisateurs</h1>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="">
            <input
              type="text"
              placeholder="Rechercher un utilisateur..."
              // value={search}
              onChange={(e) => {
                setSearch(e.currentTarget.value);
              }}
              className="p-2.5 w-80 h-10 rounded-md bg-neutral-800 text-white border-2 border-black focus:outline-none"
            />
          </div>
          <div className="w-8" ref={switchThemeBtn} onClick={switchTheme}>
            {localStorage.getItem("theme") === "dark" ? (
              <MoonIcon />
            ) : (
              <SunIcon />
            )}
          </div>
          <button
            className="bg-white text-black p-2 rounded-lg hover:opacity-80"
            id="toggle-btn"
            onClick={toggleUsersData}
          >
            {isHidden ? "Show" : "Hide"} Details
          </button>
        </div>
      </header>
      <section className="mt-10">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className=" p-4 border-2 rounded-lg border-gray-300 ratio-square bg-gray-200 "
            >
              <h3 className="font-bold text-xl pb-2">{user.name}</h3>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <div ref={details} className={isHidden ? "hidden" : "block"}>
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
                <p>{user.address.geo.lat + user.address.geo.lng}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
