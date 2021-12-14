import { useState, useEffect } from 'react'

function CategoryTotals() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('/api/products')
        .then(response => response.json())
        .then(data => setCategory(data.countByCategory))
    }, [])

    return ( 
    <>
        {category.map(item => 
        <section className = 'containerCategory'>
            <h1>
              {item.name}
            </h1>
            <h2> {item.productos} </h2>
        </section>
        )}
    </> 
    );
}

export default CategoryTotals;