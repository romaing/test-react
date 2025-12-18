function Filters({ onChange }) {
    return (
      <div style={{ marginBottom: 16 }}>
        <strong>Filtrer par statut :</strong>
        <div style={{ marginTop: 8 }}>
          <button onClick={() => onChange("all")}>Tous</button>{" "}
          <button onClick={() => onChange("backlog")}>Backlog</button>{" "}
          <button onClick={() => onChange("ready")}>Ready</button>{" "}
          <button onClick={() => onChange("in-progress")}>En cours</button>{" "}
          <button onClick={() => onChange("done")}>Done</button>
        </div>
      </div>
    )
  }
  
  export default Filters
  