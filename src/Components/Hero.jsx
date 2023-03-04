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
import Header from "./Header";

import { useEffect } from "react";
// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {

  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 2000,
      easing: 'ease',
      once: false,

    });
  }, [])

  return (
    <section className="h-[80vh]" id="hero">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-8">
          <div className="hidden lg:flex flex-1 max-w-[450px] mx-auto mix-blend-lighten"  data-aos="fade-up">
            {/* image */}
            <img src={main} alt="Micahel Onyeabo" />
          </div>
          <div className=" max-w-[550px] text-center mx-8" data-aos="fade-down">
            {/* text */}
            <h1 className="h2">Michael Onyeabo</h1>
            <p className="font-tertiary uppercase text-[22px] md:text-[28px] mb-6 ">
              i am a
              <span className="text-primary pl-2">
               front-end developer
              </span>
            </p>
            <p className="mb-6">
              As a front-end developer, I specialize in creating outstanding
              digital experiences with occasional design work. Currently, my
              primary focus is on building web pages that are both accessible
              and responsive.
            </p>
            <div>
              <button className="btn btn-lg">Let's Talk</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
