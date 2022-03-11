import { FitnessCenter } from '@material-ui/icons';

import './powerpostproject.scss';

const PowerPostProject = () => {
  return (
    <div className="powerpostProject" id="powerpostProject">
      <div className="left">
        <div className="powerpostProjectTitleContainer">
          <h2>PowerPost</h2>
          <FitnessCenter className="powerpostProjectTitleIcon"/>
        </div>
        <div className="powerpostProjectSubtitleContainer">
          <h3>Social Media App</h3>
        </div>
        <div className="powerpostProjectInfoContainer">
          <div className="powerpostProjectInfoContainerDescription">
            <div className="titleContainer">
              <span>Description</span>
            </div>
            <p className="descriptionParagraph">
              <b>PowerPost</b> is a social media platform for powerlifters. 
              Lifters can upload
              pictures of themselves in the gym, look through their friends posts in their
              PowerFeed, track their numbers in LiftLog, calculate their one rep maxes,
              read articles created by admins, and message each other with the instant 
              messaging feature.
            </p>
          </div>
          <div className="powerpostProjectInfoContainerBuiltWith">
            <div className="titleContainer">
              <span>Built With</span>
            </div>
            <div className="builtWithIconsContainer">
              <div className="builtWithIconContainer">
                <img className="builtWithIcon" src="assets/javascript.png" alt=""/>
                <span className="builtWithIconDescription">JavaScript</span>
              </div>
              <div className="builtWithIconContainer">
                <img className="builtWithIcon" src="assets/html.png" alt=""/>
                <span className="builtWithIconDescription">HTML</span>
              </div>
               <div className="builtWithIconContainer">
                <img className="builtWithIcon" src="assets/css.png" alt=""/>
                <span className="builtWithIconDescription">CSS</span>
              </div>
            </div>
            <div className="builtWithIconsContainer">
              <div className="builtWithIconContainer">
                <img className="builtWithIcon" src="assets/mongoDB.png" alt=""/>
                <span className="builtWithIconDescription">MongoDB</span>
              </div>
              <div className="builtWithIconContainer">
                <img className="builtWithIcon" src="assets/expressJS.png" alt=""/>
                <span className="builtWithIconDescription">ExpressJS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="powerpostProjectMediaContainer">
          <div className="powerpostProjectGif">
            <a href="https://powerpost.netlify.app" target="_blank">
              <img src="assets/powerpostGIF.gif" alt="" />
            </a>
          </div>
        </div>
        <div className="linksContainer">
            <a href="https://powerpost.netlify.app" target="_blank">
              <button className="linkButton">
                Live Site</button>
            </a>
            <a href="https://github.com/tylerdowney13/powerpost" target="_blank">
              <button className="linkButton">GitHub</button>
            </a>
          </div>
      </div>
      
    </div>
  )
}

export default PowerPostProject