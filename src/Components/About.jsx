import React from "react";

// image
import image from "../assets/LAM.png"
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

function About() {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex text-center justify-between">
          {/* text */}
          <div className="flex-1">
       
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
              corrupti voluptatibus ullam optio ea tempore itaque eum, aut sed
              animi sunt excepturi porro beatae labore! Magnam nulla odio
              voluptate aliquid?
            </p>
          </div>
          {/* image */}
          <div className="mix-blend-lighten">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
