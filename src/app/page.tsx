import Hero from "./components/Hero";
import Project from "./components/Project";
import Customise from "./components/Customise";
import Work from "./components/Work";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Extensions from "./components/Extension";


export default function Home() {
  return (
    <div>

      <Navbar />

      <Hero />

      <Project />

      <Extensions />

      <Customise />

      <Work />

      <Sponsors />

      <Footer />

    </div>

  );
}
