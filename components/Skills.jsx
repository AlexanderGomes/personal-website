import React from 'react'
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <div>
        <div className='app__hero__skills'>
        <motion.div
            animate={{y: [-100, 0], x: [100, 0], opacity: [0, 1]}}
            transition={{duration: 4.9}}
        >
        <img className='app__figma' src={'/figma.png'} alt="" />
         <div className='app__figma__circle'/> 
        </motion.div>

        <motion.div
          animate={{y: [-100, 0], x:[-100, 0], opacity: [0, 1]}}
          transition={{duration: 3.9}}
        >
        <img className='app__react' src={'/react.png'} alt="" />
        </motion.div>

        <motion.div
          animate={{y: [-100, 0], x: [100, 0], opacity: [0, 1]}}
          transition={{duration: 3.9}}
        >
        <img  className='app__sass' src={'/sass.png'} alt="" />
        <div className='app__sass__circle' />
        </motion.div>

        <motion.div
          animate={{y: [-100, 0], x:[-100, 0], opacity: [0, 1]}}
          transition={{duration: 4.9}}
        >
        <img className='app__node' src={'/node.svg'} alt="" />
        </motion.div>
  
     </div>
    </div>
  )
}

export default Skills