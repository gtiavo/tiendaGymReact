import { Link } from "react-router-dom";

function TdProducts({ id, name, description }) {
  return (
    <>
      <tbody>
        <tr>
          <td>{id}</td>
          
            <td><Link to={`/products/${id}`}>{name}</Link></td>
          
          <td>{description}</td>
        </tr>
      </tbody>
    </>
  );
}

export default TdProducts;
