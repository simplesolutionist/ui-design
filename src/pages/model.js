import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

//Components
import ScrollForMore from "../components/scrollForMore";
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className='mua'>IG: @blackmamba</div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>K</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>b</motion.span>
                <motion.span variants={letter}>e</motion.span>
              </motion.span>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>B</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>n</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>B</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>y</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>t</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../images/kb.webp")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -1200 : -600,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              The insiration behind the Mamba Mentality & <br /> what it means.
            </h2>
            <p>
            "To sum up what mamba mentality is, it means
             to be able to constantly try to be the best 
             version of yourself," added Bryant, who did 
             just that during his 20 seasons with the Los 
             Angeles Lakers. "That is what the mentality is.
             It's a constant quest to try to better today than
             you were yesterday. Mamba mentality is all about 
             focusing on the process and trusting in the hard work
             when it matters most." “Hard work outweighs talent -- every
             time,” he added. “Mamba mentality is about 4 a.m. workouts, 
             doing more than the next guy and then trusting in the work 
             you’ve put in when it’s time to perform. Without studying, 
             preparation and practice, you’re leaving the outcome to fate.
             I don’t do fate. The mamba mentality is a mindset that extends
             way beyond basketball or sports. It’s simple, if you have a goal
             or a dream, you need to apply the mamba mentality to achieve it. 
             Everything worth achieving needs total focus and dedication. I don’t
             care who you are, where you’re from -- it doesn’t matter. It’s having 
             a focus and having a purpose. You wake up every single day to get better
             today than you were yesterday. Doesn’t matter what you are -- basketball 
             player, hockey player, golf player, painter, writer, doesn’t matter. You
             guys know that if you do the work, you work hard enough, dreams come 
             true. You all know that, we all know that. But hopefully what you get 
             from this is the understanding that those times when you get up early 
             and you work hard, those times you stay up late and you work hard, 
             those times when you don't feel like working -- you're too tired, 
             you don't want to push yourself -- but you do it anyway … that is 
             actually the dream. It’s not the destination, it’s the journey. And, if 
             you guys can understand that, what you’ll see happen is that you 
             don’t accomplish your dreams. Your dreams won’t come true. 
             Something greater will and if you guys can understand that, then I’m 
             doing my job as a father. Thank you guys so much and mamba out.”



            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
