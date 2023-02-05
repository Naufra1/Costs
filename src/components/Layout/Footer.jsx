import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

function Footer() {
	return (
		<footer className='footer'>
			<ul className='footer__list'>
				<li className='footer__item'>
					<FaFacebook />
				</li>
				<li className='footer__item'>
					<FaInstagram />
				</li>
				<li className='footer__item'>
					<FaLinkedin />
				</li>
			</ul>
			<p className='footer__txt'><span>costs</span> &copy; 2021</p>
		</footer>
	)
}

export default Footer