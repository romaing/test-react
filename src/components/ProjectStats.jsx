import React from "react"

function ProjectStats({ tasks }) {
  const total = tasks.length
  const done = tasks.filter(t => t.status === "done").length
  const inProgress = tasks.filter(t => t.status === "in-progress").length
  const backlog = tasks.filter(t => t.status === "backlog").length
  const ready = tasks.filter(t => t.status === "ready").length
  const progress = total ? Math.round((done / total) * 100) : 0

  return (
    <div style={{ marginBottom: 12, padding: 8, border: "1px solid #ccc", borderRadius: 4 }}>
      <div>Total de tâches : {total}</div>
      <div>Backlog : {backlog} | Prête : {ready} | En cours : {inProgress} | Terminé : {done}</div>
      <div>Progression : {progress}%</div>
      <div style={{ height: 8, background: "#eee", borderRadius: 4, marginTop: 4 }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          background: "#4caf50",
          borderRadius: 4
        }}></div>
      </div>
    </div>
  )
}

export default ProjectStats
