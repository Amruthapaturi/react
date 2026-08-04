import React from 'react'
import App1 from './App1'
import App2 from './App2'

const Cart = () => {

    const addToCart =()=>{
        alert("Product Added to cart")
    }
  return (
    <div>
      <App1 add={addToCart}/>
      <App2 add={addToCart}/>
    </div>
  )
}

export default Cart
