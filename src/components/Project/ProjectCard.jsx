import { Link } from 'react-router-dom'
import './ProjectCard.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({ id, name, budget, category, handleRemove }) {

	const remove = (e) => {
		e.preventDefault()
		handleRemove(id)
	}

	return (
		<div className='project__card'>
			<h4>
				{name}
			</h4>
			<p>
				<span>Orçamento:</span> R${budget}
			</p>
			<p className='category__text'>
				<span className={category} ></span> {category}
			</p>
			<div className='project__action'>
				<Link to={`/project/${id}`}>
					<BsPencil /> Editar
				</Link>
				<button onClick={remove}>
					<BsFillTrashFill /> Excluir
				</button>
			</div>
		</div>
	)
}

export default ProjectCard