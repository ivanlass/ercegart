import React, {useContext} from 'react'
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import onama from '../images/onama.jpg'
import {LanguageContext} from '../LanguageContext'

function Aboutus() {
    const [language, setLanguage] = useContext(LanguageContext)

    return (
        <>
            <div className="aboutus">
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="about">
                                <h1 className="title-big">{language === "en" ? "About us" : "O nama"}</h1>
                                <p className="about-txt">
                                    {language === "en" ? "Engleski about us":
                                        `Kreativni porivi, želja za stvaranjem nečeg novog i drugačijeg te ljepota rada vlastitim 
                                        rukama iznjedrilo je jednu lijepu priču obitelji Erceg spajanjem iskustva i kreativnog duha. 
                                        Erceg Art Studio je hobby art platforma inspirirana prvenstveno prirodom ali i mnogim drugim 
                                        umjetnicima jer 'umjetnost stvara umjetnost'. Dobro došli.`
                                    }
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="imgs-about">
                                <img className="img-about" src={onama} alt="logo" style={{ width: 200 }} />
                                <br />
                                <img className="img-two img-about" src={onama} alt="logo" style={{ width: 200 }} />
                            </div>
                        </Col>
                    </Row>


                </Container>
            </div>
           
        </>
    );
}

export default Aboutus;
