import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">MyApp</span>
        <div className="navbar-nav">
          <NavLink exact className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;