import Button from "./Button";

function Evento1() {

    function meuEvento() {
        console.log(`Ativando primeiro evento.`);
    }

    function segundoEvento() {
        console.log(`Ativando segundo evento.`);
    }

    return(
        <>
            <p>Clique para dispara um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </>
    )
}

export default Evento1