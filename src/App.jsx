import React, { useEffect, useState } from 'react';
import './App.css'
function App() {

  const [numeroMarcado, setNumeroMarcado] = useState([])
  const [mostrarModal, setMostrarModal] = useState(false)

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
    if (numeroMarcado.includes(numero)) {
      const novaLista = numeroMarcado.filter(n => n !== numero)
      setNumeroMarcado(novaLista)
    } else {
      const novaLista = [...numeroMarcado, numero]
      setNumeroMarcado(novaLista)
    }

  }
  const resetar = () => {
    const confirmar = window.confirm("Tem certeza que deseja resetar o bingo?")

    if (confirmar) {
      setNumeroMarcado([])
    }
  }

  useEffect(() => {
    console.log(numeroMarcado)
  }, [numeroMarcado])
  return (
  <div className="app">
    <div className="container">
      {letras.map((letra) => (
        <div key={letra} className="linha">
          <div className="letra">{letra}</div>

          {bingo[letra].map((numero) => (
            <div
              key={numero}
              className={
                numeroMarcado.includes(numero)
                  ? "numero marcado"
                  : "numero"
              }
              onClick={() => marcarNumero(numero)}
            >
              {numero}
            </div>
          ))}
        </div>
      ))}

      <button
        className="botao-reset"
        onClick={() => setMostrarModal(true)}
        disabled={numeroMarcado.length === 0}
      >
        Resetar Bingo
      </button>
    </div>

    {mostrarModal && (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Resetar Bingo?</h2>

          <p>
            Tem certeza que deseja limpar todos os números marcados?
          </p>

          <div className="modal-botoes">
            <button
              className="cancelar"
              onClick={() => setMostrarModal(false)}
            >
              Cancelar
            </button>

            <button
              className="confirmar"
              onClick={() => {
                setNumeroMarcado([])
                setMostrarModal(false)
              }}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
)
}

export default App