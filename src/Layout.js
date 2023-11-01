import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './components/Navbar/Footer'
import { Container } from 'react-bootstrap';
import Header from './components/Navbar/Header';
const Layout = () => {
  return (
   <>
<Header/>
<Outlet/>
<Container fluid className='mt-5'>
<Footer/>
</Container>
   </>
  )
}

export default Layout;