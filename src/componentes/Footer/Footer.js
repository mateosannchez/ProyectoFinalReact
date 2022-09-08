import React from 'react'
import "../../App.css"

const Footer = () => {
    return (
        <div className='footer__grid'>
            <div className="footer__nosotros">

                <h1>Nosotros</h1>
                <p className='footer__nos--p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus sapiente esse ipsum quis maiores porro magni, pariatur eaque ad fuga nemo, officia quisquam odio amet vel aperiam placeat. Doloribus!</p>
                
                <div className="footer__redes">

                <i className="footer__redes--cont ri-facebook-line"></i>
                <i className="footer__redes--cont ri-instagram-line"></i>
                <i className="footer__redes--cont ri-twitter-line"></i>
                </div>

            </div>

            <div className="footer__suscrip">
                <h1>Registrate</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input  type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input  type="checkbox" className="form-check-input" id="exampleCheck1"  />
                        <label className="form-check-label" for="exampleCheck1">Confirmar</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>

            <div className='footer__emp'>
                <h1>Como empezamos</h1>
                <p className='footer__nos--p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate similique quos magnam, perferendis eius quasi nostrum, numquam sit dolor nam pariatur sed consequuntur aliquid temporibus perspiciatis. Tenetur ipsam non soluta?</p>

            </div>
        </div>
    )
}

export default Footer


