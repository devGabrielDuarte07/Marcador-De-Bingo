import React, { useEffect, useState } from 'react';
import './App.css'
function App() {

  const [numeroMarcado, setNumeroMarcado] = useState([])

  const GerarNumeros = (primeiroNumero, ultimoNumero) => {
    const numeros = [];

    for (let i = primeiroNumero; i <= ultimoNumero; i++) {
      numeros.push(i)
    }
    return numeros;
  };

  const bingo = {
    B: GerarNumeros(1, 15),
    I: GerarNumeros(16, 30),
    N: GerarNumeros(31, 45),
    G: GerarNumeros(46, 60),
    O: GerarNumeros(61, 75)
  }

  const letras = ['B', 'I', 'N', 'G', 'O']

  const marcarNumero = (numero) => {
    if(numeroMarcado.includes(numero)){
      const novaLista = numeroMarcado.filter(n => n !== numero)
      setNumeroMarcado(novaLista)
    } else {
      setNumeroMarcado(numero)
    }
  }
  return (
    <>
      <div className='container'>

        <div className='cabecalho'>
            {letras.map((letra, letras) => {
              return (
                <div> 
                  <div className='letra' key={letras}>{letra}</div>
                </div>
              )
            })}
        </div>
        {

          bingo.B.map((numero, indice) => {

            return (
              <div key={indice} className='linha'>
                <div className='numero' onClick={() => marcarNumero(numero)}>
                  {numero}
                </div>

                <div className='numero' onClick={() => marcarNumero(bingo.I[indice])}>
                  {bingo.I[indice]}
                </div>

                <div className='numero' onClick={() => marcarNumero(bingo.N[indice])}>
                  {bingo.N[indice]}
                </div>

                <div className='numero' onClick={() => marcarNumero(bingo.G[indice])}>
                  {bingo.G[indice]}
                </div>

                <div className='numero' onClick={() => marcarNumero(bingo.O[indice])}>
                  {bingo.O[indice]}
                </div>

              </div>)
          })

        }
      </div>
    </>
  )
}

export default App