import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { MarketGapsSection } from './components/sections/MarketGapsSection';
import { SolutionSection } from './components/sections/SolutionSection';
import { WorkflowSection } from './components/sections/WorkflowSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { OfflineSection } from './components/sections/OfflineSection';
import { TechSection } from './components/sections/TechSection';
import { UseCasesSection } from './components/sections/UseCasesSection';
import { USPSection } from './components/sections/USPSection';
import { MarketSection } from './components/sections/MarketSection';
import { BusinessModelSection } from './components/sections/BusinessModelSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { FutureVisionSection } from './components/sections/FutureVisionSection';
import { TeamSection } from './components/sections/TeamSection';
import { RecognitionSection } from './components/sections/RecognitionSection';
import { CTASection } from './components/sections/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <MarketGapsSection />
        <SolutionSection />
        <WorkflowSection />
        <FeaturesSection />
        <OfflineSection />
        <TechSection />
        <UseCasesSection />
        <USPSection />
        <MarketSection />
        <BusinessModelSection />
        <ResearchSection />
        <FutureVisionSection />
        <TeamSection />
        <RecognitionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
