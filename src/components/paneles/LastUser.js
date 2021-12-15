import { useState, useEffect } from 'react'
function LastUser() {
    const [ lastUser, setLastUser ]= useState([]);

    useEffect(() => {
        console.log('%cse monto el componente', 'color:green');
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setLastUser(data.data[data.data.length - 1]));
        
    }, []);

    useEffect(() => {
        console.log('%cse actualizo el componente', 'color:yellow');
    }, [lastUser])



    return ( 
        <>
            <article className="conteinerLastUser">
            <section className="cardLastUser">
                <h2>{lastUser.username}</h2>
                <img src="https://www.247fitness.co.nz/images/testimonials/unknown.jpg" alt="No se encontro la imagen" className="imgLastUser" />
                <h3>{lastUser.name}</h3>
                <h3>{lastUser.apellido}</h3>
                <h3>{lastUser.email}</h3>
            </section>
            </article>
        </>
     );
}

export default LastUser;