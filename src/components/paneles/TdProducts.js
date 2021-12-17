import { useState, useEffect } from 'react'

function TdProducts( props ) {
const [ categories, setCategories ]= useState([])

useEffect(() => {
    fetch('/api/products')
    .then(response => response.json())
    .then(data => setCategories(data.countByCategory))
    
}, [])
    return ( 
        <>
        <tbody>
             <tr>
                  <td>{props.id}</td>
                  <td>{props.name}</td>
                  <td >{props.description}</td>
                
              </tr>
              </tbody>
        </>
     );
}

export default TdProducts;