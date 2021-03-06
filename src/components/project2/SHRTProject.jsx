import { FaTshirt, FaReact } from 'react-icons/fa';
import { DiJavascript, DiCss3} from 'react-icons/di';
import { AiFillHtml5} from 'react-icons/ai';
import { SiMongodb } from 'react-icons/si';

import './shrtproject.scss';

const SHRTProject = () => {
  return (
    <div className="SHRTProject" id="SHRTProject">
      <div className="right">
        <div className="shrtProjectMediaContainer">
          <div className="powerpostProjectGif">
            <a href="https://shrtstore.netlify.app" target="_blank">
              <img src="assets/SHRTGIF.gif" alt="" />
            </a>
          </div>
        </div>
        <div className="linksContainer">
            <a href="https://shrtstore.netlify.app" target="_blank">
              <button className="linkButton">
                Live Site</button>
            </a>
            <a href="https://github.com/tylerdowney13/SHRTStore" target="_blank">
              <button className="linkButton">GitHub</button>
            </a>
          </div>
      </div>
      <div className="left">
        <div className="powerpostProjectTitleContainer">
          <h2>SHRT</h2>
          <FaTshirt className="powerpostProjectTitleIcon"/>
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
              <div className="builtWithIconContainer">
                <AiFillHtml5 className="builtWithIcon" />
                <span className="builtWithIconDescription">HTML</span>
              </div>
              <div className="builtWithIconContainer">
                <DiCss3 className="builtWithIcon" />
                <span className="builtWithIconDescription">CSS</span>
              </div>
              <div className="builtWithIconContainer">
                <FaReact className="builtWithIcon" />
                <span className="builtWithIconDescription">React</span>
              </div>
              <div className="builtWithIconContainer">
                <SiMongodb className="builtWithIcon" />
                <span className="builtWithIconDescription">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SHRTProject;