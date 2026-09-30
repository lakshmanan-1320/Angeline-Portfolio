import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ScrollProgress from "../layout/ScrollProgress";
import BackToTop from "../layout/BackToTop";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Philosophy from "../components/Philosophy/Philosophy";
import ExecutiveHighlights from "../components/ExecutiveHighlights/ExecutiveHighlights";
import ImpactDashboard from "../components/ImpactDashboard/ImpactDashboard";
import Timeline from "../components/Timeline/Timeline";
import RecruitmentFunnel from "../components/RecruitmentFunnel/RecruitmentFunnel";
import EmployeeJourney from "../components/EmployeeJourney/EmployeeJourney";
import Expertise from "../components/Expertise/Expertise";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import TechStack from "../components/TechStack/TechStack";
import Achievements from "../components/Achievements/Achievements";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import useLenis from "../utils/useLenis";

export default function Home() {
  useLenis();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <ExecutiveHighlights />
        <ImpactDashboard />
        <Timeline />
        <RecruitmentFunnel />
        <EmployeeJourney />
        <Expertise />
        <CaseStudies />
        <TechStack />
        <Achievements />
        <Skills />
        <Education />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
