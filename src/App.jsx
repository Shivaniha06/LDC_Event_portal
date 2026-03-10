import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/About";
import Teams from "./pages/team";
import Mentor from "./pages/mentor";
import Contact from "./pages/contact";
import HackathonStats from "./pages/HackthonStats"
import Judges from "./pages/Judges";
import HackathonTimeline from "./pages/HackathonTimeline";
import EventGallery  from "./pages/EventGallery";
import EvaluationCriteria from "./pages/EvaluationCriteria";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="HackthonStats">
          <HackathonStats />
        </section>
        <section id="HackathonTimeline">
          <HackathonTimeline/></section>
          {/* <section id="EvaluationCriteria">
            <EvaluationCriteria/>
          </section> */}


        <section id="teams">
          <Teams />
        </section>
        <section id="judges">
          <Judges/>
        </section>
        <section id="gallery">
          <EventGallery/>
        </section>

        <section id="mentor">
          <Mentor />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;