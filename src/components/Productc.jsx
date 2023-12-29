import React, { useEffect, useState } from 'react';

const Productc = () => {
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const res = await data.json();
    setProduct(res);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {product.map((item) => (
        <div key={item.id}>
        <h1 >
            {item.title}</h1>

            <img src={item.image} alt="" />

            </div>

            
      ))}
    </div>
  );
};

export default Productc;
