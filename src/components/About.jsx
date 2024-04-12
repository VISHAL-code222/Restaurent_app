import React from "react";
import allveg from "../assets/allveg.jpg";
import { info_1 } from "../data/info1";

import "../css/About.css";
import Footer from "./Footer";

function About({classname}) {
  return (
    <div className={classname}>
      <h1 style={{textAlign:"center",position:"relative",top:"69px",fontStyle:"italic",fontFamily:"Lobster, sans-serif",fontWeight:"400",fontStyle:"normal",letterSpacing:"1px"}}>About Us</h1>
      <section className="about-start">
        <main className="about-first">
          <img src={allveg} alt="" />
        </main>

        <main className="about-second">
          <h1>
            Experience the Flavors of India: Indulge in Authentic and Exquisite
            Indian Cuisine
          </h1>
          <p>
            Savor aromatic spices, vibrant colors, and rich flavors in every
            bite of our meticulously crafted Indian culinary delights. Truly
            unforgettable.
          </p>
          <ul className="ul-list">
            <li>
              Delight your taste buds with our carefully curated menu featuring
              classic Indian dishes bursting with traditional spices and flavors
            </li>
            <li>
              Experience genuine Indian hospitality as our attentive staff
              ensures a memorable dining experience, catering to your every need
            </li>
            <li>
              Immerse yourself in the inviting atmosphere of our restaurant,
              where the blend of modern elegance and cultural charm sets the
              perfect backdrop for your dining journey.
            </li>
            <li>
              Our chefs bring years of expertise and passion to the kitchen,
              ensuring each dish is prepared to perfection with the finest
              ingredients.
            </li>
            <li>
              Whether you're a spice enthusiast or prefer mild flavors, our
              customizable options cater to diverse palates, ensuring
              satisfaction for every guest.
            </li>
          </ul>
        </main>
      </section>
      <h1 style={{textAlign:"center",fontStyle:"italic",fontFamily:"Lobster, sans-serif",fontWeight:"400",fontStyle:"normal"}}>Why Choose our Restaurant ?</h1>

      <section className="why-choose">
       
      {info_1.map((res)=>{
        return <div className="card-all" id={res.id}>

          <h3>{res.title}</h3>
          <p>{res.description}</p>









        

        </div>
      })}

      












      </section>
      <Footer/>
    </div>
  );
}

export default About;
