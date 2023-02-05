import axios from 'axios'
import { useEffect, useState } from 'react'

import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'

import './ProjectForm.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {
	const [categories, setCategories] = useState([])
	const [project, setProject] = useState(projectData || [])
	const url = 'http://localhost:5000/categories'

	const submit = (e) => {
		e.preventDefault()
		handleSubmit(project)
	}

	function handleChange(e) {
		setProject({ ...project, [e.target.name]: e.target.value })
	}

	function handleCategory(e) {
		setProject({
			...project, category: {
				id: e.target.value,
				name: e.target.options[e.target.selectedIndex].text
			}
		})
	}

	useEffect(() => {
		axios.get(url)
			.then(resp => setCategories(resp.data))
			.catch(erro => console.log(erro))
	}, [])


	return (
		<form onSubmit={submit} className='form'>
			<Input
				type='text'
				placeholder="Insira o nome do projeto"
				text='Nome do projeto'
				name='name'
				handleOnChange={handleChange}
				value={project.name ? project.name : ''}
			/>
			<Input
				type="number"
				placeholder="Insira o orçamento total"
				text='Orçamento do projeto'
				name='budget'
				handleOnChange={handleChange}
				value={project.budget ? project.budget : ''}
			/>
			<div>
				<Select
					name='form__id'
					text='Selecione uma categoria'
					options={categories}
					handleOnChange={handleCategory}
					value={project.category ? project.category.id : ''}
				/>
			</div>
			<SubmitButton text={btnText} />
		</form>
	)
}

export default ProjectForm