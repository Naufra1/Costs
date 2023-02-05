import axios from 'axios'
import { parse, v4 as uuidv4 } from 'uuid'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../Layout/Loading'
import Container from '../Layout/Container'
import ProjectForm from '../Project/ProjectForm'
import Message from '../Layout/Message'
import ServiceForm from '../Service/ServiceForm'
import ServiceCard from '../Service/ServiceCard'

import './Project.css'

function Project() {
	const [project, setProject] = useState([])
	const [services, setServices] = useState([])
	const [showProjectForm, setShowProjectForm] = useState(false)
	const [showServiceForm, setShowServiceForm] = useState(false)
	const [message, setMessage] = useState()
	const [type, setType] = useState()

	const { id } = useParams()
	const url = `http://localhost:5000/projects/${id}`

	useEffect(() => {
		setTimeout(() => {
			axios.get(url)
				.then(resp => {
					setProject(resp.data)
					setServices(resp.data.services)
				})
				.catch(erro => console.log(erro))
		}, 300)
	}, [id])

	function editPost(project){
		setMessage('')

		if(project.budget < project.cost){
				setType('error')
				setMessage('O orçamento não pode ser menor do que o custo!')
				return false
		}

		axios.patch(url, project)
		.then(resp => {
			setProject(resp.data)
			setShowProjectForm(!setShowProjectForm)
			setMessage('Projeto atualizado')
			setType('success')
		})
		.catch(erro => console.log(erro))
	}

	function createService(project) {
		setMessage('')
		
		const lastService = project.services[project.services.length - 1]
		lastService.id = uuidv4()

		const lastServiceCost = lastService.cost
		const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

		if(newCost > parseFloat(project.budget)){
			setMessage('Orçamento ultrapassado, verifique o valor do serviço')
			setType('error')
			project.services.pop()
			return false
		}

		project.cost = newCost

		axios.patch( url, project)
		.then(resp => {
			setShowServiceForm(false)
		})
		.catch(erro => console.log(erro))
	}

	function removeService(id, cost){
		setMessage('')
		
		const servicesUpdated = project.services.filter((service) => service.id !== id)
		const projectUpdated = project

		projectUpdated.services = servicesUpdated
		projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

		axios.patch(`http://localhost:5000/projects/${projectUpdated.id}`,projectUpdated)
		.then(() => {
			setProject(projectUpdated)
			setServices(servicesUpdated)
			setMessage('Serviço removido com sucesso!')
			setType('success')
		})
		.catch(erro => console.log(erro))
	}

	function toggleProjectForm() {
		setShowProjectForm(!showProjectForm)
	}

	function toggleServiceForm() {
		setShowServiceForm(!showServiceForm)
	}

	return (
		<>
			{project.name ? (
				<div className='project__details'>
					<Container customClass='column'>
						{message && <Message type={type} msg={message} />}
						<div className='details__container'>
							<h1>Projeto: {project.name}</h1>
							<button onClick={toggleProjectForm} className='btn'>
								{!showProjectForm ? 'Editar projeto' : 'Fechar'}
							</button>
								{!showProjectForm ? (
								<div className='project_info'>
									<p>
										<span>Categoria:</span> {project.category.name}
									</p>
									<p>
										<span>Total de Orçamento:</span> {project.budget}
									</p>
									<p>
										<span>Total Utilizado:</span> {project.cost}
									</p>
								</div>
							) : (
								<div className='project_info'>
									<ProjectForm 
									handleSubmit={editPost} 
									btnText='Concluir edição'
									projectData={project} 
								/>
								</div>
							)}
						</div>
						<div className="service_form_container">
							<h2>Adicione um serviço</h2>
							<button onClick={toggleServiceForm} className='btn'>
								{!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
							</button>
							<div className="project_info">
								{showServiceForm && (
									<ServiceForm
										handleSubmit={createService}
										btnText='Adicionar Serviço'
										projectData={project}
									/>
								)}
							</div>
						</div>
						<h2>Serviços</h2>
						<Container customClass='start'>
								{services.length > 0 && 
									services.map((service) => (
										<ServiceCard 
											id={service.id}
											name={service.name}
											cost={service.cost}
											description={service.description}
											key={service.id}
											handleRemove={removeService}
										/>
									))
								}
								{services.length === 0 && <p>Não há serviços cadastrados.</p>}
						</Container>
					</Container>
				</div>
			) : (
				<Loading />
			)}
		</>
	)
}

export default Project