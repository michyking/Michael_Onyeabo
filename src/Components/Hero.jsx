import React from "react";

// image
import main from "../assets/main.png";

// react scroll
import { Link } from "react-scroll";

// UseEffect 
import { useEffect } from "react";

// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {

  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 1500,
      easing: 'ease-in-out',
      once: false,
    });
  }, [])

  return (
    <section className="h-screen py-5 lg:py-0 place-items-center" id="hero">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-8 lg:gap-x-0">
          <div className="hidden lg:flex flex-1 max-w-[450px] mx-auto mix-blend-lighten"  data-aos="fade-down">
            {/* image */}
            <img src={main} alt="Micahel Onyeabo" />
          </div>
          <div className=" max-w-[550px] text-left md:text-center mx-2 lg:mx-8" data-aos="fade-up">
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
            <Link to="contact"  smooth={true}
            duration={800}>
              <button className="btn btn-lg">Let's Talk</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
