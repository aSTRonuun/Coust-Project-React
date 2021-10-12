import Item1 from "./Item1";

function List1() {
    
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item1 marca='Tesla'ano_lancamento={2010}/>
                <Item1 marca='Toyota' ano_lancamento={1960}/>
                <Item1 marca='Volvo' ano_lancamento={1990}/>
                <Item1 />
            </ul>
        </>
    )
}

export default List1;