import { useDispatch } from "react-redux";
import { logout } from "../features/auth/autSlice";
export default function Admin() {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-1/4 bg-slate-800 rounded-md p-4 py-8">
        <h1 className="text-3xl mb-2">Admin Dashboard</h1>
        <p className="mb-4">Cette zone est protegee</p>
        <button
          onClick={() => dispatch(logout())}
          className="bg-red-500 p-2 rounded-sm">
          Se deconnecter
        </button>
      </div>
    </div>
  );
}
