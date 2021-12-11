import { useState, useEffect } from 'react'

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
       console.log('%cse monto el componente', 'color:green');
       fetch('/api/users')
       .then(response => response.json())
       .then(data => setUsers(data.count))
    }, [])
    useEffect(() => {
       
     console.log('%cse actualizo el componente', 'color:yellow');
    }, [users])

    useEffect(() => {
       return () => {
          console.log('%cse desmonto el componente', 'color:red');
       }
    }, [])

    return ( 
        <>
        <section className = 'panelConteinerUsers'>
        <i className="fas fa-users"></i>
        <h1 className='totalUsers' > Total de usuarios en DB : {users}</h1>
        </section>
        </>
     );
}

export default Users;