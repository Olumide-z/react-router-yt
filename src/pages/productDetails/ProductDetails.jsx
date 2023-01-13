import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { data } from '../data'


const ProductDetails = () => {
  const [details, setDetails] = useState(data);

  const { id } = useParams();
  
  const singleProduct = details.find((item) => item.id.toString() === id );
  console.log(singleProduct)
  
  return (
    <div className="details">
      { singleProduct && (
        <div>
          <h1>{singleProduct?.name}</h1>
          <img src={singleProduct?.img} alt="" />
        </div>
      )}
    </div>
  )
}

export default ProductDetails