import { useState, useEffect } from "react";
import ProjectItem from "./components/ProjectItem";
import { initialProjects } from "./data/backlog";

const STORAGE_KEY = "demoReactProjects";

function App() {
  const [projects, setProjects] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const savedProjects = JSON.parse(saved);
      setProjects(savedProjects);
      setActiveProjectId(savedProjects[0]?.id || null);
    } else {
      setProjects(initialProjects);
      setActiveProjectId(initialProjects[0]?.id || null);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProjects));
    }
  }, []);

  useEffect(() => {
    if (projects.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }
  }, [projects]);

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

  return (
    <div style={{ padding: 16 }}>
      <h1>Gestion de projets</h1>

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
