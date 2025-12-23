// components
import SpinningSpace from "../SpinningSpace/SpinningSpace";
import CallToActionButton from "../CallToActionButton/CallToActionButton";
import FreeCodeDomain from "../FreeCodeDomain/FreeCodeDomain";

// objects
import { ProjectImagesObject } from "~/json/ProjectImagesObject";
import { ProjectLinksObject } from "~/json/ProjectLinksObject";
import { ProjectSectionHashes } from "~/json/ProjectSectionHashes";

// component function
export default function HeroSection(){
  const heroSectionHashId = ProjectSectionHashes.find(item => item.label.includes('Comece Agora'))?.url;

  return (
    <>
      <section id={heroSectionHashId} className="relative mb-24 md:mb-48 lg:mb-82 scroll-mt-75">
        {/* spinning space background */}
        <SpinningSpace />

        <div className="w-full min-h-3/6 pt-12 absolute top-0 left-0 flex flex-col items-center justify-center gap-22">
          {/* call to action container */}
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-3xl md:text-7xl text-center md:max-w-[75%] lg:max-w-[65%] font-bold">
              Crie seu projeto em 30 segundos. <span className="underline decoration-blue-700">Não é exagero!</span>
            </h1>
            <a href={ProjectLinksObject.AppRegister.path}>
              <CallToActionButton label="Comece Grátis"/>
            </a>
          </div>

          {/* studio demonstration image */}
          <div className=" flex flex-col justify-center items-center px-1 md:px-5 lg:px-30">
            {/* free 'code.com.br' domain card' */}
            <FreeCodeDomain />

            {/* studio demo image */}
            <img
              className="border-3 border-[#007bff] opacity-75"
              src={ProjectImagesObject.CodeStudioDemo.src} 
              alt={ProjectImagesObject.CodeStudioDemo.alt} 
            />
          </div>
        </div>

        {/* waves below */}
        <img
          className="min-w-full" 
          src={ProjectImagesObject.HeroWaves.src} 
        />
      </section>
    </>
  )
}