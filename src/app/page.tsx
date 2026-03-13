import Hero from "./components/1Hero/Hero";
import Features from "./components/2Features/Features";
import Steps from "./components/3Steps/Steps";
import FAQ from "./components/4FAQ/FAQ";
import Quiz from "./components/5Quiz/Quiz";
import About from "./components/6About/About";
import Footer from "./components/7Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Steps />
      <FAQ />
      <Quiz />
      <About />
      <Footer />
    </>
  );
}
