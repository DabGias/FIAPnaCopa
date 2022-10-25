import styled from "styled-components"
import { Link } from "react-router-dom"

const StyleTitulo = styled.h1 `
    padding-top: 10px;
    background-color: green;
    text-align: center;

    a {
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        color: black;
    }
`

const StyleHeader = styled.header `
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        margin-left: 20px;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    ul li {
        margin: 10px;
    }

    a {
        color: black;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
    }

    #logar {
        font-family: 'Montserrat', sans-serif;
        width: 10%;
        margin: 20px;
        padding: 10px;
        border-radius: 10px;
        transition: 150ms;
    }

    #logar:hover {
        cursor: pointer;
        color: white;
        background-color: #002bff;
    box-shadow: 0 0 20px #002bff;
        transition: 150ms;
    }

    #sair {
        font-family: 'Montserrat', sans-serif;
        width: 10%;
        margin: 20px;
        padding: 10px;
        border-radius: 10px;
        transition: 150ms;
    }

    #sair:hover {
        cursor: pointer;
        color: white;
        background-color: #ff2424;
        box-shadow: 0 0 20px red;
        transition: 150ms;
    }
`

const usuario = sessionStorage.getItem("usuario-logado")

function Header() {
    function logar() {
        window.location = "/login"
    }

    function sair() {
        sessionStorage.removeItem("usuario-logado")
        window.location = "/"
    }

    return(
        <>
            <StyleTitulo><Link to={"/"}>⚽ FIAP na COPA 🌎</Link></StyleTitulo>
            <StyleHeader>
                <nav>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/figs-nacionais"}>Figs. Nacionais</Link></li>
                        <li><Link to={"/figs-internacionais"}>Figs. Internacionais</Link></li>
                    </ul>
                </nav>

                {usuario === null ? <button id="logar" onClick={logar}>Logar</button> : <button id="sair" onClick={sair}>Sair</button>}
            </StyleHeader>
        </>
    )
}

export default Header