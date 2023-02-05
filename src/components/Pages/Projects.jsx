import axios from "axios"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import Loading from '../Layout/Loading'
import Container from "../Layout/Container"
import LinkButton from "../Layout/LinkButton"
import Message from "../Layout/Message"
import ProjectCard from "../Project/ProjectCard"
import './Projects.css'

function Projects() {
	const [projects, setProjects] = useState([])
	const [removeLoading, setRemoveLoading] = useState(false)
	const [projectMessage, setProjectMessage] = useState('')
	const url = 'http://localhost:5000/projects'

	const location = useLocation()
	let message = ''
	if (location.state) {
		message = location.state.message
	}

	useEffect(() => {
		setTimeout(() => {
			axios.get(url)
				.then(resp => {
					setProjects(resp.data)
					setRemoveLoading(true)
				})
				.catch(erro => console.log(erro))
		}, 300)
	}, [])

	function removeProject(id) {
		axios.delete(`${url}/${id}`)
			.then(() => {
				setProjects(projects.filter((project) => project.id !== id))
				setProjectMessage('Projeto Removido com sucesso!')
			})
			.cacth(erro => console.log(erro))
	}

	return (
		<div className="project">
			<div className="project__titulo">
				<h1>Meus Projetos</h1>
				<LinkButton to='/newproject' text='Criar Projeto' />
			</div>
			{message && <Message type='success' msg={message} />}
			{projectMessage && <Message type='success' msg={projectMessage} />}
			<Container customClass='start'>
				{projects.length > 0 &&
					projects.map(project =>
						<ProjectCard
							id={project.id}
							name={project.name}
							budget={project.budget}
							category={project.category.name}
							key={project.id}
							handleRemove={removeProject}
						/>
					)}
				{!removeLoading && <Loading />}
				{removeLoading && projects.length === 0 && (
					<p>Não há projetos cadastrados!</p>
				)}
			</Container>
		</div>
	)
}

export default Projects