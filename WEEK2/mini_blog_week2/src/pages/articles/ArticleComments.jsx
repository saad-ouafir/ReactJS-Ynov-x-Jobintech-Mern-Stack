// import { useParams } from "react-router-dom";

export default function ArticleComments() {
  const fakeComments = [
    {
      id: 1,
      user: "user1",
      comment: "Super article ! Très clair, merci.",
    },
    {
      id: 2,
      user: "user2",
      comment: "J'ai enfin compris les routes dynamiques.",
    },
    {
      id: 3,
      user: "user3",
      comment:
        "J'aime l'utilisation de Redux pour gérer l'état de l'application.",
    },
    {
      id: 4,
      user: "user4",
      comment: "J'aime les Hooks dans React.",
    },
  ];

  // const articleId = useParams();
  return (
    <>
      <div className="mt-8">
        <h1 className="text-3xl">Listes des Commentaires</h1>
        <br />
        <ul>
          {fakeComments.map((comment) => (
            <div
              key={comment.id}
              className="w-full bg-slate-600 rounded-md mb-4 p-2">
              <h4>
                From User : <span className="font-bold">{comment.user}</span>
              </h4>
              <p>{comment.comment}</p>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
