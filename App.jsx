// O estado de uma aplicação representa as características dela naquele momento
import React from "react"
const App = () => {
    // ativo = true  
    const [ativo, setAtivo] = React.useState(true)
    const [contador, setContador] = React.useState(0)
    const [item, setItem] = React.useState(['item 0',])
    const [objeto, setObjeto] = React.useState({nome: '', idade: ''})

    function HandleClick() {
        setContador((contador) => {
            return contador + 1
        })
        setItem((item) => {
            return [...item, 'item' + contador]
        })
    }
    return(
        <>
        <button onClick={() => setAtivo(!ativo)}>
            {ativo === true ? "ativo" : "inativo"}
        </button>
        <button onClick={HandleClick}>
            {contador}
        </button>
        {item.map((element) => (
            <li key={element}>{element}</li>
        ))}
        </> 
    )
}

export default App