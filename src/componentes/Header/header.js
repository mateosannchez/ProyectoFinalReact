import Navbar from "../nav/NavBar";
// import estilos from './header.module.css';
import "../../App.css"



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
                                <li><a className="dropdown-item" href="#">Nike Air</a></li>
                                <li><a className="dropdown-item" href="#">Jordan</a></li>
                                <li><a className="dropdown-item" href="#">Puma RSX</a></li>
                                <li><a className="dropdown-item" href="#">Premium</a></li>
                                <li><a className="dropdown-item" href="#">Vans</a></li>
                                <li><a className="dropdown-item" href="#">SB Dunk</a></li>
                            
                            </ul>
                            </div>
                    </div>
                    <div className="col-md-3 header__izq">

                        <img src="./img/logo1-removebg-preview.png" alt="" width="100px" height="80px" />

                    </div>
                    <div className="col-md-3 header__der">
                        <i className="ri-shopping-cart-line header__der--car"></i>

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