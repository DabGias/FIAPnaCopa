import styled from "styled-components"
import { Link } from "react-router-dom"

const StyleHeader = styled.header `
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        width: 14%;
        text-align: left;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: space-betwenn;
    }

    ul li {
        margin: 10px;
    }

    a {
        color: black;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
    }

    button {
        font-family: 'Montserrat', sans-serif;
        width: 10%;
        margin: 20px 20px;
        padding: 10px;
        border-radius: 10px;
        transition: 150ms;
    }

    button:hover {
        cursor: pointer;
        color: white;
        background-color: #ff2424;
        box-shadow: 0 0 20px red;
        transition: 150ms;
    }
`

function Header() {
    return(
        <>
            <StyleHeader>
                <h1><Link to={"/home"}>FIAP na COPA</Link></h1>

                <nav>
                    <ul>
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/figs-nacionais"}>Figs. Nacionais</Link></li>
                        <li><Link to={"/figs-internacionais"}>Figs. Internacionais</Link></li>
                    </ul>
                </nav>

                <button>Sair</button>
            </StyleHeader>
        </>
    )
}

export default Header