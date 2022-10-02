import './index.scss';
import NavLinks from './navlink/Navlink';
import NavLogo from './navLogo/NavLogo';
import Searching from './searching';

function Navbar() {
  return (
    <div className='nav-container'>
      <div className="nav">
        <NavLogo />
        <Searching />
        <NavLinks />
      </div>
    </div>
  );
}

export default Navbar;
