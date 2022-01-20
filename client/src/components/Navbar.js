
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand text" href="#">carsbnb</a> 
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/listing" className="nav-link">View Cars</Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>

                        <li className="nav-item">
                        <a to="/signup" className="nav-link">Logout</a>
                        </li>
                      
                        </ul>
                </div >
            </div >
        </nav >
    )
}
