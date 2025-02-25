import { Link } from "react-router-dom";
import NavLogo from '../assets/navPhoto.png';


function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg ps-5">
                <div className="container">
                    <a href="" className="navbar-brand">
                        <img src={NavLogo} className="img-fluid w-25" alt="" />
                    </a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <a href="" className="btn btn-dark p-2 ps-4 fw-bold pe-4 rounded-5 mt-2">Contact</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;