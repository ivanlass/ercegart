import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import abonosUkras from '../images/abonosUkras.jpg'
import abonosStol from '../images/abonosStol.jpg'
import '../App.css'
import { LanguageContext } from '../LanguageContext'
import HeroSm from './HeroSm';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Separator(props) {
  const [language, setLanguage] = useContext(LanguageContext)


  return (
    <>
      <HeroSm />
      <div className="separator-component abonos-separator">
        <Container fluid>
          <Row style={{ justifyContent: "space-around" }}>
            <Col xs={12} md={4} xl={4} className="separator-item" >
              <Link to={props.first}>
                <div className="separator-first abonos-stol-slika" style={{ backgroundImage: `url(${abonosStol})` }}>
                  <p className="separator-label">{language === "en" ? "Tables" : "Stolovi"}</p>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={4} xl={4} className="separator-item">
              <Link to={props.second}>
                <div className="separator-first abonos-stol-slika" style={{ backgroundImage: `url(${abonosUkras})` }}>
                  <p className="separator-label">{language === "en" ? "Unique decorations and jewelry" : "Unikatni ukrasi i nakit"}</p>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Separator;
