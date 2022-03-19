// import { FaUniversity, FaReact, FaNodeJs, FaJava, FaPython, FaAws, FaDocker } from 'react-icons/fa';
// import { IoIosSchool, IoIosLink } from 'react-icons/io';
// import { GrCertificate } from 'react-icons/gr';
import { DiJavascript} from 'react-icons/di'; // DiCss3
// import { AiFillHtml5, AiFillApi } from 'react-icons/ai';
// import { SiExpress, SiSpringboot, SiSpring, SiPostgresql, SiMongodb } from 'react-icons/si';

import './shrtproject.scss';

const SHRTProject = () => {
  return (
    <div className="SHRTProject" id="SHRTProject">
      <div className="right">
        <div className="shrtProjectMediaContainer">
          <div className="powerpostProjectGif">
            <a href="https://powerpost.netlify.app" target="_blank">
              <img src="assets/powerpostGIF.gif" alt="" />
            </a>
          </div>
        </div>
        <div className="linksContainer">
            <a href="https://shrtstore.netlify.app" target="_blank">
              <button className="linkButton">
                Live Site</button>
            </a>
            <a href="https://github.com/tylerdowney13/powerpost" target="_blank">
              <button className="linkButton">GitHub</button>
            </a>
          </div>
      </div>
      <div className="left">
        <div className="powerpostProjectTitleContainer">
          <h2>SHRT</h2>
        </div>
        <div className="powerpostProjectSubtitleContainer">
          <h3>E-Commerce Website</h3>
        </div>
        <div className="powerpostProjectInfoContainer">
          <div className="powerpostProjectInfoContainerDescription">
            <div className="titleContainer">
              <span>Description</span>
            </div>
            <p className="descriptionParagraph">
              <b>SHRT</b> is a customer-focused e-commerce website built for great performance and
              scalability. Products are displayed in various formats and users can search through products
              by category. SHRT features an admin console that can be used to add or edit products and
              view statistics about product sales and user activity. The site is designed for growth and 
              administrators can add as many products as they wish.
            </p>
          </div>
          <div className="powerpostProjectInfoContainerBuiltWith">
            <div className="titleContainer">
              <span>Built With</span>
            </div>
            <div className="builtWithIconsContainer">
              <div className="builtWithIconContainer">
                <DiJavascript className="builtWithIcon" />
                <span className="builtWithIconDescription">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SHRTProject;