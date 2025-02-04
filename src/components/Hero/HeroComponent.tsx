// import React from 'react'

import css from './HeroComponent.module.scss'
import '../../styles/global.scss'

import { motion } from 'framer-motion'
// @ts-ignore
import { staggerContainer, fadeIn, slideIn } from '../../utils/motion'



function HeroComponent() {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}

        className={`innerWidth ${css.container}`}>

            <div className={css.upperElements}>

                <motion.span 
                variants={fadeIn("right", "tween", 0.2, 1)}
                className='primaryText'>

                    Hey There, <br />I'm Levon.
                </motion.span>
                <motion.span 
                variants={fadeIn("left", "tween", 0.2, 1)}
                className='secondaryText'>
                    I focus on <br />AI and Game Devlopment.
                </motion.span>
            </div>

            {/* Email */}
            <motion.a 
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.email} href="mailto:zhao.levon@gmail.com">
                zhao.levon@gmail.com
            </motion.a>

            {/* Photo */}
            <motion.div 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person}>
                <motion.img 
                variants={slideIn("up", "tween", 0.4, 1.2)}
                src="./person.png" alt="" />
            </motion.div>

            {/* Welcome Text */}
            <div className={css.lowerElements}>
                <motion.div 
                variants={fadeIn("right", "tween", 0.2, 1)}
                className={`css.experience`}>
                    {/* <div className="primaryTextUnbold"><b>3</b> Years &nbsp;Game Designer</div> */}
                    <span className='primaryText'>3 Years</span>
                    <span className='primaryTextUnbold'>&nbsp;Game Designer</span>
                    <br />
                    <span className='primaryText'>1 Year</span>
                    <span className='primaryTextUnbold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data&nbsp;&nbsp; Anaylst&nbsp;&nbsp;&nbsp;</span>
                    {/* <div className="primaryTextUnbold"><b>1</b> Year&nbsp;&nbsp;&nbsp;&nbsp;Data &nbsp;&nbsp;Analyst</div> */}
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 0.2, 1)}
                className={css.certificate}>
                    <img src="./certificate.png" alt="" />
                    <span>Certified AWS Cloud Practitioner</span>
                    <span>Passed CFA Level 1 Test</span>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default HeroComponent