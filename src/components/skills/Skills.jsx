import './skills.scss';
import { FaReact, FaNodeJs, FaJava, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { DiJavascript, DiCss3 } from 'react-icons/di';
import { AiFillHtml5, AiFillApi } from 'react-icons/ai';
import { SiExpress, SiSpringboot, SiSpring, SiPostgresql, SiMongodb } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="skills" id="skills" name="skills">
         <div className="wrapper">
          <div className="skillsTitleContainer">
            <h2 className="skillsTitle">Skills</h2>
          </div>
          <div className="skillsIconsContainer">
            <div className="skillsIconContainer">
              <DiJavascript className="skillsIcon yellow"/>
              <span className="skillsText yellow">JavaScript</span>
            </div>
            <div className="skillsIconContainer">
              <AiFillHtml5 className="skillsIcon orangered"/>
              <span className="skillsText orangered">HTML</span>
            </div>
            <div className="skillsIconContainer">
              <DiCss3 className="skillsIcon lightblue"/>
              <span className="skillsText lightblue">CSS</span>
            </div>
            <div className="skillsIconContainer">
              <FaReact className="skillsIcon aqua"/>
              <span className="skillsText aqua">React</span>
            </div>
            <div className="skillsIconContainer">
              <FaNodeJs className="skillsIcon lightgreen"/>
              <span className="skillsText lightgreen">NodeJS</span>
            </div>
            <div className="skillsIconContainer">
              <FaAws className="skillsIcon awsorange"/>
              <span className="skillsText awsorange">AWS</span>
            </div>
            <div className="skillsIconContainer">
              <SiExpress className="skillsIcon darkbluegrey"/>
              <span className="skillsText darkbluegrey">ExpressJS</span>
            </div>
            <div className="skillsIconContainer">
              <FaJava className="skillsIcon javaorange"/>
              <span className="skillsText javaorange">Java</span>
            </div>
            <div className="skillsIconContainer">
              <SiSpring className="skillsIcon springgreen"/>
              <span className="skillsText springgreen">Spring</span>
            </div>
            <div className="skillsIconContainer">
              <SiSpringboot className="skillsIcon springgreen"/>
              <span className="skillsText springgreen">SpringBoot</span>
            </div>
            <div className="skillsIconContainer">
              <FaPython className="skillsIcon pythonyellow"/>
              <span className="skillsText pythonyellow">Python</span>
            </div>
            <div className="skillsIconContainer">
              <AiFillApi className="skillsIcon restbrown"/>
              <span className="skillsText restbrown">REST</span>
            </div>
            <div className="skillsIconContainer">
              <SiPostgresql className="skillsIcon postgresblue"/>
              <span className="skillsText postgresblue">PostgreSQL</span>
            </div>
            <div className="skillsIconContainer">
              <SiMongodb className="skillsIcon mongodbgreen"/>
              <span className="skillsText mongodbgreen">MongoDB</span>
            </div>
            <div className="skillsIconContainer">
              <FaDocker className="skillsIcon dockerblue"/>
              <span className="skillsText dockerblue">Docker</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills