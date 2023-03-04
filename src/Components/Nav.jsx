import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiContactsFill, RiMessage2Fill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="fixed bottom-2 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-white/20 h-[65px] flex backdrop-blur-2xl 
        rounded-full max-w-[460px] border-white/40 border-[2px]
         mx-auto px-5 justify-between items-center text-2xl text-white/50">
          <Link
            to="hero"
            activeClass="active"
            smooth={true}
            duration={800}
            // A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls
            spy={true}
            offset={-200}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <AiFillHome />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            duration={800}
            // A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls
            spy={true}
            offset={-50}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <RiContactsFill />
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            duration={800}
            // A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls
            spy={true}
            offset={-200}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <MdWork />
          </Link>
          <Link
            to="certificate"
            activeClass="active"
            smooth={true}
            duration={800}
            // A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls
            spy={true}
            offset={-200}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <FaCertificate />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            duration={800}
            // A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls
            spy={true}
            offset={-200}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <RiMessage2Fill />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
