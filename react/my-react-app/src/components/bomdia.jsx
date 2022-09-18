import React from 'react'
export default props => 
<React.Fragment>
    <h1>Bom dia {props.nome}, tenho {props.idade} anos</h1>
    <h2>Até breve!</h2>
</React.Fragment>

//ou colocar um fragmento dentro de uma div
//outra maneira

// import React, {Fragment} from 'react'
// export default props => 
// <Fragment>
//     <h1>Bom dia {props.nome}, tenho {props.idade} anos</h1>
//     <h2>Até breve!</h2>
// </Fragment>

//outra maneira

// import React from 'react'
// export default props => [
//     <h1>Bom dia {props.nome}, tenho {props.idade} anos</h1>, <h2>Até breve!</h2>
// ]
