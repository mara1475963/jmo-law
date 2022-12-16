import logo from "./logo.svg";
import "./App.css";
import ActualityList from "./components/actualityList/actualityList";
import Slideshow from "./components/slideshow/slideshow";
import Header from "./components/header/header";
import { Slide } from "react-slideshow-image";
import SectionHeader from "./components/sectionHeader/sectionHeader";
import Services from "./components/services/services";


function App() {
  return (
    <div className="App">
      <Header />
      <SectionHeader text={'o nas'} />
      <Services />
    </div>
  );
}

export default App;
