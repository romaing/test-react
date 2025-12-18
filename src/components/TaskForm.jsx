import { useState, useEffect } from "react"

const emptyItem = {
  title: "",
  user: "",
  value: "",
  priority: 1,
  status: "backlog",
  estimate: 1
}

function TaskForm({ onAdd, onUpdate, editingItem }) {
  const [item, setItem] = useState(emptyItem)

  useEffect(() => {
    if (editingItem) {
      setItem(editingItem)
    }
  }, [editingItem])

  function handleChange(e) {
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (editingItem) {
      onUpdate(item)
    } else {
      onAdd({ ...item, id: Date.now() })
    }

    setItem(emptyItem)
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <h3>{editingItem ? "Modifier une user story" : "Ajouter une user story"}</h3>

      <div>
        <label htmlFor="title">Titre</label><br />
        <input
          id="title"
          name="title"
          type="text"
          value={item.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="user">Utilisateur</label><br />
        <input
          id="user"
          name="user"
          type="text"
          value={item.user}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="value">Valeur métier</label><br />
        <input
          id="value"
          name="value"
          type="text"
          value={item.value}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="priority">Priorité</label><br />
        <input
          id="priority"
          name="priority"
          type="number"
          min="1"
          value={item.priority}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="status">Statut</label><br />
        <select
          id="status"
          name="status"
          value={item.status}
          onChange={handleChange}
        >
          <option value="backlog">Backlog</option>
          <option value="ready">Ready</option>
          <option value="in-progress">En cours</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div>
        <label htmlFor="estimate">Estimation (points)</label><br />
        <input
          id="estimate"
          name="estimate"
          type="number"
          min="1"
          value={item.estimate}
          onChange={handleChange}
        />
      </div>

      <button type="submit">
        {editingItem ? "Mettre à jour" : "Ajouter"}
      </button>
    </form>
  )
}

export default TaskForm
