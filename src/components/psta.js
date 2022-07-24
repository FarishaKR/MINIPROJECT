import React from "react";
import "./PstaStyle.css";
import "./Cards.css";
import CardItem from "./CardItem";

import { Link } from "react-router-dom";

import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1> </h1>
        <p align="left">
          <p>
            <h2>PSTA BLOCK</h2>
            <u>
              {" "}
              <h3></h3>
            </u>
          </p>
        </p>
        <div className="cards">
          <h1>FLOOR 1</h1>
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
                <CardItem
                  src="images/img-3.jpg"
                  text="know how to reach your destination in this block.."
                  label="PSTA"
                  path="/Psta"
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

        <button className="btn">
          <a href="https://www.google.com/maps/place/KMEA+Engineering+College/@10.0537532,76.3790675,18z/data=!4m5!3m4!1s0x3b080bef5afc9553:0xa27dba956ef9e88!8m2!3d10.0540224!4d76.3795935">
            ViewMap
          </a>
        </button>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
