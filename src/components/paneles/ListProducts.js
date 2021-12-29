import { useState, useEffect } from "react";
import TdProducts from "./TdProducts";

function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <>
      <section className="conteinerTableProducts">
        <table className="tableProducts">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>DESCRIPCION</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>DESCRIPCION</th>
            </tr>
          </tfoot>
          {products.map((item, i) => {
            return <TdProducts {...item} key={i + item} />;
          })}
        </table>
      </section>
    </>
  );
}

export default ListProducts;
