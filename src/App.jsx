import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/About";
import Teams from "./pages/team";
import Mentor from "./pages/mentor";
import Contact from "./pages/contact";

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

        <section id="teams">
          <Teams />
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