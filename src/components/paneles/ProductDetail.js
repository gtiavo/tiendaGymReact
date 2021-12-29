import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [img, setImg] = useState([]);

  async function fetchData(){
    const data = await (await fetch(`/api/products/${id}`)).json()
    setProduct(data.data)
    setImg(data.image)
  }
  useEffect( () => {

    fetchData()

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
          <h2>{product.name}</h2>
          <h4>{product.description}</h4>
        </article>
      </section>
    </>
  );
};

export default ProductDetail;
