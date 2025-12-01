import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/3 p-12 flex flex-col items-center bg-slate-800  rounded-md justify-center">
        <h1 className="text-3xl mb-4">Bienvenue sur le Mini-Blog !</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/articles")}>
          voir les articles
        </button>
      </div>
    </div>
  );
}
