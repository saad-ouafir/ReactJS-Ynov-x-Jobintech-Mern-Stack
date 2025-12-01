import { useSelector } from "react-redux";
import usersPosts from "../../data/articles";
export default function ProfilePosts() {
  const user = useSelector((state) => state.auth);
  return (
    <>
      {usersPosts.map((post) => {
        if (post.user === user.email) {
          return (
            <div
              className="bg-slate-800 rounded-md p-4 w-full mb-8"
              key={post.id}>
              <h2 className="trext-4xl font-bold mb-2">{post.titre}</h2>
              <p className="">{post.contenu}</p>
            </div>
          );
        }
      })}
    </>
  );
}
