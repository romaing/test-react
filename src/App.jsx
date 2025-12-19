import { useState, useEffect } from "react";
import ProjectItem from "./components/ProjectItem";

const API_URL = "http://localhost:3001/projects";

function App() {
  const [projects, setProjects] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Charger les projets depuis le serveur
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setActiveProjectId(data[0]?.id || null);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur chargement projets :", err);
        setLoading(false);
      });
  }, []);

  // Sauvegarder les projets sur le serveur à chaque changement
  useEffect(() => {
    if (!loading) {
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projects)
      }).catch(err => console.error("Erreur sauvegarde projets :", err));
    }
  }, [projects, loading]);

  function addProject() {
    const newProject = {
      id: Date.now(),
      title: "Nouveau projet",
      tasks: []
    };
    setProjects([...projects, newProject]);
    setActiveProjectId(newProject.id);
  }

  function updateProject(updatedProject) {
    setProjects(projects.map(p => (p.id === updatedProject.id ? updatedProject : p)));
  }

  function deleteProject(projectId) {
    const filtered = projects.filter(p => p.id !== projectId);
    setProjects(filtered);
    if (activeProjectId === projectId) {
      setActiveProjectId(filtered[0]?.id || null);
    }
  }

  if (loading) return <div>Chargement des projets...</div>;

  return (
    <div style={{ padding: 16 }}>
      <h1>Gestion de projets</h1>

      {/* Onglets projets */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {projects.map(p => (
          <button
            key={p.id}
            onClick={() => setActiveProjectId(p.id)}
            style={{
              padding: "4px 8px",
              background: p.id === activeProjectId ? "#007bff" : "#eee",
              color: p.id === activeProjectId ? "#fff" : "#000",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            {p.title || "Sans titre"}
          </button>
        ))}
        <button onClick={addProject} style={{ padding: "4px 8px", borderRadius: 4 }}>+</button>
      </div>

      {/* Projet actif */}
      {activeProjectId && (
        <ProjectItem
          project={projects.find(p => p.id === activeProjectId)}
          onUpdate={updateProject}
          onDelete={deleteProject}
        />
      )}
    </div>
  );
}

export default App;
