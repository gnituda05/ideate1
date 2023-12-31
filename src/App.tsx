import "./App.css";
import React, { useState } from "react";
import ContactForm from "./components/contact_us/contact_us";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import HomePage from "./components/home/home";
import Parallexxx from "./components/parallex/parallex";

import ImageAnimation from "./components/projects/movinglogo";
import HoverEffectImage from "./components/projects/projects1";
import ScrollDown1 from "./components/projects/testingmovingmove";
import BGS from "./components/projects/testingproject";
import Proj_Details from "./components/projects_details/project_details";
import ITeam from "./components/team/team";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const isHeaderShrunk = currentPage !== "Home";

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onNavigate1 = (target: string) => {
    if (target === "ContactUs") {
      setCurrentPage("ContactUs");
    } else {
      // This is for scrolling to sections within the HomePage
      setCurrentPage("Home");
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  const navigateToContactUs = () => {
    setCurrentPage("ContactUs");
  };
  const navigateToProjDetails = () => {
    setCurrentPage("ProjDetails");
  };

  const renderParallexxx = () => <Parallexxx />;
  const renderFooter = () => <Footer onNavigate={navigateToContactUs} />;
  return (
    <div className="App">
      {/* <Header isShrunk={isHeaderShrunk} onNavigate1={onNavigate1} /> */}
      {currentPage === "Home" && (
        <>
          <HomePage onNavigate={navigateToContactUs} />
          {/* Other components */}
          <BGS onNavigate={navigateToProjDetails} />
          {/* <Proj_Details /> */}
          <ITeam />
        
          {renderParallexxx()}
          {renderFooter()}
         
        </>
      )}
      {currentPage === "ContactUs" && (
        <>
          <ContactForm />
          {renderParallexxx()}
          {renderFooter()}
        </>
      )}
      {currentPage === "ProjDetails" && (
        <>
          <Proj_Details />
          {renderParallexxx()}
          {renderFooter()}
        </>
      )}
    </div>

    // <Router>
    //   <div className="App">
    //     <Header  isShrunk={isHeaderShrunk} />
    //     <Routes>
    //       <Route path="/home" element={<HomePage />} />
    //       <Route path="/contact" element={<ContactForm />} />
    //       <Route path="/project-details" element={<Proj_Details />} />
    //       {/* Add other routes as needed */}
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>
  );
}
export default App;
