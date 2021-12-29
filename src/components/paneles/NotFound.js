import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
    <article className="fondoError">
    <section className="errorClass">
    <h1 className="tituloError">404 not found!!</h1>
    <h2 className="descripError">Esta página no esta disponible</h2>
   
    < Link to="/"><h3 class="volerError">Volver a Home</h3></Link>
    </section>
    </article>
            
        </>
    )
}

export default NotFound
