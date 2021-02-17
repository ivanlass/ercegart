import React, {useContext} from 'react'
import '../Card.css'
import {Link} from "react-router-dom";
import {LanguageContext} from '../LanguageContext'



function Card(props) {
  const [language, setLanguage] = useContext(LanguageContext)


  return (
    <Link to={'/furniture/'+props.product._id}>
    <div className="card-item" >
      <div className="card-picture" style={{backgroundImage: `url(${props.product.slike[0].path})`}} ></div>
      <div className="card-info-wrapper">
        <p>{language === "en" ? props.product.name.en : props.product.name.hr}</p>
      </div>
    </div>
    </Link>
  );
}

export default Card;
