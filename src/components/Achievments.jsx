import React from 'react'
import { motion } from "framer-motion";
import IITM_Qualifiying_exam from '../assests/IITM_Qualifiying_exam_photo.jpg'
import Matrix_React_certification from '../assests/Matrix_React_certification.jpg'
import NPTEL_Cplusplus from '../assests/NPTEL_Cplusplus.jpg'
import Scout_rajya_puraskar from '../assests/Scout_rajya_puraskar.jpg'

function Achievments() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      y: "100%",
    },
    two: {
      opacity: 0,
      y: "100%",
    },
    three: {
      opacity: 0,
      y: "100%",
    },
    four: {
      opacity: 0,
      y: "100%",
    },
  };

  return (
    <div id="Achievments">
      <section>
        <motion.div className="AchievmentsItem1" whileInView={animations.whileInView} initial={animations.one}>
          <img src={NPTEL_Cplusplus} alt="loading" />
          <h3>IIT Kharagpur online NPTEL Modern C++ 12week complition Certificate.</h3>
        </motion.div>

        <motion.div className="AchievmentsItem2" whileInView={animations.whileInView} initial={animations.two} transition={{delay: 0.2,}}>
          <img src={Matrix_React_certification} alt="loading" />
          <h3>6 week summer industrial training completion certificate</h3>
        </motion.div>

        <motion.div className="AchievmentsItem3" whileInView={animations.whileInView} initial={animations.three}>
          <img src={IITM_Qualifiying_exam} alt="loading" />
          <h3>IIT Madras B.S. degree online program, quilifiying certificate.</h3>
        </motion.div>

        <motion.div className="AchievmentsItem4" whileInView={animations.whileInView} initial={animations.four}>
          <img src={Scout_rajya_puraskar} alt="loading" />
          <h3>Scout Rajya Puraskar is a milestone of my joyous present in the service of mankind.</h3>
        </motion.div>
      </section>
  </div>
  )
}

export default Achievments
