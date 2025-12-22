// core
import { useState } from "react";

// components
import FeatureCards from "../FeatureCards/FeatureCards";

// objects
import { projectCreationSteps } from "./projectCreationSteps";
import { ProjectSectionHashes } from "~/json/ProjectSectionHashes"

// icons
import { SlArrowRight } from "react-icons/sl";

// component function
export default function SolutionsSection(){
  const solutionsSectionHashId = ProjectSectionHashes.find((item) => item.label === "Soluções")?.url;

  const [stepSelected, setStepSelected] = useState(0)

  return (
    <section id={solutionsSectionHashId}>
      {/* feature cards */}
      <div className="flex flex-col mb-35">
        <div className="mb-48">
          <h2 className="text-center text-6xl">
            O Code <span className="bg-linear-to-r from-[#E001FF] via-[#6F3FFF] to-[#007BFF] bg-clip-text text-transparent">Facilita</span> para você:
          </h2>
        </div>
        <FeatureCards />
      </div>

      {/* steps carousel */}
      <div>
        {/* section title and description */}
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-6xl text-center leading-18 font-bold">
            3 Passos <br />
            para criar seu site.
          </h2>
          <p className="text-center text-3xl opacity-80">
            Veja como é prático e rápido <span className="bg-linear-to-r from-[#E001FF] via-[#6F3FFF] to-[#007BFF] bg-clip-text text-transparent">criar um projeto do zero</span>.
          </p>
        </div>

        {/* carousel */}
        <div className="mt-14 flex gap-10 justify-between w-full  py-15 px-10">
          {/* steps map */}
          <div className="flex max-w-5/12 flex-col gap-5">
            {projectCreationSteps.map((item, index) => (
              <div key={index} className="relative">
                {/* item container */}
                <div
                  onClick={() => setStepSelected(index)}
                  className={`
                    flex w-10/12 gap-5 px-8 py-10 cursor-pointer rounded-2xl
                    border transition-colors duration-200
                    ${stepSelected === index ? "border-white" : "border-transparent"}
                  `}
                >
                  {/* icon */}
                  <div
                    style={{ backgroundColor: item.iconBackgroundColor }}
                    className="flex items-center justify-center p-6 min-w-20 h-20 rounded-xl"
                  >
                    {item.icon}
                  </div>

                  {/* title and description */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* arrow */}
                {stepSelected === index && (
                  <SlArrowRight
                    className="
                      absolute -right-6 top-1/2 -translate-y-1/2
                      text-white text-4xl pointer-events-none
                    "
                  />
                )}
              </div>
            ))}
          </div>

          {/* aside image */}
          <div
            style={{
              backgroundImage: `url(${projectCreationSteps[stepSelected].image})`,
            }}
            className="flex w-full  bg-contain bg-no-repeat bg-center rounded-2xl transition-all duration-300"
          ></div>
        </div>
      </div>
    </section>
  )
}