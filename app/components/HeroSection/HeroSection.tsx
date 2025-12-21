// objects
import { ProjectSectionHashes } from "~/json/ProjectSectionHashes"

// component function
export default function HeroSection(){
  const heroSectionHashId = ProjectSectionHashes.find(item => item.label.includes('Hero'))?.url;

  return (
    <section id={heroSectionHashId}>
      <span>hero section</span> 
    </section>
  )
}