import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      strings: ["Full-Stack Software Developer"],
      backDelay: 2500,
      backSpeed: 60
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Tyler Downey</h1>
          <h3><span ref={textRef}></span></h3>
          <div className="awsBadgesContainer">
            <div className="awsBadgeContainer">
              <a href="https://www.credly.com/badges/4861ea96-52e4-4156-ba6f-8922dfba7e3f/public_url" target="_blank">
                <img className="awsBadgeImg " src="assets/aws-certified-cloud-practitioner.png" alt="" />
              </a>
            </div>
            <div className="awsBadgeContainer">
              <a href="https://www.credly.com/badges/632daa98-2330-47ff-a330-92c21ce0d20f/public_url" target="_blank">
                <img className="awsBadgeImg " src="assets/aws-certified-developer-associate.png" alt="" />
              </a>
            </div>
          </div>
          <a className="aboutLink" href="#about">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro