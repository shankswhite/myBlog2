import React from 'react'
import { Link } from 'react-router-dom';

// CSS
import css from './HeaderComponent.module.scss'
import '../../styles/global.scss'

// Icon
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa';

// Animation
import { motion } from 'framer-motion'
// @ts-ignore
import { headerVariants, getMenuStyles } from '../../utils/motion'
// import RecipeGenerator from '../RecipeGenerator/RecipeGeneratorComponent'

// hook
// @ts-ignore
import useHeaderShadow from '../../hooks/useHeaderShadow';


export default function HeaderComponent() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once: false, amount: 0.25}}
    style={{boxShadow: headerShadow}}
    className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          Levon
        </div>

        <ul 
        style={getMenuStyles(menuOpen)}
        className={`flexCenter ${css.menu}`}>
          {/* <li><Link to="/">Blog</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/resume">Resume</Link></li> */}
          <li> 
            <a href="https://github.com/shankswhite" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
              
            </a> 
          </li>
          <li><Link to="/yolo-kan">YOLO-KAN</Link></li>
          <li><Link to="/cg">Computer Graphics</Link></li>

          <li><Link to="/chatbot">AI ChatBot</Link></li>

          <li><Link to="/pathfinding">Pathfinding</Link></li>

          <li className={`flexCenter ${css.phone}`}>
            <p>+1 669 388 2709</p>
            <BiPhoneCall size={"40px"}/>
          </li>


        </ul>

        <div className={css.menuIcon}
        onClick={ () => setMenuOpen((prev) => !prev) }
        >
          <BiMenuAltRight size={"30px"}/>
        </div>
      </div>

    </motion.div>
  )
}


