import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import ostaleBoje from '../images/ostaleBoje.jpeg'
import akril from '../images/akril.jpg'
import ulje from '../images/ulje.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css'
import { LanguageContext } from '../LanguageContext'
import HeroSm from './HeroSm';


function SeparatorSlike(props) {
  const [language, setLanguage] = useContext(LanguageContext)


  return (
    <>
      <HeroSm />
      <div className="separator-component">
        <Container fluid>
          <Row>
            <Col xs={12} md={4} xl={4} className="separator-item">
              <Link to={props.first}>
                <div className="separator-first" style={{ backgroundImage: `url(${ulje})` }}>
                  <p className="separator-label">{language === "en" ? "Oil on canvas" : "ulje na platnu"}</p>
                </div>
              </Link>

            </Col>
            <Col xs={12} md={4} xl={4} className="separator-item">
              <Link to={props.second}>
                <div className="separator-first" style={{ backgroundImage: `url(${akril})` }}>
                  <p className="separator-label">{language === "en" ? "Acrylic on canvas" : "Akril na platnu"}</p>
                </div>
              </Link>

            </Col>

            <Col xs={12} md={4} xl={4} className="separator-item">
              <Link to={props.third}>
                <div className="separator-first" style={{ backgroundImage: `url(${ostaleBoje})` }}>
                  <p className="separator-label">{language === "en" ? "Other techniques" : "Ostale tehnike"}</p>
                </div>
              </Link>

            </Col>

          </Row>
        </Container>

      </div>
    </>
  );
}

export default SeparatorSlike;
