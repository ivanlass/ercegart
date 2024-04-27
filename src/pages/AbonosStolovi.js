import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../App.css";
import HeroSm from "../components/HeroSm";

function AbonosStolovi() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://ercegartapi.ew.r.appspot.com/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: "abonosStolovi" }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <HeroSm />
      <div className="gallery">
        {products &&
          products.map((product) => {
            return (
              <div className="card-wrapper" key={product._id}>
                <Card product={product} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AbonosStolovi;
