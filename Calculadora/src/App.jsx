import React, {useState} from "react";
import styled from "styled-components"
import { GlobalStyle } from "./Global";

const Button = styled.button`
background-color: #525252;
border-radius: 100px;
border: none;
width: 2vw;
height: 4vh;
color: white;
cursor: pointer;
margin-bottom: 2vw;
&:hover{
    background-color: black;
}
`

const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background-image: url(https://i.pinimg.com/originals/6f/98/26/6f98260f4c373ea24dd08242d994f603.jpg);
background-repeat: no-repeat;
background-size: 100vw;
font-family: Orbitron;
`
const Div = styled.div`
margin-bottom: 2vw;
margin-top: 2vw;
width: 20vw;
display: flex;
justify-content: space-around;
`

const Section= styled.section`
width: 14vw;
display: flex;
justify-content: space-around;
`

const Input= styled.input`
background-color: gray;
&::placeholder{
    color: #111111;
}
`


function App(){

    const [primeiroValor, setPrimeiroValor]= useState()
    const [segundoValor, setSegundoValor]= useState()
    const [resultado, setResultado] = useState()

    const capturandoPrimeiroValor = (evento) => {
        setPrimeiroValor(Number(evento.target.value))
    }

    const capturandoSegundoValor = (evento) => {
        setSegundoValor(Number(evento.target.value))
    }

    const soma = ()=>{
        setResultado(primeiroValor + segundoValor)
    }

    const subtracao = ()=>{
        setResultado(primeiroValor - segundoValor)
    }

    const multiplicacao = ()=>{
        setResultado(primeiroValor * segundoValor)
    }

    const divisao = ()=>{
        setResultado(primeiroValor / segundoValor)
    }

    const Limpar = () =>{
        setResultado(0)
    }
    


    
    return(
        <Main>
            <GlobalStyle />
            <h1>Calculadora</h1>
            <Div>
            <Input  onChange={capturandoPrimeiroValor} type="text" placeholder="Insira o primeiro valor"  />
            <Input onChange={capturandoSegundoValor} type="text" placeholder="Insira o segundo valor" />
            </Div>
            <Section>
            <Button onClick={soma}>+</Button>
            <Button onClick={subtracao}>-</Button>
            <Button onClick={multiplicacao}>x</Button>
            <Button onClick={divisao}>/</Button>
            <Button onClick={Limpar}>C</Button>
            </Section>
            <h2>{resultado}</h2>
        </Main>
    )
}

export default App