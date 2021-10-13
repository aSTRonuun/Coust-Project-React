function Evento({numero}) {

    function meuEvento() {
        console.log(`Evento Ativado com o numero ${numero}`);
    }

    return(
        <>
            <p>Clique para dispara um evento:</p>
            <button onClick={meuEvento}> Ativar!</button>
        </>
    )
}

export default Evento