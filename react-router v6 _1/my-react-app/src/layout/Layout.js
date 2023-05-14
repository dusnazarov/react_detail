import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar' 


const Layout = () => {
  return (
    <main>
        <Header/>       
        <Navbar/>
        <Outlet/>       
        <Footer/>        
    </main>
  );
};
export default Layout;