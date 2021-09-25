
import './App.css';
import AmcDrugs from './components/AmcDrugs/AmcDrugs';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import AyurMedicine from './components/AyurMedicine/AyurMedicine';
import UnaniMedicine from './components/UnaniMedicine/UnaniMedicine';
import HerbalMedicine from './components/HerbalMedicine/HerbalMedicine';
import HomeoMed from './components/HomeoMed/HomeoMed';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Registration from './components/Registration/Registration';
import Admin from './components/Admin/Admin';
import DrugDetails from './components/DrugDetails/DrugDetails';
import AyurBrand from './components/AyurMedicine/AyurBrand';
import AyurCompany from './components/AyurMedicine/AyurCompany';
import UnaniBrand from './components/UnaniMedicine/UnaniBrand';
import UnaniCompany from './components/UnaniMedicine/UnaniCompany';
import HerbalBrand from './components/HerbalMedicine/herbalBrand';
import HerbalCompany from './components/HerbalMedicine/HerbalCompany';
function App() {
  return (
    <Router className = "App">
     <div className="App">
     

<Header></Header>

<Switch>
  <Route exact path= "/">
    <AmcDrugs/>
  </Route>
  <Route path= "/ayurvedic">
    <AyurMedicine/>
  </Route>
  <Route path= "/ayur/brand">
    <AyurBrand/>
  </Route>
  <Route path= "/ayurved/company">
    <AyurCompany/>
  </Route>
  <Route path= "/unani">
    <UnaniMedicine/>
  </Route>
  <Route path= "/un/brand">
    <UnaniBrand/>
  </Route>
  <Route path= "/unan/company">
    <UnaniCompany/>
  </Route>
  <Route path= "/herbal">
    <HerbalMedicine/>
  </Route>
  <Route path= "/herbs/brand">
    <HerbalBrand/>
  </Route>
  <Route path= "/herb/company">
    <HerbalCompany/>
  </Route>
  <Route path= "/homeo">
    <HomeoMed/>
  </Route>
  <Route path= "/about">
    <About/>
  </Route>
  <Route path= "/contact">
    <Contact/>
  </Route>
  <Route path= "/registration">
    <Registration/>
  </Route>
  <Route path= "/admin">
    <Admin/>
  </Route>
  <Route path= "/:key">
    <DrugDetails/>
  </Route>


</Switch>
     </div>
    </Router>
  );
}

export default App;
