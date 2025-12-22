// objects
import { ProjectSectionHashes } from "~/json/ProjectSectionHashes"

// component function
export default function ResourcesSection(){
  const resourcesSectionHashId = ProjectSectionHashes.find((item) => item.label === 'Recursos')?.url;
  
  return (
    <section id={resourcesSectionHashId}>
      <span>resources section</span>
    </section>
  )
}