import { FaUniversity, FaReact, FaNodeJs, FaJava, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { IoIosSchool, IoIosLink } from 'react-icons/io';
import { GrCertificate } from 'react-icons/gr';
import { DiJavascript, DiCss3 } from 'react-icons/di';
import { AiFillHtml5, AiFillApi } from 'react-icons/ai';
import { SiExpress, SiSpringboot, SiSpring, SiPostgresql, SiMongodb } from 'react-icons/si';

import './about.scss';

const About = () => {
  return (
    <div className="about" id="about">
        <div className="left">
            <div className="aboutTitleContainer">
                <h2 className="aboutTitle">About</h2>
            </div>
            <div className="aboutInfoContainer">
              <div className="educationContainer">
                <div className="educationTitleContainer">
                  <h3 className="title">Education</h3>
                </div>
                <div className="educationInfoContainer">
                  <div className="educationInfoBox">
                    <div className="educationInfo">
                      <div className="educationInfoHeader">
                        <div className="educationIconContainer">
                          <FaUniversity className="icon"/>
                        </div>
                        <div className="educationTextContainer">
                          <span className="text">Keyin College</span>
                        </div>
                      </div>
                      <div className="educationInfoDegree">
                        <div className="educationIconContainer2">
                          <GrCertificate className="icon2"/>
                        </div>
                        <div className="educationTextContainer2">
                          <span className="text2">Diploma in Software Development</span>
                        </div>
                      </div>
                      <div className="educationInfoDegree">
                        <div className="educationIconContainer2">
                          <IoIosSchool className="icon2"/>
                        </div>
                        <div className="educationTextContainer2">
                          <span className="text2">Graduating April 2022</span>
                        </div>
                      </div>
                      <div className="educationInfoDegree">
                        <div className="educationIconContainer2">
                          <IoIosLink className="icon2"/>
                        </div>
                        <div className="educationTextContainer2">
                          <a href="https://keyin.com/program/software-development/" target="_blank">
                            <span className="text2">www.keyin.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="educationInfoBox">
                    <div className="educationInfo">
                      <div className="educationInfoHeader">
                        <div className="educationIconContainer">
                          <FaUniversity className="icon"/>
                        </div>
                        <div className="educationTextContainer">
                          <span className="text3">Memorial University of NL</span>
                        </div>
                      </div>
                      <div className="educationInfoDegree">
                        <div className="educationIconContainer2">
                          <GrCertificate className="icon2"/>
                        </div>
                        <div className="educationTextContainer2">
                          <span className="text2">B. Sc. Psychology</span>
                        </div>
                      </div>
                      <div className="educationInfoDegree">
                        <div className="educationIconContainer2">
                          <IoIosSchool className="icon2"/>
                        </div>
                        <div className="educationTextContainer2">
                          <span className="text2">Graduated April 2015</span>
                        </div>
                      </div>
                      <div className="educationInfoDegree">
                        <div className="educationIconContainer2">
                          <IoIosLink className="icon2"/>
                        </div>
                        <div className="educationTextContainer2">
                          <a href="https://www.mun.ca/undergrad/programs/science/psychology/" target="_blank">
                            <span className="text2">www.mun.ca</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        </div>
        <div className="right">
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
              <span className="skillsText restbrown">REST APIs</span>
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

export default About;