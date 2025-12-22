import { TemplatesCarousel } from "../TemplatesCarousel/TemplatesCarousel";

// objects
import { ProjectSectionHashes } from "~/json/ProjectSectionHashes";
import { integrationItems } from "./integrationItems";

export default function ResourcesSection() {
  const resourcesSectionHashId =
    ProjectSectionHashes.find((item) => item.label === "Recursos")?.url;

  return (
    <section id={resourcesSectionHashId} className="mt-20 scroll-mt-70">
      {/* templates carousel */}
      <div>
        <h2 className="text-center text-4xl px-4 leading-12 md:px-0 md:text-6xl md:leading-17">
          <span className="font-extrabold">Escolha um template base</span> <br />
          e crie seu projeto com 1 clique.
        </h2>

        {/* carousel*/}
        <TemplatesCarousel />
      </div>

      {/* easy integration */}
      <div className="mt-35">
        <h2 className="text-4xl px-2  md:text-6xl text-center">
          Integração rápida e fácil com:
        </h2>
        <div className="flex gap-18 md:gap-11 lg:gap-18 items-center justify-center py-20 flex-wrap">
          {integrationItems.map((item, index)=>(
            <div key={index} className="flex flex-col items-center gap-4">
              {item.icon}
              <span className="text-2xl">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
