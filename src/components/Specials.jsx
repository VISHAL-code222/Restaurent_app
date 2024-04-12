import React from "react";
import { Special_food } from "../data/info3";
import "../css/Specials.css";
import Footer from "./Footer";

function Specials({classname}) {
  return (
    <div className={classname}>
      <h1 style={{textAlign:"center",position:"relative",top:"60px",fontStyle:"italic",fontFamily:"Lobster, sans-serif",fontWeight:"400",fontStyle:"normal",letterSpacing:"1px"}}>Top North Indian Food to Offer</h1>
      <section className="special">
       

        {Special_food.map((item) => {
          return (
            <div class="card" id={item.id}>
              <img src={item.img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.description}</p>
              </div>
            </div>
          );
        })}
      </section>

      <Footer/>
    </div>
  );
}

export default Specials;
