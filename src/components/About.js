import React from "react";
import "./AboutStyle.css";

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
              <h3>Departments:</h3>
            </u>
            <h4>DEPARTMENT OF MECHANICAL ENGINEERING</h4>
            <h4>DEPARTMENT OF ELECTRICAL AND ELECTRONICS ENGINEERING</h4>
          </p>
        </p>
        <p align="left">
          <p>
            <h2>GREEN BLOCK</h2>
            <u>
              {" "}
              <h3>Departments:</h3>
            </u>
            <h4>DEPARTMENT OF COMPUTER SCIENCE ENGINEERING</h4>
            <h4>DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING</h4>
            <h4> DEPARTMENT OF ELECTRONICS AND INSTRUMENTATION ENGINEERING</h4>
          </p>
        </p>
        <p align="left">
          <p>
            <h2>AUDITORIUM BLOCK</h2>
            <u>
              {" "}
              <h3>Departments:</h3>
            </u>
            <h4>DEPARTMENT OF CIVIL ENGINEERING</h4>
          </p>
        </p>

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
