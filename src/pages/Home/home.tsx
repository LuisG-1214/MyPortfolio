import Hero from "./Sections/Hero/hero"
import NavBar from "../../components/NavBar/NavBar"
import About from "./Sections/About/About"
import ProjectCarousel from "./Sections/Projects/projects"
import Footer from "../../components/Footer/Footer"

const Home = () => {
    return ( 
      <div>
        <NavBar />
        <Hero />
        <About />
        <ProjectCarousel /> 
        <Footer />
      </div>
    )
  }
  
  export default Home
  