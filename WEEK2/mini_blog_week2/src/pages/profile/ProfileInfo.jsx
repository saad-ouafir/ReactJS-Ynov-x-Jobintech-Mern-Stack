import { useSelector } from "react-redux";

export default function ProfileInfo() {
  const user = useSelector((state) => state.auth);
  return (
    <>
      <h1 className="text-3xl font-bold w-full">Profile</h1>
      <div className="bg-slate-800 rounded-md p-4 w-full">
        <p>
          <span className="font-bold mb-4">Email</span>: {user.email}
        </p>
        <p>
          <span className="font-bold">Role</span>: {user.userRole}
        </p>
      </div>
    </>
  );
}
