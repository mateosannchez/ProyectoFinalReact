import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid ">
                    {/* <a className="navbar-brand text-white" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav" id="navbarNav">
                        <ul className="navbar-nav ">
                            
                            <li className="nav-item">
                                <a class="nav-link text-white" href="./paginas/inicio.js">Inicio</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white" href="./paginas/mayor.js">Mayoristas</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white" href="./paginas/ccomprar.js">Cómo comprar</a>
                            </li>

                            <li class="nav-item">
                                <a className="nav-link text-white" href="./paginas/pregfrec.js">Preguntas frecuentes</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="./paginas/contac.js">Contacto</a>
                            </li>

                            <li classNaame="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="./paginas/talles.js">Guía de talles</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default navbar