// import React from 'react';
import css from './ExpertiesComponent.module.scss';

// @ts-ignore
import { projectExperience, whatIDo } from '../../utils/data';

import { motion } from 'framer-motion';
// @ts-ignore
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion';

function ExpertiesComponent() {
    return (
        <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.25}}
        className={css.wrapper}>
            <div className={`paddings yPaddings flexcenter innerWidth ${css.container}`}>
                <div className={css.leftSide}>
                    {projectExperience.map((exp: any, i: any) => (
                        <motion.div
                        variants={fadeIn("right", "tween", (i+1)*0.2, 1)} 
                        key={i} 
                        className={css.exp}>
                            <div className="flexCenter" style={{ background: exp.bg }}>
                                <exp.icon size={25} color="white" />
                            </div>
                            <div>
                                <span>{exp.name}</span>
                                <span className='secondaryText'>{exp.projects} Projects</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div 
                variants={textVariant(0.5)}
                className={css.rightSide}>
                    <span className='primaryText'>Curious and Constantly Learning. </span>
                    {whatIDo.map((paragraph: any, i: any) => <span className='secondaryText' key={i}>{paragraph}</span>)}

                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText'>285+</span>
                            <span className='secondaryText'>Project Completed</span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText'>285+</span>
                            <span className='secondaryText'>Project Completed</span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </motion.section>
    );
}

export default ExpertiesComponent;