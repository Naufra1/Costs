import { Link } from 'react-router-dom'
import './item.css'

function Item() {
	return (
		<>
			<li>
				<Link to='/' className='nav__item'>Home</Link>
			</li>
			<li>
				<Link to='/empresa' className='nav__item'>Empresa</Link>
			</li>
			<li>
				<Link to='/projects' className='nav__item'>Projetos</Link>
			</li>
			<li>
				<Link to='/contato' className='nav__item'>Contato</Link>
			</li>
		</>
	)
}

export default Item