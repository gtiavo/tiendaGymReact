import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.data));
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setImg(data.image));
  }, []);

  const { id } = useParams();

  return (
    <>
      <section className=" productDetailConteiner">
        <article className="cardLastProduct cardProductDetail">
          <img
            className="imgLastProduct"
            src={img.url}
            alt="No se encotro la imagen"
          />
          <h3>{product.name}</h3>
          <h3>{product.description}</h3>
        </article>
      </section>
    </>
  );
};

export default ProductDetail;
