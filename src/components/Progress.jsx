function Progress({ items }) {
    const done = items.filter(item => item.status === "done").length
    const percent = Math.round((done / items.length) * 100)
  
    return (
      <div style={{ marginBottom: 16 }}>
        <strong>Avancement produit : {percent}%</strong>
      </div>
    )
  }
  
  export default Progress
  