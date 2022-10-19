import styled from "styled-components"

const StyleForm = styled.form `
    width: 40%;
    margin: 20px auto;
    border: 2px solid black;
    border-radius: 20px;
    box-shadow: 0 0 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-family: 'Montserrat', sans-serif;
        margin: 20px;
        text-align: center;
        font-size: 40px;
    }

    input {
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        padding: 10px;
        border: 2px solid black;
        border-radius: 10px;
        width: 50%;
        margin: 20px auto;
    }

    input:focus {
        background-color: #dfdfdf;
    }

    button {
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        width: 30%;
        margin: 20px auto;
        padding: 10px;
        border-radius: 10px;
        transition: 150ms;
    }

    button:hover {
        cursor: pointer;
        color: white;
        background-color: #002bff;
        box-shadow: 0 0 20px #002bff;
        transition: 150ms;
    }
`

function Login() {
    return(
        <>
            <StyleForm>
                <h1>Login</h1>

                <input type="text" placeholder="Nome"/>
                <input type="number" placeholder="RM" min={0}/>
                <input type="text" placeholder="Login"/>
                <input type="password" placeholder="Senha"/>

                <button>Logar</button>
            </StyleForm>
        </>
    )
}

export default Login