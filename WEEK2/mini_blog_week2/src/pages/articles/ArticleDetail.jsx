import { Outlet, useParams, Link } from "react-router-dom";
import articles from "../../data/articles";
export default function ArticleDetail() {
  const articelId = useParams();
  if (articles[articelId.id] === undefined) {
    return (
      <div className="p-8 flex flex-col items-center bg-red-500 rounded-md justify-center">
        <h1 className="text-3xl mb-4 font-bold text-white">
          404 - Section Articles : page introuvable.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className=" p-12 flex flex-col  bg-blue-900 rounded-md justify-center">
        <h1 className="text-3xl mb-4 font-bold border-b-2 border-slate-200">
          {articles[articelId.id].titre}
        </h1>
        <p className="text-xl">{articles[articelId.id].contenu}</p>
      </div>
      <button className="mt-4 w-fit p-4 bg-blue-500 rounded-md">
        <Link to="comments">Display comments</Link>
      </button>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
