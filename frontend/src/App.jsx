import About from "./components/about"
import BodyOverlay from "./components/body-overlay"
import Contact from "./components/contact"
import Home from "./components/home"
import LeftSidebar from "./components/left-sidebar"
import LeftSidebarMobile from "./components/left-sidebar-mobile"
import PageLoader from "./components/page-loader"
import Portfolio from "./components/portfolio"
import Pricing from "./components/pricing"
import Resume from "./components/resume"
import ScrollNav from "./components/scroll-nav"
import Services from "./components/services"
import SidebarMenu from "./components/sidebar-menu"
import Skills from "./components/skills"
import Testimonial from "./components/testimonial"

function App() {

  return (
    <div className="home5-page">

      <BodyOverlay />

      {/* <PageLoader /> */}

      <span className="icon-menu">
        <span className="bar"></span>
        <span className="bar"></span>
      </span>

      <SidebarMenu />

      <ScrollNav />

      <LeftSidebar />

      <main className="drake-main">
        <div id="smooth-wrapper">
          <div id="smooth-content">

            <LeftSidebarMobile />

            <Home />

            <About />

            <Resume />

            <Services />

            <Skills />


            <Portfolio />

            {/* <Testimonial /> */}

            {/* <Pricing /> */}

            <Contact />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
