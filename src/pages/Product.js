import React, {useState, useEffect, useContext} from 'react'
import '../Card.css'
import Carousels from '../components/Carousel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useParams} from "react-router-dom";
import {LanguageContext} from '../LanguageContext'

function Product() {
  const [language, setLanguage] = useContext(LanguageContext)
    const [product, setProduct] = useState(null)
    let { id } = useParams();
console.log(id)
    useEffect(()=>{
        fetch('https://ercegart.herokuapp.com/products/findone', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query:id}),
        })
        .then(response => response.json())
        .then(data => {
          setProduct(data)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      },[])




  return (
      <>
     {product &&
    <div className="product">
        <div>
        <Carousels slike={product.slike}/>
        </div>
        <br/>
        <Container>

            <Row>
                <Col lg="4" className="product-info-sm">
                    <p>{language === "en" ? product.name.en : product.name.hr}</p>
                </Col>
                <Col className="product-info-big">
                    <p className="materials-title">{language === "en" ? "Materials": "Materijali"}</p>
                    <p className="materials-item">{language === "en" ? product.materijali.en : product.materijali.hr}</p>
                    <p className="materials-title">{language === "en" ? "Description": "Opis"}</p>
                    <p className="product-about">{language === "en" ? product.opis.en : product.opis.hr}</p>
                </Col>


            </Row>
        </Container>
   
        
    </div>
    }
  </>
  );
}

export default Product;
