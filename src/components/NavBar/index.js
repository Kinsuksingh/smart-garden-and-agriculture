import { Link } from 'react-router-dom'
import './index.css'
const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light container">
            <img height="45px" src="https://img.freepik.com/premium-vector/tree-pen-vector-logo-design-template_825834-6912.jpg" alt="logo" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#links" aria-controls="links" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="links">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/smart-garden-and-agriculture">Home</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/data">Data Visualise</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar