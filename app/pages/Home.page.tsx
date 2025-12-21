// components
import AppHeader from "~/components/AppHeader/AppHeader";
import HeroSection from "~/components/HeroSection/HeroSection";
import ResourcesSection from "~/components/PricingSection/PricingSection";
import PricingSection from "~/components/PricingSection/PricingSection";
import AppFooter from "~/components/AppFooter/AppFooter";

// page function
export function HomePage() {
  return (
    <div>
      <AppHeader />
      <HeroSection />
      <ResourcesSection />
      <PricingSection />
      <AppFooter />
    </div>
  )
}
