import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import ProjectForm from '../Project/ProjectForm'
import './NewProject.css'

function NewProject() {
	const navigate = useNavigate()
	const url = 'http://localhost:5000/projects'

	function createPost(project) {
		//inicializa o custo com 0 e o serviço vazio
		project.cost = 0
		project.services = []

		axios.post(url, project)
			.then(() => navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } }))
			.catch(erro => console.log(erro))
	}


	return (
		<section className='newproject'>
			<h1 className='newproject__h1'>Criar Projeto</h1>
			<p className='newproject__txt'>Crie o seu projeto para depois adicionar serviços</p>
			<ProjectForm handleSubmit={createPost} btnText='Crie seu projeto' />
		</section>
	)
}

export default NewProject