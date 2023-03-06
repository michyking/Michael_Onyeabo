import React from "react";

// UseEffect
import { useEffect } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import cert from "../assets/certificate.png";

function Certificate() {

  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="section bg-sitebg py-10">
      <div className="container mx-auto">
        <div>
          <h1 className="h2 text-center mb-11 lg:mb-24">certification</h1>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-x-8 gap-y-7">
            <p>
              Professionally certified by Techathon Mentorship and Open Source
              program. See official certificate <a href="http://michyking.com/wp-content/uploads/2023/03/TECHATHON_ONYEABO_MICHAEL_CHUKWUEBUKA_TM-ONMI24_CERTIFICATE.pdf"  className="text-primary">here</a> 
            </p>
            <img src={cert} alt="" className="rounded-md lg:max-w-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
