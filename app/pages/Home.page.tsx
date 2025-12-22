// components
import AppHeader from "~/components/AppHeader/AppHeader";
import HeroSection from "~/components/HeroSection/HeroSection";
import SolutionsSection from "~/components/SolutionsSection/SolutionsSection";
import ResourcesSection from "~/components/ResourcesSection/ResourcesSection";
import PricingSection from "~/components/PricingSection/PricingSection";
import AppFooter from "~/components/AppFooter/AppFooter";

// page function
export function HomePage() {
  return (
    <div>
      <AppHeader />
      <HeroSection />
      <SolutionsSection />
      <ResourcesSection />
      <PricingSection />
      <AppFooter />
    </div>
  )
}
