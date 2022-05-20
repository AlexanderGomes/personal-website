import React from 'react'
import Link from 'next/link'

import Head from 'next/head'

const Navbar = () => {
  return (
    
    <div className='app__main__navbar'>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Roboto&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Permanent+Marker&family=Roboto&display=swap" rel="stylesheet"/>

    </Head>
    <div className='app__navbar__name'>
      Gom<span className='span__name'>ES</span>
    </div>
    <div className='app__navbar__links'>
     <ul className='app__ul__links'>
     <a className='link_1' href=""><li>Work</li></a>
     <a className='link_2' href=""><li>About</li></a>
     </ul>
    </div>
    </div>
  )
}

export default Navbar