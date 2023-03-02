import React from "react";

// type animation
import { TypeAnimation } from "react-type-animation";

// motion
import { motion } from "framer-motion";

import main from "../assets/main.png";

// Variant
import { fadeIn } from "../variants";

import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      className="min-h-[78vh] lg:h-[85vh] py-4 flex justify-center items-center"
      id="hero"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-8 lg:gap-x-12">
          {/* flex flex-col gap-y-8 lg:flex-row lg:items-center  justify-around */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="hidden lg:flex flex-1 max-w-[492px]  mx-auto mix-blend-lighten"
          >
            {/*image */}
            <img src={main} alt="" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 max-w-[492px] text-center "
          >
            <h1 className="h2 text-[45px] font-bold leading-[0.8] lg:text-[50px] mb-3">
              Michael onyeabo
            </h1>
            <div className="h3 leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Front-end Developer",
                  2000,
                  "client-end Developer",
                  2000,
                ]}
                speed={50}
                className="text-primary"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p>
              As a front-end developer, I specialize in creating outstanding
              digital experiences with occasional design work. Currently, my
              primary focus is on building web pages that are both accessible
              and responsive.
            </p>
            <div className="mt-7">
              <button className="btn btn-sm mr-3 lg:mr-6  ">
                See My Resume
              </button>
              <button className="btn btn-sm" to="contact">
                <Link to="contact" smooth={true} duration={800}>
                  Connect with me
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
