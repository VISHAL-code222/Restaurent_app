import React, { useState } from "react";
import { Indian_food } from "../data/info2";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Menu.css";
import "animate.css"

function Menu({classname}) {
  let [category, setCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const filteredMenu = Indian_food.filter((item) => {
    if (category === "All") {
      return true;
    } else {
      return item.type === category;
    }
  });

  return (
    <div className={classname}>
      <div className="btn-group">
        <button   onClick={() => handleCategoryChange("All")}>All</button>
        <button   onClick={() => handleCategoryChange("starter")}>
          Starters
        </button>
        <button   onClick={() => handleCategoryChange("north_indian")}>
          North Indian
        </button>
        <button   onClick={() => handleCategoryChange("south_indian")}>
          South Indian
        </button>
      </div>

      <section className="food-display">
        {filteredMenu.map((item) => {
          return (
            <div className="food-desc" id={item.id}>
              <h1>
                {item.name}--------------------------------<small><i class="bi bi-currency-rupee"></i></small>{item.price}
              </h1>
              <p>{item.descritpion}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Menu;
