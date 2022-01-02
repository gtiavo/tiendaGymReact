import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../helpers/fetchData";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [img, setImg] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`/api/products/${id}`).then((data) => setProduct(data.data));
    fetchData(`/api/products/${id}`).then((data) => setImg(data.image));
  }, [id]);

  return (
    <>
      <section className=" productDetailConteiner">
        <article className="cardLastProduct cardProductDetail">
          <img
            className="imgLastProduct"
            src={img.url}
            alt="No se encotro la imagen"
          />
          <h2>{product.name}</h2>
          <h4>{product.description}</h4>
        </article>
      </section>
    </>
  );
};

export default ProductDetail;
