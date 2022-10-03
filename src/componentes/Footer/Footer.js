import React from 'react'
import "../../App.css"


const Footer = () => {
    return (

        <div className="container-fluid cont__Footer">
            <div className="row footer">
                <div className="col-12 col-md-4 ">
                    <h1>Nosotros</h1>
                    <p className='footer__nos--p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus sapiente esse ipsum quis maiores porro magni, pariatur eaque ad fuga nemo, officia quisquam odio amet vel aperiam placeat. Doloribus!</p>

                    <div className="footer__redes">

                        <i className="footer__redes--cont ri-facebook-line"></i>
                        <i className="footer__redes--cont ri-instagram-line"></i>
                        <i className="footer__redes--cont ri-twitter-line"></i>
                    </div>
                </div>

                <div className="col-12 col-md-4  ">
                    <h1>Registrate</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Confirmar</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
                <div className="col-12 col-md-4 brand">
                    <h1>Como empezamos</h1>
                    <p className='footer__nos--p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate similique quos magnam, perferendis eius quasi nostrum, numquam sit dolor nam pariatur sed consequuntur aliquid temporibus perspiciatis. Tenetur ipsam non soluta?</p>

                </div>
            </div>

            <div className="row footer__copy">
                <span>© Copyright. Todos los derechos reservados. Defensa de las y los consumidores. Para reclamos <a className="footer__a" href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" target="_blank">ingrese aquí</a> </span>
            </div>
        </div>
    )
}

export default Footer


