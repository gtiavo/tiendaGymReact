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
        <article className="cardLastProduct">
          <img
            className="imgLastProduct"
            src="https://imagenes.heraldo.es/files/image_990_v1/uploads/imagenes/2019/01/14/_daniellecerullo782570unsplash_b9258efb.jpg"
            alt="No se encotro la imagen"
          />
          <h3>{lastProduct.name}</h3>
          <h3>{lastProduct.description}</h3>
        </article>
      </section>
    </>
  );
}

export default LastProduct;