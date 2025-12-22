// icons
import { FaCode } from "react-icons/fa6";
import { FaPersonCircleCheck } from "react-icons/fa6";

// css
import './feature-cards.css';

// component function
export default function FeatureCards(){
  // cards list items
  const programmerItems = [
    "Acelere o desenvolvimento com templates personalizáveis",
    "Integração fácil com ferramentas de desenvolvimento populares",
    "Economize tempo em projetos repetitivos e foque na inovação",
    "Acesso a uma comunidade de desenvolvedores para troca de ideias e suporte"
  ];    
  
  const beginnerItems = [
    "Tutoriais interativos e didáticos",
    "Acesso a uma comunidade engajada",
    "Modifique templates prontos e crie seu próprio projeto",
    "Suporte disponível sempre que você precisar"
  ];    

  return (
    <div className="solution-cards-container">
      {/* programmers card */}
      <div className="solution-card programmers-card">
        {/* hover effect boxes */}
        <div className="hover-area hover-area-1" />
        <div className="hover-area hover-area-2" />
        <div className="hover-area hover-area-3" />
        <div className="hover-area hover-area-4" />

        {/* card  */}
        <div className='card'>
          {/* card header */}
          <div className="card-header">
            <FaCode /> Programadores
          </div>

          {/* card info */}
          <div className="cardInfo">
            <ul className="cardItems">
              {programmerItems.map((item, index) => (
                // rendering card items
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* beginners card */}
      <div className='solution-card beginners-card'>
        {/* hover effect boxes */}
        <div className="hover-area hover-area-1" />
        <div className="hover-area hover-area-2" />
        <div className="hover-area hover-area-3" />
        <div className="hover-area hover-area-4" />

        {/* card  */}
        <div className='card'>
          {/* card header */}
          <div className="card-header">
            <FaPersonCircleCheck />Iniciantes
          </div>

          {/* card info */}
          <div className="cardInfo">
            <ul className="cardItems">
              {beginnerItems.map((item, index) => (
                // rendering card items
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}