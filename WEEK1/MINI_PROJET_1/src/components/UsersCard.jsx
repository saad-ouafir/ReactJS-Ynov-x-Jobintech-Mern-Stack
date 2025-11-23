import { useState, useRef, useEffect } from "react";
import useFilterData from "../hooks/useFilterData";
import useFetch from "../hooks/useFetch";
import userTimer from "../hooks/useTimer";

export default function UsersCard() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [users, setUsers] = useState([]);
  const [searched, setSearch] = useState("");
  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  const timer = userTimer();

  const [toggle, setToggle] = useState(false);
  let isHidden = toggle;

  const filteredUsers = useFilterData(users, searched);

  if (loading) {
    return (
      <div>
        <h1>Chargement ...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col m-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          <h2 className="font-bold text-lg mb-2">Error !</h2>
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="mt-4">
      <div className="flex justify-between items-center my-8 mx-12">
        <h1 className="text-3xl font-bold">Liste des utilisateurs</h1>
        <h2 className="bg-blue-600 text-white p-2 rounded-md">
          Temps Ecoule : <span className="font-bold ">{timer} s</span>
        </h2>
        <div className="flex justify-between items-center gap-4">
          <div className="">
            <input
              type="text"
              placeholder="Rechercher un utilisateur..."
              onChange={(e) => {
                setSearch(e.currentTarget.value);
              }}
              className="p-2.5 w-80 h-10 rounded-md border text-black border-gray-300 bg-white focus:outline-none"
            />
          </div>
          <button
            className=" p-2 rounded-lg hover:opacity-80 bg-blend-darken bg-black text-white
            "
            onClick={() => setToggle(!isHidden)}
          >
            {isHidden ? "Show" : "Hide"} Details
          </button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className=" p-4 border-2 rounded-lg border-gray-300 ratio-square bg-gray-200 "
          >
            <h3 className="font-bold text-xl pb-2">{user.name}</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <div className={isHidden ? "hidden" : "block"}>
              <p>{user.address.street}</p>
              <p>{user.address.suite}</p>
              <p>{user.address.city}</p>
              <p>{user.address.zipcode}</p>
              <p>
                Lat: {user.address.geo.lat} | Lng: {user.address.geo.lng}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
