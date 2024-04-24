import React from "react"

const Button = () => {
    const [num, setNum] = React.useState(0)
    
    function Acrescimo() {
        setNum(num + 1)
    }
    function Decrescimo() {
        setNum(num - 1)
    }
    
    return(
        <>
        <button onClick={Decrescimo}>-</button>
        <span>{num}</span>
        <button onClick={Acrescimo}>+</button>
        </>
    )
}

export default Button