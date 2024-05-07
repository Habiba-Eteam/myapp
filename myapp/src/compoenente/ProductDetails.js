
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const habiba = "https://fakestoreapi.com/products"; // Changed variable name to habiba
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`${habiba}/${params.productId}`) // Updated variable reference to habiba
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <Product product={product} showButton={false} />
  );
}

export default ProductDetails;