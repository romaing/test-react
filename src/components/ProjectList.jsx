import ProjectItem from "./ProjectItem"

function ProjectList({ projects, onUpdate, onDelete }) {
  return (
    <div>
      {projects.map(project => (
        <ProjectItem
          key={project.id}
          project={project}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default ProjectList
