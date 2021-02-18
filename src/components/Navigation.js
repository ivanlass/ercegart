import React, {useContext} from 'react'
import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import uk from '../images/uk.svg'
import hr from '../images/hr.svg'
import {LanguageContext} from '../LanguageContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/Home'
import AbonosStolovi from '../pages/AbonosStolovi'
import Product from '../pages/Product';
import Separator from '../components/Separator'
import SeparatorUnikatniNamjestaj from '../components/SeparatorUnikatniNamjestaj'
import SeparatorSlike from '../components/SeparatorSlike'
import AbonosUkras from './AbonosUkras'
import UnikatneGarniture from '../pages/UnikatneGarniture';
import UnikatniStolovi from '../pages/UnikatniStolovi';
import UnikatKlupe from '../pages/UnikatKlupe'
import UnikatUkras from '../pages/UnikatUkras'
import UljeNaPlatnu from '../pages/UljeNaPlatnu';
import AkrilNaPlatnu from '../pages/AkrilNaPlatnu'
import OstaleSlike from '../pages/OstaleSlike';

function Navigation() {
  const [language, setLanguage] = useContext(LanguageContext)

  return (
    <div className="App">
      <Router>
        <Navbar collapseOnSelect expand="lg" className="navigation" >

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ">
            </Nav>
            <Nav className="navigacija">

              <Nav.Link ><Link className="navbar-nav nav-link" to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link className="navbar-nav nav-link" to="/abonos">Abonos</Link></Nav.Link>
              <Nav.Link ><Link className="navbar-nav nav-link" to="/unikatni">{language === "en" ? "Unique wooden furniture": "Unikatni drveni namještaj"}</Link></Nav.Link>
              <Nav.Link ><Link className="navbar-nav nav-link" to="/slike">{language === "en" ? "Paintings": "Umjetničke slike"}</Link></Nav.Link>
              {language === "hr" && <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={()=> setLanguage("en")}><a className="navbar-nav nav-link language"><img src={uk} style={{width:"24px", marginRight:"5px"}}/>ENG</a></Nav.Link>}
              {language === "en" && <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={()=> setLanguage("hr")}><a className="navbar-nav nav-link language"><img src={hr} style={{width:"24px", marginRight:"5px"}}/>HR</a></Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>



        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/abonos">
            <Separator first="/abonos/stolovi" second="/abonos/ostalo" />
          </Route>

          <Route path="/abonos/stolovi">
            <AbonosStolovi />
          </Route>

          <Route path="/abonos/ostalo">
            <AbonosUkras />
          </Route>






          <Route exact path="/unikatni">
            <SeparatorUnikatniNamjestaj
              first="/unikatni/garniture"
              second="/unikatni/stolovi"
              third="/unikatni/klupe"
              fourth="/unikatni/ukrasi" />
          </Route>

          <Route path="/unikatni/garniture">
            <UnikatneGarniture />
          </Route>

          <Route path="/unikatni/stolovi">
            <UnikatniStolovi />
          </Route>

          <Route path="/unikatni/klupe">
            <UnikatKlupe />
          </Route>

          <Route path="/unikatni/ukrasi">
            <UnikatUkras />
          </Route>





          <Route exact path="/slike">
            <SeparatorSlike first="/slike/ulje" second="/slike/akril" third="/slike/ostalo" />
          </Route>

          <Route path="/slike/ulje">
            <UljeNaPlatnu />
          </Route>

          <Route path="/slike/akril">
            <AkrilNaPlatnu />
          </Route>


          <Route path="/slike/ostalo">
            <OstaleSlike />
          </Route>




      

          <Route path="/furniture/:id">
            <Product />
          </Route>
        </Switch>


      </Router>
    </div>
  );
}

export default Navigation;





