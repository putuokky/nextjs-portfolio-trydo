import About from "@components/About";
import Blog from "@components/Blog";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Project from "@components/Project";
import Service from "@components/Service";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Service />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
