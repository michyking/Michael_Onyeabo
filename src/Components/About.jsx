import React from "react";

// image
import image from "../assets/LAM.png";

// UseEffect 
import { useEffect } from "react";

// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 1500,
      easing: 'ease-in-out',
      once: false,
    });
  }, [])

  return (
    <section className="section  place-items-center" id="about">
      <div className="container mx-auto">
        <div
          className="lg:text-center lg:gap-y-0 h-screen flex justify-between
        flex-col-reverse lg:flex-row "
        >
          {/* text */}
          <div className="flex-1 text-center px-4 flex flex-col items-center "  data-aos="fade-right">
            <h3 className="text-primary text-[20px] mb-3">Get to Know</h3>
            <h1 className="h2">About Me</h1>
            <p className="text-left lg:text-justify">
              Michael Onyeabo is a passionate Front-End Web developer with a
              keen eye for detail, particularly when it comes to creating
              responsive website designs. I graduated from the{" "}
              <span className="text-primary font-bold">
                Techathon Mentorship and Open Source
              </span>{" "}
              program, where I collaborated with team members to build a{" "}
              <span className="text-primary font-bold">
                {" "}
                real-life project.
              </span>{" "}
              As a highly motivated and enthusiastic learner, I always welcome
              new challenges and strive to achieve excellence. My strong{" "}
              <span className="text-primary font-bold">
                communication
              </span> and{" "}
              <span className="text-primary font-bold">teamwork skills </span>
              drive my passion for success in any endeavor.
            </p>
          </div>
          {/* image */}
          <div className="hidden lg:flex flex-1 max-h-[450px] mx-auto mix-blend-lighten"  data-aos="fade-left">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
