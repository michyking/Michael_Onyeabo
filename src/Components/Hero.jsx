import React from "react";

// motion
import { motion } from "framer-motion";

// image
import main from "../assets/main.png";

// Variant
import { fadeIn } from "../variants";

// react scroll
import { Link } from "react-scroll";

// header
import Header from './Header'

function Hero() {
  return <section className="section" id="hero">
    <div className="container mx-auto">
      <Header/>
      <div className="flex flex-col lg:flex-row">
        <div className="hidden lg:flex flex-1 max-w-[450px] mx-auto mix-blend-lighten">
          {/* image */}
          <img src={main} alt="Micahel Onyeabo" />
        </div>
        <div>
          {/* text */}
          <h1>Michael Onyeabo</h1>
          <p>i am <span className="text-primary px-[1px]">a front-end developer</span></p>
        </div>
      </div>
    </div>
  </section>;
}

export default Hero;
