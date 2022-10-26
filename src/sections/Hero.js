import '../styles/Home.css'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import heroImage from '../assets/hero/heroimage.svg'
import asbtn from '../assets/hero/rec1.svg'
import sbtn from '../assets/hero/rec2.svg'

const Hero = () => {
    const year = new Date().getFullYear();
    return ( 
        <motion.section 
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: .8, duration: 1.2}}
        className="hero__section">
            <div className="hero__container">
                <motion.div
                initial={{opacity: 0, x: -200}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: .4, duration: 1.2}}
                className="hero__text">
                    <p>Best Furniture For Your Castle</p>
                    <h2>New Furniture Collection
                    Trends in {year}</h2>
                    <p className="hero_info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                        in phasellus non in justo.
                    </p>
                    <motion.button
                    initial={{opacity: 0, x: -200}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: .2, duration: .2}}
                    whileTap={{scale: 1.2}}
                    className="btn"><Link to='/shop'>Shop Now</Link></motion.button>
                </motion.div>
                <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: .4, duration: 1.2}} 

                className="hero__banner">
                    <img src={heroImage} alt="Hero Banner" />
                </motion.div>
            </div>
            <div className="switch__wrap">
                <img src={asbtn} alt="" />
                <img src={sbtn} alt="" />
                <img src={sbtn} alt="" />
            </div>
        </motion.section>
     );
}
 
export default Hero;