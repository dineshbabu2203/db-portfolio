import { h1 } from "framer-motion/client"
import { BrowserRouter } from "react-router-dom"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Works from "./Components/Works"
import Tech from "./Components/Tech"
import Contact from "./Components/Contact"
import StarsCanvas from "./Components/Canvas/Stars"
import Footer from "./Components/Footer"


function App() {

  return (
    <BrowserRouter>
       <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
     
        <div className="relative z-0">
          {/* <Contact/>
          <StarsCanvas/> */}
          <Footer/>
        </div>
       </div>
    </BrowserRouter>
  )
}

export default App
