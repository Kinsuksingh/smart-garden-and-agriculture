import { Link } from 'react-router-dom'
import './index.css'
const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light container">
            <img height="45px" src="https://img.freepik.com/premium-vector/tree-pen-vector-logo-design-template_825834-6912.jpg" alt="logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#links" aria-controls="links" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="links">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/smart-garden-and-agriculture">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/smart-garden-and-agriculture/data">Data Visualise</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar