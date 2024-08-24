import React from 'react'
import { Link } from 'react-router-dom';

// CSS
import css from './HeaderComponent.module.scss'
import '../../styles/global.scss'

// Icon
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi'

// Animation
import { motion } from 'framer-motion'
// @ts-ignore
import { headerVariants, getMenuStyles } from '../../utils/motion'
import RecipeGenerator from '../RecipeGenerator/RecipeGeneratorComponent'

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
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/recipe-generator">Recipe Generator</Link></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+1 408 218 9166</p>
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


