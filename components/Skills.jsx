import React from 'react'

const Skills = () => {
  return (
    <div>
        <div className='app__hero__skills'>
        <img className='app__figma' src={'/figma.png'} alt="" />
         <div className='app__figma__circle'/>
        <img className='app__react' src={'/react.png'} alt="" />
        <img  className='app__sass' src={'/sass.png'} alt="" />
        <div className='app__sass__circle' />
        <img className='app__node' src={'/node.svg'} alt="" />
     </div>
    </div>
  )
}

export default Skills