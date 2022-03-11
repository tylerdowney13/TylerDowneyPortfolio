import Topbar from "../components/topbar/Topbar";
import Intro from '../components/intro/Intro';
import Projects from "../components/projects/Projects";
import PowerPostProject from "../components/project/PowerPostProject";
import Contact from '../components/contact/Contact';
import About from "../components/about/About";
import Menu from "../components/menu/Menu";
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
        <Intro />
        <About />
        <Projects />
        <PowerPostProject />
        <Contact />
      </div>
    </div>
  );
}

export default Home;