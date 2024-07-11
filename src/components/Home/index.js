import './index.css'
const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container">
                <div class="navbar-brand">
                    <img height="45px" src="https://img.freepik.com/premium-vector/tree-pen-vector-logo-design-template_825834-6912.jpg" alt="logo" />
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default NavBar