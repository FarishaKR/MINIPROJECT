import React from "react";
import "./AboutStyle.css";

import { Link } from "react-router-dom";

import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>About Us</h1>
        <p align="left">
          <p>
            The Kerala Muslim Educational Association was established in 1957
            with the lofty aim of setting up quality educational institutions on
            a par with global standards. Promoting education among minority
            communities and providing financial aid to the economically weak and
            deserving students.
          </p>
          <p align="left">
            Late Sri. Poker Sahib, an eminent Parliamentarian and Philanthropist
            and late Sri. K. M. Seethi Sahib, former speaker of the Kerala
            Legislative Assembly, was the key forces behind the formation of
            KMEA. Former Chief Minister Sri. C. H. Muhammed Koya has also
            actively participated in the formation of the association.
          </p>
          <p>
            KMEA Engineering College (KEC) was established in 2002 under the
            management of Kerala Muslim Educational Association, a charitable
            trust. It is approved by All India Council for Technical Education
            (AICTE) and affiliated to APJ Abdul Kalam Technological University.
            The college is accredited by National Assessment and Accreditation
            Council (NAAC).
          </p>
        </p>
        <button className="btn">
          <a href="https://kmeacollege.ac.in/">KNOW MORE</a>
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
