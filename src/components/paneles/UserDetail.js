import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const UserDetail = () => {

    const [user, setUser] = useState([]);
    const [img, setImg] = useState([]);

    useEffect(() => {

        fetchData();
   
    }, []);

    async function fetchData(){
        const data = await (await fetch(`/api/users/${id}`)).json()
        setUser(data.data);
        setImg(data.data.image);
      }

const {id} = useParams()

    return (
        <>
        
            <article className="conteinerLastUser">
            <section className="cardLastUser cardUserDetail">
                <h2>{user.username}</h2>
                <img src={img.url} alt="No se encontro la imagen" className="imgLastUser" />
                <h3>{user.name}</h3>
                <h3>{user.lastName}</h3>
                <h3>{user.email}</h3>
            </section>
            </article>
        </>
    )
}

export default UserDetail
