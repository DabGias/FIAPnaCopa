import { useState } from "react"
import "../css/Login.css"

function Login() {
    const [usuario, setUsuario] = useState({
        nome: "",
        login: "",
        senha: "",
        rm: 0
    })

    function handleChange(e) {
        setUsuario({...usuario, [e.target.name]: e.target.value})
    }

    const logar = async (e) => {
        e.preventDefault()

        const requestOption = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(usuario)
        }

        const response = await fetch("http://localhost:8080/FiapNaCopa/rest/login", requestOption)

        const data = await response.json()

        if (data.login) {
            sessionStorage.setItem("usuario-logado", data.nome)
        }

        if (data) {
            window.location = "/"
        } else {
            window.location = "/login"
        }
    }

    return(
        <>
            <form onSubmit={logar}>
                <h1>Login</h1>

                <input type="text" placeholder="Nome" name="nome" value={usuario.nome} onChange={handleChange}/>
                <input type="number" placeholder="RM" min={0} name="rm" value={usuario.rm} onChange={handleChange}/>
                <input type="text" placeholder="Login" name="login" value={usuario.login} onChange={handleChange}/>
                <input type="password" placeholder="Senha" name="senha" value={usuario.senha} onChange={handleChange}/>

                <button>Logar</button>
            </form>
        </>
    )
}

export default Login