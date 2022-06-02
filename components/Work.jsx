import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import { urlFor, client } from '../LIB/client'
import {motion} from 'framer-motion'


const Work = ({workData}) => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  return (
    <div id='one' className='move__all'>

    <div>
      <h2 className='head-text'>All <span className='span__name'>My</span>Projects</h2>
    </div>
        
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
       {workData?.map((work) => (
        <div className="app__work-item app__flex" key={work.id}>
        <div className="app__work-img app__flex">
        <img src={urlFor(work.imgUrl)} alt="" />
        <motion.div
             whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
        >
          <a href={work.projectLink} target="_blank" rel="noreferrer">
          <motion.div
           whileInView={{ scale: [0, 1] }}
           whileHover={{ scale: [1, 0.90] }}
           transition={{ duration: 0.25 }}
           className="app__flex"
          >
          <AiFillEye />
          </motion.div>
          </a>
          {/* <a href={work.codeLink} target="_blank" rel="noreferrer">
            <motion.div
             whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
            >
            <AiFillGithub />
            </motion.div>
          </a> */}
        </motion.div>
        </div>
        <div className="app__work-content app__flex">
        <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="tag__text">{work.tags[0]}</p>
              </div>
              <a className='app__svg' href={work.projectLink} target="_blank" rel="noreferrer">
          <AiFillEye size={20} />
              </a>
        </div>
        </div>
       ))}
      </motion.div>
    </div>
  )
}

export default Work