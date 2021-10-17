import { useState } from "react"
import Message from "../layout/Message"

function Projects() {

    const location = useState();
    let message = ''
    if(location.state) {
        message = location.state.message;
    }

    return (
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message type="success" msg={message} />}
        </div>
    )
}

export default Projects
 