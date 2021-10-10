
import './App.css';
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar1">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">REACT CRUD APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add">Add</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Nav;
