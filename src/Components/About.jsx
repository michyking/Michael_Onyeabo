import React from "react";

// image
import image from "../assets/LAM.png"
// type animation
import { TypeAnimation } from "react-type-animation";
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
          <TypeAnimation
                sequence={[
                  "Get to Know",
                  2000,
                  "client-end Developer",
                  2000,
                ]}
                speed={50}
                className="text-primary"
                wrapper="span"
                repeat={Infinity}
              />
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
              corrupti voluptatibus ullam optio ea tempore itaque eum, aut sed
              animi sunt excepturi porro beatae labore! Magnam nulla odio
              voluptate aliquid?
            </p>
          </div>
          {/* image */}
          <div className="hidden lg:flex flex-1 max-w-[492px]  mx-auto mix-blend-lighten">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
