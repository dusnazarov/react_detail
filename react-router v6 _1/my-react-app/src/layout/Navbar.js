import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>        
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link> 
            <Link to='/profile'>Profile</Link> 
            <Link to='/data'>Data</Link> 
        </div> 
    </nav>
  );
};
export default Navbar;
