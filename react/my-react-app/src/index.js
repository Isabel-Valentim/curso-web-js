import React from 'react'
import ReactDOM from 'react-dom'


//esse componete Primeiro pode se chamar qualquer coisa 
// só que tem que ser em letra maiúscula para diferenciar um componete meu de um que ja existe como <div> 
// o nome dentro da tag no rander deve ser igual
import Pai from './components/pai'
import Filho from './components/filho'
ReactDOM.render( 
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
        </Pai>    
    </div>
, document.getElementById('root'))

//posso escrever <Bomdia /> assim também : <Bomdia></Bomdia>