import { motion } from "framer-motion";

// components
import AppHeader from "~/components/AppHeader/AppHeader";
import HeroSection from "~/components/HeroSection/HeroSection";
import SolutionsSection from "~/components/SolutionsSection/SolutionsSection";
import ResourcesSection from "~/components/ResourcesSection/ResourcesSection";
import PricingSection from "~/components/PricingSection/PricingSection";
import AppFooter from "~/components/AppFooter/AppFooter";

// rendering animations
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// reusable props
const motionProps = {
  variants: sectionVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: false, 
    margin: "-120px", 
  },
  transition: {
    duration: 0.6,
    ease: "easeIn" as const,
  },
};

export function HomePage() {
  return (
    <div>
      <AppHeader />

      <div className="flex flex-col gap-5 md:gap-20 lg:gap-50">
        <HeroSection />

        <motion.div {...motionProps}>
          <SolutionsSection />
        </motion.div>

        <motion.div {...motionProps}>
          <ResourcesSection />
        </motion.div>

        <motion.div {...motionProps}>
          <PricingSection />
        </motion.div>

        <motion.div {...motionProps}>
          <AppFooter />
        </motion.div>
      </div>
    </div>
  );
}
