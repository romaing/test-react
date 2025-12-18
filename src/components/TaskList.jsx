import TaskItem from "./TaskItem";
import { useState } from "react";

function TaskList({ tasks, onUpdate, onDelete, onReorder }) {
  const [draggingIndex, setDraggingIndex] = useState(null);

  function handleDragStart(index) {
    setDraggingIndex(index);
  }

  function handleDragOver(index) {
    if (draggingIndex === null || draggingIndex === index) return;
    const updatedTasks = Array.from(tasks);
    const [moved] = updatedTasks.splice(draggingIndex, 1);
    updatedTasks.splice(index, 0, moved);
    setDraggingIndex(index);
    onReorder(updatedTasks);
  }

  function handleDragEnd() {
    setDraggingIndex(null);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {tasks.map((task, index) => (
        <div
          key={task.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={e => { e.preventDefault(); handleDragOver(index) }}
          onDragEnd={handleDragEnd}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: 4,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
        >
          <div
            style={{
              cursor: "grab",
              padding: "4px 8px",
              background: "#ddd",
              borderRadius: 4,
              marginRight: 8,
              display: "flex",
              alignItems: "center"
            }}
          >
            ☰
          </div>

          <TaskItem
            task={task}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
