import '../Project/ProjectCard.css'

import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ id, cost, description, name, handleRemove }){
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  }

  return (
    <div className="project__card">
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
      <p>{description}</p>
      <div className="project__action">
        <button onClick={remove}><BsFillTrashFill />Excluir</button>
      </div>
    </div>
  )
}

export default ServiceCard