import { Link } from "react-router-dom";

function TdProducts({ id, name, description }) {
  return (
    <>
      <tbody>
        <tr>
          <td>{id}</td>
          <Link to={`/products/${id}`}>
            <td>{name}</td>
          </Link>
          <td>{description}</td>
        </tr>
      </tbody>
    </>
  );
}

export default TdProducts;
