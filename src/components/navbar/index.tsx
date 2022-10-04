import './index.scss';
import NavLinks from './Navlink';
import NavLogo from './NavLogo';
import Searching from './SearchForm';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav">
        <NavLogo />
        <Searching />
        <NavLinks />
      </div>
    </div>
  );
}

export default Navbar;
