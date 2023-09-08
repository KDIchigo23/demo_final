import NavBar from '../component/NavBar/NavBar'
import Footer from '../component/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout