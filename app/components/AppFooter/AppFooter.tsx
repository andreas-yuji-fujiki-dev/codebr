// objects
import { ProjectImagesObject } from "~/json/ProjectImagesObject"
import { ProjectLinksObject } from "~/json/ProjectLinksObject";

// component function
export default function AppFooter(){
  const date = new Date();
  const currentYear = String(date.getFullYear());

  return (
    <footer className="flex flex-col gap-10 md:flex-row md:gap-0 justify-between items-center py-20 px-10 mt-35 bg-black">
      {/* left side */}
      <div>
        <a href={ProjectLinksObject.Home.path}>
          <img 
            className="w-50" 
            src={ProjectImagesObject.CodeLogo.src} 
            alt={ProjectImagesObject.CodeLogo.alt} 
          />
        </a>
      </div>

      {/* right side */}
      <div className="flex text-center md:text-left flex-col gap-2">
          <span>
            &copy; Code {currentYear} by Obscure Network <br />
          </span>
          <span>
            Todos os direitos reservados.
          </span>
        </div>
    </footer>
  )
}