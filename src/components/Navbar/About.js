import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='top_1'>
    <main>
<section className="py-5 text-center container">
    <div className="row py-5">
      <div className="col-12">
        <h1 className="fw-bold">About Us</h1>
        <p className="fw-bold fs-1 text-white text-center"> Explore the beauty of the world with Global Odyssey. We take you
                on a journey to discover diverse cultures, breathtaking
                landscapes, and exciting adventures in countries across the
                globe. From the bustling streets of New York to the serene
                temples of India, we've got it all.</p>
        <p>
          <Link to="/"><Button className=" border-0 Sign_in w-100 fw-semibold py-3">Go Back To Home Page</Button></Link>
        </p>
      </div>
    </div>
  </section>

 

</main>
    </div>
  )
}

export default About