import React from "react"

import { useState, useEffect } from "react"
import TaskList from "./TaskList"
import ProjectStats from "./ProjectStats"

function ProjectItem({ project, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false)
  const [localTitle, setLocalTitle] = useState(project.title)

  useEffect(() => {
    // Mettre à jour le titre local si le projet change
    setLocalTitle(project.title)
  }, [project.title])

  function saveTitle() {
    onUpdate({ ...project, title: localTitle })
    setEditing(false)
  }

  function handleTaskUpdate(updatedTask) {
    const updatedTasks = project.tasks.map(t =>
      t.id === updatedTask.id ? { ...updatedTask, editing: false } : t
    )
    onUpdate({ ...project, tasks: updatedTasks })
  }

  function handleTaskDelete(taskId) {
    const updatedTasks = project.tasks.filter(t => t.id !== taskId)
    onUpdate({ ...project, tasks: updatedTasks })
  }

  function handleTaskReorder(updatedTasks) {
    onUpdate({ ...project, tasks: updatedTasks })
  }

  function addTask() {
    const newTask = {
      id: Date.now(),
      title: "Nouvelle tâche",
      user: "",
      value: "",
      status: "backlog",
      estimate: 1,
      editing: true
    }
    onUpdate({ ...project, tasks: [...project.tasks, newTask] })
  }

  return (
    <div>
      <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
        {editing ? (
          <>
            <input
              value={localTitle}
              onChange={(e) => setLocalTitle(e.target.value)}
            />
            <button onClick={saveTitle}>Enregistrer</button>
            <button onClick={() => onDelete(project.id)}>Supprimer projet</button>
          </>
        ) : (
          <>
            <h2 style={{ margin: 0, cursor: "pointer" }} onClick={() => setEditing(true)}>
              {project.title}
            </h2>
          </>
        )}
        <button onClick={addTask}>+ Tâche</button>
      </div>

      <ProjectStats tasks={project.tasks} />

      <TaskList
        tasks={project.tasks}
        onUpdate={handleTaskUpdate}
        onDelete={handleTaskDelete}
        onReorder={handleTaskReorder}
      />
    </div>
  )
}

export default ProjectItem
