import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveItem } from '../store/CartSlice'

const CartPage = () => {
  const prodcuts = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const RemoveProduct =(remove)=>{
    dispatch(RemoveItem(remove))
  }



  return (
    <div>
        <h3>Cart</h3>
        <div className="cartWrapper">
          {
prodcuts.map(product => (
  <div key={product.id} className='cartCard'>
    <img src={product.image} alt="prodcut" />
    <h5>{product.title}</h5>
    <h5>{product.price}</h5>
    <button onClick={() => RemoveProduct(product.id)} className='btn'>Remove</button>


  </div>
))
          }

          
        </div>
        
    </div>
  )
}

export default CartPage