import './projects.scss';

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projectsTitleContainer">
        <h1>Projects</h1>
      </div>
      <div className="projectPanelsContainer">
        <div className="projectPanel1">
          <div className="projectPanel1Info">
            <a href="#powerpostProject">
              <div className="projectPanel1InfoTitleContainer">
              <h2 className="projectPanel1InfoTitle">PowerPost</h2>
              <h2 className="projectPanel1InfoSubtitle">Social Media App</h2>
            </div>
            </a>
          </div>
        </div>
         <div className="projectPanel2">
          <div className="projectPanel1Info">
            <a href="#SHRTProject">
              <div className="projectPanel1InfoTitleContainer">
              <h2 className="projectPanel1InfoTitle">SHRT Store</h2>
              <h2 className="projectPanel1InfoSubtitle">E-Commerce Website</h2>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects