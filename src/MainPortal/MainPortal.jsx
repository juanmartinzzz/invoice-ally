import WelcomeSection from "./WelcomeSection";
import BenefitsSection from "./BenefitsSection";
import QualityAssuranceSection from "./QualityAssuranceSection";
import ServiceComparisonSection from "./ServiceComparisonSection";

const MainPortal = () => {
  const scrollToComparison = () => {
    document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-white">
      {/* Welcome Section */}
      <WelcomeSection scrollToComparison={scrollToComparison} />

      {/* Service Comparison Section */}
      <ServiceComparisonSection />

      {/* Quality Assurance Section */}
      <QualityAssuranceSection />

      {/* Benefits Section */}
      <BenefitsSection scrollToComparison={scrollToComparison} />
    </div>
  );
}

export default MainPortal;