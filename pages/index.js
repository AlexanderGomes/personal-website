import {Navbar, Hero, Work, Footer, Skills} from '../components'

import {client} from '../LIB/client'

export default function Home({workData}) {
  return (
    <div className='app__main__div'>
        <Navbar />
        <Hero className='app' />
         <Skills />
        <Work workData={workData} />
        <Footer />
    </div>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "works"]';

  const workData = await client.fetch(query)


  return {
    props: {workData}
  }
}