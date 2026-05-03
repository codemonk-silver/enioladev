import HeroCard from "../components/cards/HeroCard";
import AboutCard from "../components/cards/AboutCard";
import SkillsCard from "../components/cards/SkillsCard";
import CurrentlyBuildingCard from "../components/cards/CurrentlyBuildingCard";
import RecommendationsCard from "../components/cards/RecommendationsCard";
import ExperienceCard from "../components/cards/ExperienceCard";
import ContactCard from "../components/cards/ContactCard";
import FeaturedProjects from "../sections/FeaturedProjects";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Main Container */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-8">
        {/* Bento Grid */}
        <div className="space-y-6 md:space-y-8">
          {/* Hero Card */}
          <section id="home">
            <HeroCard />
          </section>

          {/* Currently Building + Recommendations Row */}
          <section className="grid md:grid-cols-2 gap-6">
            <CurrentlyBuildingCard />
            <RecommendationsCard />
          </section>

          {/* About + Skills Row */}
          <section id="about" className="grid md:grid-cols-2 gap-6">
            <AboutCard />
            <SkillsCard />
          </section>

          {/* Featured Projects */}
          <FeaturedProjects />

          {/* Experience + Contact Row */}
          <section id="contact" className="grid md:grid-cols-2 gap-6">
            <ExperienceCard />
            <ContactCard />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
