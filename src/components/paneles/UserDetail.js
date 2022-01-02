import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../helpers/fetchData";

const UserDetail = () => {
  const [user, setUser] = useState([]);
  const [img, setImg] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`/api/users/${id}`).then((data) => setUser(data.data));
    fetchData(`/api/users/${id}`).then((data) => setImg(data.data.image));
  }, [id]);



  return (
    <>
      <article className="conteinerLastUser">
        <section className="cardLastUser cardUserDetail">
          <h2>{user.username}</h2>
          <img
            src={img.url}
            alt="No se encontro la imagen"
            className="imgLastUser"
          />
          <h3>{user.name}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </section>
      </article>
    </>
  );
};

export default UserDetail;
