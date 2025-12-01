import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/autSlice";
import users from "../data/users";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const DisplayErrors = () => {
    return (
      <div className="bg-red-700 p-4 m-4 rounded-md">
        <h1>Invalid mail or password</h1>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = users.find((user) => user.email === email);
    if (user) {
      if (String(user.password) === String(password)) {
        dispatch(login({ email: email, role: user.role }));
        return navigate("/admin");
      } else {
        setIsError(true);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        {isError && <DisplayErrors />}
        <div className="bg-slate-800 rounded-lg shadow-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-white mb-6 text-center ">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="********"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200">
              Login
            </button>
          </form>
        </div>
        <div className="mt-4 bg-slate-800 rounded-lg shadow-xl p-8 w-full max-w-md">
          <h3>Test Accounts</h3>
          <ul>
            <li>Admin : admin@mail.com</li>
            <li>User : user@mail.com</li>
            <li>Password : 1234</li>
          </ul>
        </div>
      </div>
    </>
  );
}
