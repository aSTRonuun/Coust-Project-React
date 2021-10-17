import { useHistory } from 'react-router'
import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {

    function createPost(project) {
        // initialize cost and services
        project.cos = 0;
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'aplication/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
            })
            .catch(err => console.log(err))
    }

    const history = useHistory()

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject