import React from 'react'
import "./Demo1.css"
import { FaBabyCarriage } from "react-icons/fa6";



function Demo1() {
  function responderClique(){
    alert("Parabéns, você clicou!")
  }

  return (
    <div className='container-demo1'>
        <button onClick={responderClique}>Clique aqui</button>
        <button onClick={ () => {alert("Eu nasci de uma arrow function!")}}><FaBabyCarriage />
        </button>
        
        <img className="img-dev" src="./imagens/Location review-cuate.svg" alt="" />
    </div>
  )
}

export default Demo1;