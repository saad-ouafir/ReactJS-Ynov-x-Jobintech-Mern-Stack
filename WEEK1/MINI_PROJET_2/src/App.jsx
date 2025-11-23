import { useEffect, useRef, useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";
const INITIAL_TACHES = [
  { id: 1, texte: "Apprendre React", fait: true },
  { id: 2, texte: "Faire les exercices", fait: false },
  { id: 3, texte: "Boire un café", fait: false },
];

function App() {
  const [taches, setTaches] = useState(INITIAL_TACHES);
  const [filtre, setFiltre] = useState("toutes"); // "toutes" | "faites" | "a-faire"
  const [dark, setDark] = useState(false);
  const [nouvelleTache, setNouvelleTache] = useState("");

  const tachesAffichees =
    filtre === "toutes"
      ? taches
      : filtre === "faites"
      ? taches.filter((t) => t.fait)
      : taches.filter((t) => !t.fait);

  function addTask() {
    if (nouvelleTache.trim() === "") {
      return window.alert("Veuillez renseigner le champs");
    }

    const nouvelleTacheObjet = {
      id: Date.now(),
      texte: nouvelleTache,
      fait: false,
    };

    setTaches((prev) => [...prev, nouvelleTacheObjet]);
    setNouvelleTache("");
  }

  function handleToggle(id) {
    setTaches((prev) =>
      prev.map((tache) =>
        tache.id === id ? { ...tache, fait: !tache.fait } : tache
      )
    );
  }

  function handleDelete(id) {
    setTaches((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className={dark ? "app dark" : "app"}>
      <h1>Ma Liste de Tâches</h1>

      {/* Toolbar */}
      <div className="toolbar">
        <div className="filtres">
          <button
            className={filtre === "toutes" ? "actif" : ""}
            onClick={() => setFiltre("toutes")}
          >
            Toutes
          </button>

          <button
            className={filtre === "faites" ? "actif" : ""}
            onClick={() => setFiltre("faites")}
          >
            Fait
          </button>

          <button
            className={filtre === "a-faire" ? "actif" : ""}
            onClick={() => setFiltre("a-faire")}
          >
            À faire
          </button>
        </div>

        <form action="" onSubmit={(e) => e.preventDefault()}>
          <p>Ajouter une tache :</p>
          <input
            type="text"
            value={nouvelleTache}
            onChange={(e) => setNouvelleTache(e.target.value)}
            placeholder="Ajouter une tache"
          />
          <input type="submit" value="Ajouter" onClick={addTask} />
        </form>

        {/* Bouton thème */}
        <button className="theme-btn" onClick={() => setDark((d) => !d)}>
          {dark ? "🌞 Clair" : "🌙 Sombre"}
        </button>
      </div>

      <TaskList
        taches={tachesAffichees}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
