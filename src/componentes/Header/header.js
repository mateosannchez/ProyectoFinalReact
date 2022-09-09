import Navbar from "../nav/NavBar";
// import estilos from './header.module.css';
import "../../App.css"
import Cart from "../Carrito/Cart";
import { Link, NavLink } from "react-router-dom";



const Header = () => {
    return (

        <header className="header">

            <div className="container">
                <div className="row">
                    <div className="col-md-3 header__cen">

                        <div class="btn-group dropend">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </button>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to={`/categoria/Nike`}>Nike Air</NavLink></li>
                                {/* <li><NavLink className="dropdown-item" to={`/categoria/Jordan`}>Jordan</NavLink></li> */}
                                <li><NavLink className="dropdown-item" to={`/categoria/Puma`}>Puma RSX</NavLink></li>
                                <li><NavLink className="dropdown-item" to={`/categoria/Alexander`}>Alexander</NavLink></li>
                                <li><NavLink className="dropdown-item" to={`/categoria/Vans`}>Vans</NavLink></li>
                                {/* <li><NavLink className="dropdown-item" to={`/categoria/SB`}>SB Dunk</NavLink></li> */}

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 header__izq">
                        <NavLink to="/"><img src="./img/logo1-removebg-preview.png" alt="" width="100px" height="80px" /></NavLink>


                    </div>

                    <div className="col-md-3 header__der">
                        <Link to="/cart">
                            <Cart />
                        </Link>
                    </div>
                    
                </div>
            </div>

            <nav className="header__nav">
                <Navbar />
            </nav>

        </header>
    )
}



export default Header;