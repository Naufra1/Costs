import { Link } from 'react-router-dom'
import logo from '../Img/costs_logo.png'
import './logotipo.css'

function Logotipo() {
	return (
		<Link to='/'>
			<img src={logo} alt="Logo" className='nav__logo' />
		</Link>
	)
}

export default Logotipo