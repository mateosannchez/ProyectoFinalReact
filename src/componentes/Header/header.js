import Navbar from "../nav/NavBar";
// import estilos from './header.module.css';
import "../../App.css"


import Inicio from "../nav/paginas/inicio"
import Comprar from "../nav/paginas/ccomprar"
import Contacto from "../nav/paginas/contac"
import Mayorista from "../nav/paginas/mayor"
import Preguntas from "../nav/paginas/pregfrec"
import Talles from "../nav/paginas/talles"

const Header = () => {
    return (

        <header className="header">

            <div className="container">
                <div className="row">
                    <div className="col-3 header__izq">
                        <h1>Logo</h1>
                        
                    </div>
                    <div className="col-3 header__cen">
                        <input class="js-search-input form-control search-input" autocomplete="off" type="search" name="q" placeholder="¿Qué estás buscando?" aria-label="¿Qué estás buscando?"></input>

                    </div>
                    <div className="col-3 header__der">
                        <i class="ri-shopping-cart-line header__der--car"></i>

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