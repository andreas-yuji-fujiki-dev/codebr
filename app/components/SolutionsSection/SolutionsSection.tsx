// core
import { useEffect, useState } from "react";

// components
import FeatureCards from "../FeatureCards/FeatureCards";

// objects
import { projectCreationSteps } from "./projectCreationSteps";
import { ProjectSectionHashes } from "~/json/ProjectSectionHashes";

// icons
import { SlArrowRight } from "react-icons/sl";
import { MdOutlineTouchApp } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function SolutionsSection() {
  // id for section
  const solutionsSectionHashId =
    ProjectSectionHashes.find((item) => item.label === "Soluções")?.url;

  // project creation selected step
  const [stepSelected, setStepSelected] = useState<number | null>(null); 
  
  // project cration step image modal for mobile
  const [isStepModalOpen, setIsStepModalOpen] = useState<boolean>(false);

  // mobile device detection
  const [isOnMobileDevice, setIsOnMobileDevice] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;

    setIsOnMobileDevice(isMobile);
    setStepSelected(isMobile ? null : 0);
  }, []);

  return (
    <section id={solutionsSectionHashId} className="scroll-mt-70">
      {/* feature cards */}
      <div className="flex flex-col mb-27">
        <div className="mb-48">
          <h2 className="text-center text-5xl md:text-6xl">
            O Code{" "}
            <span className="bg-linear-to-r from-[#E001FF] via-[#6F3FFF] to-[#007BFF] bg-clip-text text-transparent">
              Facilita
            </span>{" "}
            para você:
          </h2>
        </div>
        <FeatureCards />
      </div>

      {/* section title and description */}
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-4xl md:text-6xl text-center leading-12 md:leading-18 font-bold">
          3 Passos <br />
          para criar seu site.
        </h2>
        <p className="text-center text-xl md:text-3xl opacity-80">
          Veja como é prático e rápido <span className="bg-linear-to-r from-[#E001FF] via-[#6F3FFF] to-[#007BFF] bg-clip-text text-transparent">criar um projeto do zero</span>.
        </p>
      </div>

      {/* steps carousel */}
      <div className="mt-10 md:mt-14 flex flex-col md:flex-row gap-10 justify-between w-full py-15 px-10">
        {/* steps */}
        <div className="flex flex-col justify-center w-full lg:max-w-5/12 gap-5">
          {projectCreationSteps.map((item, index) => (
            <div key={index} className="relative border-2 rounded-2xl border-[#1f1f1f] lg:rounded-none lg:border-none">
              <div
                onClick={() => {
                  setStepSelected(index);
                  if (isOnMobileDevice) setIsStepModalOpen(true);
                }}
                className={`
                  flex flex-col md:flex-row md:justify-between lg:w-10/12 gap-5 px-8 py-10 cursor-pointer rounded-2xl
                  border transition-colors duration-200
                  ${stepSelected === index ? "border-white" : "border-transparent"}
                `}
              >
                <div
                  style={{ backgroundColor: item.iconBackgroundColor }}
                  className="flex items-center justify-center p-6 min-w-20 h-20 rounded-xl"
                >
                  {item.icon}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="opacity-90">{item.description}</p>
                </div>

                {/* touch indicator for mobile */}
                <span className="flex lg:hidden w-full md:w-auto justify-end">
                  <MdOutlineTouchApp size={30} className="-rotate-30" />
                </span>
              </div>

              {/* aside arrow */}
              {stepSelected === index && (
                <span className="hidden lg:block">
                  <SlArrowRight className="absolute -right-6 top-1/2 -translate-y-1/2 text-white text-4xl pointer-events-none" />
                </span>
              )}
            </div>
          ))}
        </div>

        {/* aside image / modal */}
        {isOnMobileDevice ? (
          <>
            {isStepModalOpen && stepSelected !== null && (
              <div
                className="fixed inset-0 z-300 flex items-center justify-center bg-black/90"
                onClick={() => setIsStepModalOpen(false)}
              >
                <div
                  className="relative w-11/12 h-3/4 bg-contain bg-no-repeat bg-center rounded-2xl"
                  style={{
                    backgroundImage: `url(${projectCreationSteps[stepSelected].image})`,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
                    onClick={() => setIsStepModalOpen(false)}
                  >
                    <IoClose size={45} />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div
            className="hidden md:flex w-full bg-contain bg-no-repeat bg-center rounded-2xl transition-all duration-300"
            style={{
              backgroundImage:
                stepSelected !== null
                  ? `url(${projectCreationSteps[stepSelected].image})`
                  : "none",
            }}
          />
        )}
      </div>
    </section>
  );
}