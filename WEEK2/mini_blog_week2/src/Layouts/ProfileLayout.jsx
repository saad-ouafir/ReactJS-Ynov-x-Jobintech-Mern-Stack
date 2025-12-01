import { NavLink, Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className="flex gap-4 p-4 bg-gray-900 text-white">
      <aside className="w-1/6 bg-slate-800 rounded-lg p-4 h-4/5">
        <nav>
          <ul className="space-y-2">
            <li className="rounded-md overflow-hidden">
              <NavLink
                to="info"
                className={({ isActive }) =>
                  `block p-2 w-full text-left transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-700 text-gray-300"
                  }`
                }>
                Profile Info
              </NavLink>
            </li>
            <li className="rounded-md overflow-hidden">
              <NavLink
                to="posts"
                className={({ isActive }) =>
                  `block p-2 w-full text-left transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-700 text-gray-300"
                  }`
                }>
                Posts
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="w-5/6 bg-gray-800 rounded-lg p-4">
        <Outlet />
      </main>
    </div>
  );
}
