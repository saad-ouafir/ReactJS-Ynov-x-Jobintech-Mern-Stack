export default function About() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-1/3 p-12 flex flex-col items-center bg-slate-800 rounded-md justify-center">
          <h1 className="text-3xl mb-4">Bienvenue sur le Mini-Blog !</h1>
          <ul>
            <li>Apprendre React JS</li>
            <li>Apprendre React Router</li>
            <li>Apprendre Redux</li>
          </ul>
        </div>
      </div>
    </>
  );
}
