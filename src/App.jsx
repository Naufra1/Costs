import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

import Contato from './components/Pages/Contato'
import Home from './components/Pages/Home'
import NewProject from './components/Pages/NewProject'
import Projects from './components/Pages/Projects'

import Container from './components/Layout/Container'
import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'
import Project from './components/Pages/Project'

function App() {

  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/newproject' element={<NewProject />} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
