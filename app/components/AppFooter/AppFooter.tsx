// objects
import { ProjectImagesObject } from "~/json/ProjectImagesObject"
import { ProjectLinksObject } from "~/json/ProjectLinksObject"

// component function
export default function AppFooter(){
  const date = new Date();
  const currentYear = String(date.getFullYear());

  return (
    <footer className="flex justify-between items-center py-20 px-10 mt-35 bg-black">
      {/* left side */}
      <div>
        <img 
          className="w-50" 
          src={ProjectImagesObject.CodeLogo.src} 
          alt={ProjectImagesObject.CodeLogo.alt} 
        />
      </div>

      {/* right side */}
      <div className="flex flex-col gap-2">
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