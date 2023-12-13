import "./App.css";
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
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <HoverEffectImage /> */}
      <BGS />
      {/* <ImageAnimation /> */}
      <Proj_Details />
      <ITeam />
      <ContactForm />
      <Parallexxx />
      <Footer />
    </div>
  );
}
export default App;
