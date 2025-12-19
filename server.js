const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, "projects.json");

// Charger les projets depuis le fichier JSON
function loadProjects() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const data = fs.readFileSync(DATA_FILE, "utf8");
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Sauvegarder les projets dans le fichier JSON
function saveProjects(projects) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2));
}

// GET /projects
app.get("/projects", (req, res) => {
  const projects = loadProjects();
  res.json(projects);
});

// POST /projects
app.post("/projects", (req, res) => {
  const projects = req.body;
  saveProjects(projects);
  res.json({ status: "ok" });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Serveur projet Node.js démarré sur http://localhost:${PORT}`));
