import { useState, useEffect } from 'react'

function Users() {

    const [users, setUsers] = useState([0])
    const [products, setProducts] = useState([0])
    

    useEffect(() => {
       console.log('%cse monto el componente', 'color:green');
       fetch('/api/users')
       .then(response => response.json())
       .then(data => setUsers(data.count))

       fetch('/api/products')
       .then(response => response.json())
       .then(data => setProducts(data))
    }, [])



    useEffect(() => {
        console.log('%cse actualizo el componente', 'color:yellow');
    }, [users, products])

    useEffect(() => {
       return () => {
          console.log('%cse desmonto el componente', 'color:red');
       }
    }, [])

    return ( 
        <>
        <section className = 'panelConteinerUsers'>
        <i className="fas fa-users"></i>
        <h1 className='totalUsers' > Total de Usuarios en DB : {users}</h1>
        </section>
        <section className = 'panelConteinerProducts'>
        <i className="fas fa-dumbbell"></i>
        <h1 className='totalUsers' > Total de Productos en DB : {products.count}</h1>
        </section>
        <section className = 'panelConteinerCategory'>
        <i className="fas fa-heartbeat"></i>
        <h1 className='totalUsers' > Total de Categorias en DB : {products.countByCategory.length}</h1>
        </section>
        </>
     );
}

export default Users;