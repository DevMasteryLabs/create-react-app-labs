import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">MyApp</span>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;