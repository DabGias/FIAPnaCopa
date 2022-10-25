import { useEffect } from "react"
import "../css/Figs.css"
import Footer from "./Footer"
import Header from "./Header"
import Cristiano from "../img/jogadores_inter/crist.jpg"
import Salah from "../img/jogadores_inter/salah.jpg"
import Ibramovic from "../img/jogadores_inter/ibramovic.jpg"
import Maradona from "../img/jogadores_inter/maradona.jpg"
import Mbape from "../img/jogadores_inter/mbape.jpg"
import Messi from "../img/jogadores_inter/messi.jpg"

const usuario = sessionStorage.getItem("usuario-logado")

function FigInternac() {
    useEffect(() => {
        if (usuario === null) {
            window.location = "/"
        }
    }, [])

    return(
        <>
            {
                usuario && (
                    <>
                        <Header/>
                            <div className="msg">
                                <h1>Bem-vindo(a), <p>{usuario}</p>!</h1>
                            </div>

                            <main className="figs">
                                <div className="fig">
                                    <img src={Cristiano} alt="" />
                                    <p>Nome: Cristiano Ronaldo dos Santos Aveiro</p>
                                </div>
                                <div className="fig">
                                    <img src={Messi} alt="" />
                                    <p>Nome: Lionel Andrés Messi Cuccittini</p>
                                </div>
                                <div className="fig">
                                    <img src={Maradona} alt="" />
                                    <p>Nome: Diego Armando Maradona Franco</p>
                                </div>
                                <div className="fig">
                                    <img src={Salah} alt="" />
                                    <p>Nome: Mohamed Salah Hamed Mahrous Ghaly</p>
                                </div>
                                <div className="fig">
                                    <img src={Mbape} alt="" />
                                    <p>Nome: Kylian Sanmi Mbappé Lottin</p>
                                </div>
                                <div className="fig">
                                    <img src={Cristiano} alt="" />
                                    <p>Nome: Cristiano Ronaldo dos Santos Aveiro</p>
                                </div>
                                <div className="fig">
                                    <img src={Salah} alt="" />
                                    <p>Nome: Mohamed Salah Hamed Mahrous Ghaly</p>
                                </div>
                                <div className="fig">
                                    <img src={Ibramovic} alt="" />
                                    <p>Nome: Zlatan Ibrahimović</p>
                                </div>
                                <div className="fig">
                                    <img src={Mbape} alt="" />
                                    <p>Nome: Kylian Sanmi Mbappé Lottin</p>
                                </div>
                                <div className="fig">
                                    <img src={Messi} alt="" />
                                    <p>Nome: Lionel Andrés Messi Cuccittini</p>
                                </div>
                            </main>
                        <Footer/>
                    </>
                )
            }
        </>
    )
}

export default FigInternac