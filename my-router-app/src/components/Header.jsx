import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <nav>
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
