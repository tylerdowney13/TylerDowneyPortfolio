import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio
} from "../../data";

function Portfolio() {

  const [selected, setSelected] = useState("featured");

  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web Apps",
    },
    {
      id: "mobile",
      title: "Mobile Apps",
    },
    {
      id: "desktop",
      title: "Desktop Apps",
    },
  ]

  useEffect(() => {
    switch(selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "featured":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "desktop":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map(item => (
          <PortfolioList title={item.title} id={item.id} active={selected === item.id} setSelected={setSelected}/>
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
        
      </div>
    </div>
  )
}

export default Portfolio