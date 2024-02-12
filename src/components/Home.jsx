import React, { useRef } from 'react';
import My_pic from "../assests/My_pic.jpg"
import Typewriter from 'typewriter-effect';
import {motion, animate} from 'framer-motion'
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";

function Home() {

  const projectCount = useRef(null);
  const animationProjectsCount = () => {
    animate(0, 10, {
      duration: 3,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  return (
    <div id='home'>
      <section>
        <div>
          <motion.h1 initial={{x: "-100%"}} whileInView={{x:0}}>Hi, This is <br /> Aman</motion.h1>
          {/* <motion.h1>Hi, This is <br /> Aman</motion.h1> */}
        </div>
        <Typewriter
          options={{
            strings: ['A Website Developer.', 'React, Firebase in Frontend.', 'Express, MongoDB in backend.'],
            autoStart: true,
            loop: true,
            cursor: "",
          }}
        />
        <div className='div__second'>
          <a href="mailto:123ramramji456@gmail.com"><button>Hire Me</button></a>
          <a href="#projects"><span>Projects<BsArrowUpRight/></span></a>
        </div>
        <div className='div__third'>
            <div>
              <motion.span ref={projectCount} whileInView={animationProjectsCount}></motion.span>
              <span>+</span>
            </div>
            <p>Projects</p>
            <h3>contacts</h3> 
            <p>123ramramji456@gmail.com</p>
        </div>
      </section>
      <section>
        <div>
          <img src={My_pic} alt="" />
        </div>
      </section>
      <a href="#projects"><BsChevronDown/></a>
    </div>
  )
}

export default Home


