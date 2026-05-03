import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import CursorGlow from "./components/effects/CursorGlow";
import GrainTexture from "./components/effects/GrainTexture";
import ScrollProgress from "./components/effects/ScrollProgress";
import BackToTop from "./components/effects/BackToTop";

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg">
      <GrainTexture />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Home />
      <BackToTop />
    </div>
  );
}
