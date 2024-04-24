import React from "react"

const Lista = () => {
    const [items, setItems] = React.useState(['item 0']) 
  
    function HandleClick() {
        setItems([...items,  'item ' + items.length])
    }

    function RemoveItem() {
        const removeItems = [...items]
        removeItems.pop()
        setItems(removeItems)
    }
    return(
        <>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        <button onClick={HandleClick}>Adicionar item</button>
        <button onClick={RemoveItem}>Remover item</button>
        </>
    )
}

export default Lista