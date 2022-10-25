import { useEffect } from "react"
import "../css/Figs.css"
import Footer from "./Footer"
import Header from "./Header"
import Neymar from "../img/jogadores_nac/neymar.jpg"
import Pele from "../img/jogadores_nac/pele.jpg"
import Gabigol from "../img/jogadores_nac/gabigol.jpg"
import Ronaldinho from "../img/jogadores_nac/ronaldinho.jpg"
import Kaka from "../img/jogadores_nac/kaka.jpg"
import Cassio from "../img/jogadores_nac/cassio.jpg"

const usuario = sessionStorage.getItem("usuario-logado")

function FigNac() {
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
                                    <img src={Neymar} alt="" />
                                    <p>Nome: Neymar da Silva Santos Júnior</p>
                                </div>
                                <div className="fig">
                                    <img src={Gabigol} alt="" />
                                    <p>Nome: Gabriel Barbosa Almeida</p>
                                </div>
                                <div className="fig">
                                    <img src={Pele} alt="" />
                                    <p>Nome: Edson Arantes do Nascimento</p>
                                </div>
                                <div className="fig">
                                    <img src={Cassio} alt="" />
                                    <p>Nome: Cássio Roberto Ramos</p>
                                </div>
                                <div className="fig">
                                    <img src={Kaka} alt="" />
                                    <p>Nome: Ricardo Izecson dos Santos Leite</p>
                                </div>
                                <div className="fig">
                                    <img src={Ronaldinho} alt="" />
                                    <p>Nome: Ronaldo de Assis Moreira</p>
                                </div>
                                <div className="fig">
                                    <img src={Cassio} alt="" />
                                    <p>Nome: Cássio Roberto Ramos</p>
                                </div>
                                <div className="fig">
                                    <img src={Pele} alt="" />
                                    <p>Nome: Edson Arantes do Nascimento</p>
                                </div>
                                <div className="fig">
                                    <img src={Kaka} alt="" />
                                    <p>Nome: Ricardo Izecson dos Santos Leite</p>
                                </div>
                                <div className="fig">
                                    <img src={Gabigol} alt="" />
                                    <p>Nome: Gabriel Barbosa Almeida</p>
                                </div>
                            </main>
                        <Footer/>
                    </>
                )
            }
        </>
    )
}

export default FigNac