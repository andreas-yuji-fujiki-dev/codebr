// objects
import { ProjectImagesObject } from "~/json/ProjectImagesObject";

// component function
export default function AppHeader(){
  return (
    <header className="relative bg-black">
      {/* left block */}
      <div className="">
        <h1 className="absolute top-0 left-0 opacity-0">Code Brasil</h1>

        <img 
          src={ProjectImagesObject.CodeLogo.src} 
          alt={ProjectImagesObject.CodeLogo.alt} 
        />
      </div>

      {/* centered block */}
      <div className="">
        <ul className="flex">
          <li>
            
          </li>
        </ul>
      </div>

      {/* right block */}
      <div className="">
      </div>
    </header>
  )
}