import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import '../App.css'

function UnikatUkras() {
  const [products, setProducts] = useState(null)
 
  useEffect(()=>{
    fetch('http://localhost:5000/products', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query:"abonosUkras"}),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setProducts(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  },[])


 

  return (
    <>
     
      <div className="gallery">
        {products&& products.map(product=>{
          return (
            <div className="card-wrapper">
              <Card product={product} key={product._id}/>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default UnikatUkras;
