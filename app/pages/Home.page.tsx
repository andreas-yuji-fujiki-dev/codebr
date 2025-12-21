// components
import AppHeader from "~/components/AppHeader/AppHeader"
import HeroSection from "~/components/HeroSection/HeroSection"
import ResourcesSection from "~/components/ResourcesSection/ResourcesSection"
import PlansSection from "~/components/PlansSection/PlansSection"

// page function
export function HomePage() {
  return (
    <div>
      <AppHeader/>
      <HeroSection/>
      <ResourcesSection/>
      <PlansSection/>
    </div>
  )
}
