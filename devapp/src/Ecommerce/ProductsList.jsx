import React, { useEffect, useState } from 'react'
import './Product.css'
import { useCart } from '../ContextAPI/CartContext'
import Cart from './Cart'

const ProductsList = () => {
      const {cart,addToCart}=useCart()
    const[products , setProducts]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data)=>setProducts(data))
    },[])
  return (
    <div>
      <div className='grid'>
        {
            products.map((product , key)=>{
                return(
                    
                    <div key={product.id} style={{border:"1px solid balck"}}>
                    <img src={product.image} alt="" width="200px" />
                   <p>{product.title}</p>
                   <p>{product.price}</p>
             <button onClick={()=>addToCart(product)}>Add to Cart</button>
                    </div>
                )
            })
        }
      </div>

      <hr />
      <Cart/>
    </div>
  )
}

export default ProductsList
