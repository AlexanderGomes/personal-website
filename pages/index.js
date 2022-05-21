import {Navbar, Hero, Work, Footer, Skills} from '../components'

import {client} from '../LIB/client'

export default function Home({workData}) {
  return (
    <div className='app__main__div'>
        <Navbar />
        <br />
        <br />
        <br />
        <Hero />
        <br />
        <br />
        <br />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <Skills />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Work workData={workData} />
        <br/>
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