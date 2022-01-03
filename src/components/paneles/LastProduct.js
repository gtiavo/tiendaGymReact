import { useState, useEffect } from "react";

function LastProduct() {
  const [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    fetch(`/api/products`)
      .then((response) => response.json())
      .then((data) => setLastProduct(data.data[data.data.length - 1]));
  }, []);

  return (
    <>
      <section className="conteinerLastProduct">
        <p>ULTIMO PRODUCTO AGRGADO</p>
        <article className="cardLastProduct cardProductDetail" >
          <img
            className="imgLastProduct"
            src="https://imagenes.heraldo.es/files/image_990_v1/uploads/imagenes/2019/01/14/_daniellecerullo782570unsplash_b9258efb.jpg"
            alt="No se encotro la imagen"
          />
          <h2>{lastProduct.name}</h2>
          <h4>{lastProduct.description}</h4>
        </article>
      </section>
    </>
  );
}

export default LastProduct;
