import React from "react";

// https://ranekapi.origamid.dev/json/api/produto/tablet
const Tablet = () => {
    const [dadosTab, setDadosTab] =  React.useState(null)
    const [dadosNot, setDadosNot] =  React.useState(null)
    const [dadosSmart, setDadosSmart] =  React.useState(null)
    let resNote = ''
    let resTab = ''
    let resSmart = ''

    async function getData() {
        const dataTab = await fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
        const dataNot = await fetch('https://ranekapi.origamid.dev/json/api/produto/notebook') 
        const dataSmart = await fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone')
        resTab = await dataTab.json()
        resNote = await dataNot.json()
        resSmart = await dataSmart.json()
    }
    getData()
    function MostrarTablet() {
        const data = [resNote.nome, resNote.preco]
        setDadosTab(data)
    }

    function MostrarNotebook() {
        const data = [resSmart.nome, resSmart.preco]
        setDadosNot(data)
    }

    function MostrarSmartphone() {
        const data = [resTab.nome, resTab.preco]
        setDadosSmart(data)
    }
    return(
        <>
        <button onClick={MostrarTablet}>Tablet</button>
        <span>{dadosTab}</span>
        <button onClick={MostrarNotebook}>Notebook</button>
        <span>{dadosNot}</span>
        <button onClick={MostrarSmartphone}>Smartphone</button>
        <span>{dadosSmart}</span>
        </>
    )
}

export default Tablet