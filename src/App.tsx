import AboutSection from "./components/about/AboutSection";
// import BrazilSection from "./components/brazil/BrazilSection";
import CurrentlyBuilding from "./components/building/CurrentlyBuilding";
import DiagnosticQuiz from "./components/challenge/DiagnosticQuiz";
import ContactSection from "./components/contact/ContactSection";
import EquipmentExplorer from "./components/controls/EquipmentExplorer";
import ExpertiseSection from "./components/expertise/ExpertiseSection";
import Hero from "./components/hero/Hero";
import CareerJourney from "./components/journey/CareerJourney";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/layout/ScrollProgress";
import LanguagesSection from "./components/language/LanguagesSection";
// import LeadershipSection from "./components/leadership/LeadershipSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import RecruiterMode from "./components/recruiter/RecruiterMode";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070B10] text-white selection:bg-cyan-400 selection:text-black">
      <ScrollProgress />

      <Navbar />

      <Hero />

      {/* <RecruiterMode /> */}

      <AboutSection />

      <CareerJourney />

      <DiagnosticQuiz />

      {/* <ExpertiseSection /> */}

      <EquipmentExplorer />

      <ProjectsSection />

      {/* <LeadershipSection /> */}

      {/* <LanguagesSection /> */}

      <CurrentlyBuilding />
{/* 
      <BrazilSection/> */}

      <ContactSection />

      <Footer />
    </main>
  );
}