import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='app__main__hero'>
     <div className='app__hero__heading'>
     <motion.div
     whileInView={{y: [-100, 0], opacity: [0, 1]}}
     transition={{duration: 1.5}}
     >
      <h1 className='app__h1'>I'm Alexsander Gomes</h1>
     </motion.div>
      <motion.div
         whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      >
      <h3 className='app__h3'>The perfect full stack developer</h3>
       </motion.div>
       <motion.div
        whileInView={{ x: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
       >
      <h4 className='app__h4'>For your bussiness</h4>
       </motion.div>
     </div>
  
    </div>
  )
}

export default Hero