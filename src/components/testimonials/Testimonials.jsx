import { testimonialsData } from './testimonialsData';
import './testimonials.scss';

function Testimonials() {

  const data = testimonialsData;

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials </h1>
      <div className="container">
      {data.map(d => (
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img src={d.img} className="user" alt="" />
            <img src={d.icon} className="right" alt="" />
          </div>
          <div className="center">
            {d.desc}
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Testimonials