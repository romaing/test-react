import React, { useState, useEffect } from "react";

function TaskItem({ task, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(task.editing || false);
  const [localTask, setLocalTask] = useState(task);

  useEffect(() => {
    setEditing(task.editing || false);
    setLocalTask(task);
  }, [task]);

  function saveTask() {
    onUpdate({ ...localTask, editing: false });
    setEditing(false);
  }

  const statusProgress = {
    backlog: 0,
    ready: 25,
    "in-progress": 50,
    done: 100,
  };
  const progress = statusProgress[localTask.status] || 0;

  const statusColor = {
    backlog: "#ccc",
    ready: "#2196f3",
    "in-progress": "#ff9800",
    done: "#4caf50",
  };
  const progressColor = statusColor[localTask.status] || "#ccc";

  return (
    <div style={{ flex: 1 }}>
      {editing ? (
        <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
          <input
            value={localTask.title}
            onChange={(e) =>
              setLocalTask({ ...localTask, title: e.target.value })
            }
            placeholder="Titre"
          />
          <input
            value={localTask.user}
            onChange={(e) =>
              setLocalTask({ ...localTask, user: e.target.value })
            }
            placeholder="Utilisateur"
          />
          <input
            value={localTask.value}
            onChange={(e) =>
              setLocalTask({ ...localTask, value: e.target.value })
            }
            placeholder="Valeur"
          />
          <select
            value={localTask.status}
            onChange={(e) =>
              setLocalTask({ ...localTask, status: e.target.value })
            }
          >
            <option value="backlog">Backlog</option>
            <option value="ready">Prêt</option>
            <option value="in-progress">En cours</option>
            <option value="done">Terminé</option>
          </select>
          <input
            type="number"
            value={localTask.estimate}
            onChange={(e) =>
              setLocalTask({ ...localTask, estimate: Number(e.target.value) })
            }
            placeholder="Estimation (jours)"
          />
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={saveTask}>Enregistrer</button>
            <button onClick={() => onDelete(task.id)}>Supprimer</button>
          </div>
        </div>
      ) : (
        <div style={{ cursor: "pointer" }} onClick={() => setEditing(true)}>
          <strong>{task.title}</strong> - {task.user} - {task.value} -{" "}
          {task.status} - {task.estimate}j
          <div
            style={{
              height: 8,
              background: "#eee",
              borderRadius: 4,
              marginTop: 4,
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: progressColor,
                borderRadius: 4,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}


export default TaskItem;
