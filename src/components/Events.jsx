import React, { useState, useEffect } from "react";
import { Party_details } from "../data/info4";
import "../css/Events.css";
import Footer from "./Footer";

function Events({classname}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === Party_details.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div  className={classname}>
      <h1 style={{textAlign:"center",position:"relative",top:"69px",fontStyle:"italic",fontFamily:"Lobster, sans-serif",fontWeight:"400",fontStyle:"normal",letterSpacing:"1px"}}>EVENTS</h1>
      <section className="events-start">
        {Party_details.map((item, index) => (
          <div
            className={`enents-inside ${index === currentSlide ? "active" : ""}`}
            key={item.id}
          >
            <div className="first">
              <img src={item.image} alt="" />
            </div>

            <div className="second">
              <h2>{item.name}</h2>
              <p>{item.para}</p>

              <ul className="ul">
                <li>{item.point1}</li>
                <li>{item.point2}</li>
                <li>{item.point3}</li>
              </ul>
            </div>
          </div>
        ))}
      </section>
      <Footer/>
    </div>
  );
}

export default Events;
