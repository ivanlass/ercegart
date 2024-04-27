import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../App.css";
import HeroSm from "../components/HeroSm";

function UnikatUkras() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://ercegartapi.ew.r.appspot.com/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: "unikatUkras" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
              <div className="card-wrapper">
                <Card product={product} key={product._id} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default UnikatUkras;
