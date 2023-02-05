import Lista from '../lista'
import Logotipo from '../logotipo'
import Container from './Container'
import './Navbar.css'

function Navbar() {
	return (
		<nav className='nav'>
			<Container customClass=''>
				<Logotipo />
				<Lista />
			</Container>
		</nav>
	)
}

export default Navbar