import { Link, Outlet } from "react-router-dom";
import articles from "../data/articles";
export default function Articles() {
  return (
    <div className="w-full flex gap-4">
      <div className="w-1/4 p-12 bg-slate-800 rounded-md">
        <ul className="list-decimal">
          {articles.map((article) => (
            <li key={article.id} className="hover:text-blue-500 underline mb-2">
              <Link to={`/articles/${article.id}`}>{article.titre}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
