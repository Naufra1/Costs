import './Home.css'
import savings from '../../Img/Porco.svg'
import LinkButton from '../Layout/LinkButton'

function Home() {
	return (
		<section className='home'>
			<h1 className='home__h1'>Bem-vindo ao <span className='home__span'>Costs</span></h1>
			<p className='home__txt'>Comece a gerenciar os seus projetos agora mesmo!</p>
			<LinkButton to='/newproject' text='Criar Projeto' />
			<img src={savings} alt="Costs" className='home__img' />
		</section>
	)
}

export default Home