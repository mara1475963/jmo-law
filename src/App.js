import logo from "./logo.svg";
import "./App.css";
import ActualityList from "./components/actualityList/actualityList";
import Slideshow from "./components/slideshow/slideshow";
import Header from "./components/header/header";
import SectionHeader from "./components/sectionHeader/sectionHeader";
import Services from "./components/services/services";
import AboutUs from "./components/aboutUs/aboutUs";
import Coop from "./components/coop/coop";
import References from "./components/references/references";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <Header />
      <SectionHeader text={'nase sluzby'} />
      <Services />
      <SectionHeader text={'o nas'} />
      <AboutUs />
      <SectionHeader text={'proc s nami spolupracovat'} />
      <Coop />
      <SectionHeader text={'Aktuality'} />

      <ActualityList count={-1} styleClass='actuality-list-container-grid'/>
      <SectionHeader text={'nase reference'} />
      <References />
      <Footer />
    </div>
  );
}

export default App;
