import Item from "./Item";

function List() {
    
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Tesla'/>
                <Item marca='Toyota'/>
                <Item marca='Volvo'/>
            </ul>
        </>
    )
}

export default List;