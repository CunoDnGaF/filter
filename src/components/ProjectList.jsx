const ProjectList = ({ projects }) => {
  return (
    <div className='project-list'>
      {projects.map((project, index) => {
        return (
          <div key={index} className='card'>
            <img src={project.img} alt={project.category} />
          </div>
        );
      })}
    </div>
  )
}

export default ProjectList;