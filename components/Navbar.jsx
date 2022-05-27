import React from 'react'



const Navbar = () => {
  return (
    
    <div className='app__main__navbar'>
   
    <div className='app__navbar__name'>
      Gom<span className='span__name'>ES</span>

    
    </div>
    <div className='app__navbar__links'>
     <ul className='app__ul__links'>
     <a className='link_1' href="#one"><li>Work</li></a>
     <a className='link_2' href={'/About'}><li>About</li></a>
     </ul>
    </div>
    </div>
  )
}

export default Navbar