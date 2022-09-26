import Navbar from "../nav/NavBar";
import CartWidget from "../CartWidget/CartWidget";
import "../../App.css"
import Cart from "../Carrito/Cart";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


const Header = () => {

 

    return (

        <header className="header">

            <div className="container">
                <div className="row">
                    <div className="col-md-3 header__cen">

                        <div className="btn-group dropend">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </button>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to={`/categoria/Nike`}>Nike Air</NavLink></li>
                                <li><NavLink className="dropdown-item" to={`/categoria/Puma`}>Puma RSX</NavLink></li>
                                <li><NavLink className="dropdown-item" to={`/categoria/Alexander`}>Alexander</NavLink></li>
                                <li><NavLink className="dropdown-item" to={`/categoria/Vans`}>Vans</NavLink></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 header__izq">
                        <NavLink to="/"><img src="./img/logo1-removebg-preview.png" alt="" width="100px" height="80px" /></NavLink>


                    </div>

                    <div className="col-md-3 header__der">
                        
                        <Link to="/cart"><CartWidget/></Link>
                    </div>

                </div>
            </div>

            <nav className="header__nav">
                <Navbar />
            </nav>


            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/gg.jpg"  className="d-block w-100" alt="" />
                    </div>
                   
                    <div className="carousel-item">
                        
                        <img src="./img/pp.jpg"  className="d-block w-100" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </header>
    )
}



export default Header;