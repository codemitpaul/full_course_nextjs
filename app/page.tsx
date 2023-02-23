// "use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = async () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get("https://fakestoreapi.com/products");
  //     setProducts(data);
  //   };
  //   getData();
  // }, []);

  // console.log(products);

  const { data } = await axios.get("https://fakestoreapi.com/products");
  const products = data;

  return (
    <div>
      {products?.map((product: any) => (
        <div>
          {product.title} {product.price}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
