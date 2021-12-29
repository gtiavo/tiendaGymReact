import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);
  return (
    <>
      <article className="conteinerLastUser allUsers ">
        {users.map((user, i) => (
          <section key={i + user} className="cardLastUser cardUsers">
            <h3>{user.id}</h3>
            <h2>{user.username}</h2>
            <Link to={`/users/${user.id}`}>
              <img
                src="https://www.247fitness.co.nz/images/testimonials/unknown.jpg"
                alt="No se encontro la imagen"
                className="imguser"
                width="200px"
              />
            </Link>
            <h3>{user.name}</h3>
            <h3>{user.apellido}</h3>
            <h3>{user.email}</h3>
          </section>
        ))}
      </article>
    </>
  );
};

export default Users;
