import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-8">
        <div className="w-full flex justify-center">
          <div className="w-1/3 p-12 flex flex-col items-center bg-gray-800 rounded-md justify-center">
            <h1 className="text-3xl mb-4 font-bold text-white">
              404 - Page Not Found
            </h1>
            <button className="bg-red-600 rounded-md p-4">
              <Link to={"/"}>Back to Home</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
