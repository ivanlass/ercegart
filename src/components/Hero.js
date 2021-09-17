import React, {useContext} from 'react'
import '../App.css';
import logo from '../images/logo.png'
import {Link} from "react-router-dom";
import {LanguageContext} from '../LanguageContext'



function Hero() {
  const [language, setLanguage] = useContext(LanguageContext)

  return (
    <div className="hero">

      <div className="hero-text-wrapper">
        <img className="logo" src={logo} alt="logo" style={{ width: 450 }} />

        <p className="hero-txt">
        {language === "en" ? `"When I say - be creative - I don’t think everyone should become great painters and poets.
           I just think - let your life be a picture, let your life be a song."` :
          `"Kada kažem – budi kreativan – ne mislim da svi trebaju postati veliki slikari i pjesnici. 
          Jednostavno mislim – dopusti da tvoj život bude slika, dopusti da tvoj život bude pjesma."`
        }
            <p className="">- Osho</p>
            </p>
        <Link to="/unikatni">
          <button className="btn-seemore">{language === "en" ? "SEE GALLERY" : "GALERIJA"}</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
