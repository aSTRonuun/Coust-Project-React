function Saudacao({name}) {

    function gerarSaudacao(name) {
        return `Olá, ${name}! Bem-Vindo.`
    }

    return (
        <>
            {name && <p>{gerarSaudacao(name)}</p>}
        </>
    )
}

export default Saudacao