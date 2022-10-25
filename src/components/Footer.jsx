import styled from "styled-components"

const StyleFooter = styled.footer `
    padding: 20px;
    background-color: green;
    text-align: center;

    h1 {
        margin-bottom: 20px;
        font-family: 'Montserrat', sans-serif;
    }

    p {
        font-family: 'Montserrat', sans-serif;
    }
`

function Footer() {
    return(
        <>
            <StyleFooter>
                <h1>Integrantes</h1>
                <p>Gabriel Furlaneti Dias, RM94419</p>
            </StyleFooter>
        </>
    )
}

export default Footer