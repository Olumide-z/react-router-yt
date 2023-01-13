import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data'


const Product = () => {
  const [product, setProduct] = useState(data);

  return (
    <div className="product">
      <h1>PRODUCTS</h1>

      <div className="products">
        {product.map((item) => (
          <Link to={`/product/${item.id}`}  key={item.id}>
          <div>
            <img src={item.img} alt='picture' />
            <button><p>{item.name}</p></button>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Product