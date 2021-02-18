import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import ukrasi from '../images/ukrasi.jpg'
import klupe from '../images/klupe.jpg'
import unikatneGarniture from '../images/unikatneGarniture.jpg'
import blagovaonski from '../images/blagovaonski.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css'
import { LanguageContext } from '../LanguageContext'
import HeroSm from './HeroSm'

function SeparatorUnikatniNamjestaj(props) {
  const [language, setLanguage] = useContext(LanguageContext)


  return (
    <>
      <HeroSm />
      <div className="separator-component">
        <Container fluid>
          <Row>
            <Col xs={12} md={6} xl={3} style={{ display: "flex", justifyContent: "center" }}>
              <Link to={props.first}>
                <div className="separator-first stol-slika" style={{ backgroundImage: `url(${unikatneGarniture})` }}>
                  <p className="separator-label">{language === "en" ? "Garden furniture" : "Vrtne garniture"}</p>
                </div>
              </Link>

            </Col>
            <Col xs={12} md={6} xl={3} style={{ display: "flex", justifyContent: "center" }}>
              <Link to={props.second}>
                <div className="separator-first" style={{ backgroundImage: `url(${blagovaonski})` }}>
                  <p className="separator-label">{language === "en" ? "Dining tables" : "Blagovaonski stolovi"}</p>
                </div>
              </Link>

            </Col>

            <Col xs={12} md={6} xl={3} style={{ display: "flex", justifyContent: "center" }}>
              <Link to={props.third}>
                <div className="separator-first " style={{ backgroundImage: `url(${klupe})` }}>
                  <p className="separator-label">{language === "en" ? "Benches and chairs" : "Klupe i stolice"}</p>
                </div>
              </Link>

            </Col>

            <Col xs={12} md={6} xl={3} style={{ display: "flex", justifyContent: "center" }}>
              <Link to={props.fourth}>
                <div className="separator-first" style={{ backgroundImage: `url(${ukrasi})` }}>
                  <p className="separator-label">{language === "en" ? "Other unique decorations" : "Ostali unikatni ukrasi"}</p>
                </div>
              </Link>

            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
}

export default SeparatorUnikatniNamjestaj;
