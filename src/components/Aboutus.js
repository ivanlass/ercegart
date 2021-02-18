import React, { useContext } from 'react'
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import onama from '../images/onama.jpg'
import onama2 from '../images/onama2.jpg'
import { LanguageContext } from '../LanguageContext'

function Aboutus() {
    const [language, setLanguage] = useContext(LanguageContext)

    const hrvatski = `Kreativni porivi, želja za stvaranjem nečeg novog i drugačijeg te ljepota rada vlastitim 
    rukama iznjedrilo je jednu lijepu priču obitelji Erceg spajanjem iskustva i kreativnog duha. 
    Erceg Art Studio je hobby art platforma inspirirana prvenstveno prirodom ali i mnogim drugim 
    umjetnicima jer 'umjetnost stvara umjetnost'.`;

    const hrv2 = `Izrađujemo unikatni drveni namještaj iz izuzetno rijetkog drveta Abonos, unikatne vrtne garniture, umjetničke slike te razne druge ukrase i nakit.
    `
    const hrv3 = `Dobro došli.`


    const eng1 = `Creative impulses, the desire to create something new and different and the beauty of working with your own
    hands gave birth to a beautiful story of the Erceg family by combining experience and creative spirit.
    Erceg Art Studio is a hobby art platform inspired primarily by nature but also by many others
    artists because ‘art creates art’.`

    const eng2 = `We make unique wooden furniture from extremely rare Abonos wood, unique garden furniture, art paintings and various other decorations and jewelry.`

    const eng3 = `Welcome.`

    return (
        <>
            <div className="aboutus about-component">
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="about">
                                <h1 className="title-big">{language === "en" ? "About us" : "O nama"}</h1>
                                <p className="about-txt">
                                    {language === "en" ? <>
                                        {eng1} < br /> {eng2} <br /> {eng3}
                                    </>
                                        :
                                        <>
                                            {hrvatski} < br /> {hrv2} <br /> {hrv3}
                                        </>
                                    }
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="imgs-about">
                                <img className="img-about" src={onama} alt="logo" style={{ width: 200 }} />
                                <br />
                                <img className="img-two img-about" src={onama2} alt="logo" style={{ width: 200 }} />
                            </div>
                        </Col>
                    </Row>


                </Container>
            </div>

        </>
    );
}

export default Aboutus;
