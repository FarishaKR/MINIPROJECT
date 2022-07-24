import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Here start the journey to college..!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Main map of entire college"
              label="explore the blocks"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="About the college"
              label="About KMEA"
              path="/Products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="know how to reach your destination in this block.."
              label="PSTA"
              path="/Psta"
            />
            <CardItem
              src="images/img-4.png"
              text="find the location to reach your destination in this block.."
              label="GREEN BLOCK"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="find the location to reach your destination in this block.."
              label="AUDITORIUM BLOCK"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
