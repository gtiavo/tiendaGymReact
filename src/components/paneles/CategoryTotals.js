import { useState, useEffect } from 'react'

function CategoryTotals() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('/api/products')
        .then(response => response.json())
        .then(data => setCategory(data.countByCategory))
    }, [])

    useEffect(() => {
       
    }, [category])

    return ( 
    <>
        <p className='TituloCategory' >CATEGORIAS</p>
        {category.map((item, i) => 
        <section key={i + item} className = 'containerCategory'>
            <h1>
              {item.name}
            </h1>
            <h2 className='totalCate'> {item.productos} </h2>
            <i className="fas fa-puzzle-piece"></i>
        </section>
        )}
    </> 
    );
}

export default CategoryTotals;