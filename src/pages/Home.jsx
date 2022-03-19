import Topbar from "../components/topbar/Topbar";
import Splash from '../components/splash/Splash';
import Projects from "../components/projects/Projects";
import PowerPostProject from "../components/project/PowerPostProject";
import SHRTProject from "../components/project2/SHRTProject";
import Contact from '../components/contact/Contact';
import Skills from "../components/skills/Skills";
import Menu from "../components/menu/Menu";
// import About from "../components/about/About";
// import Intro from '../components/intro/Intro';
// import Portfolio from '../components/portfolio/Portfolio';
// import Works from '../components/works/Works';
// import Testimonials from '../components/testimonials/Testimonials';

import '../app.scss';
import { useState } from 'react';


function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Splash />
        <Skills />
        <Projects />
        <PowerPostProject />
        <SHRTProject />
        <Contact />
      </div>
    </div>
  );
}

export default Home;