import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from '../store/CartSlice'


const Productc = ({title,name,price,image}) => {
    
    const itemsCount = useSelector((state)=> state.cart )
    const [product, setProduct] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const dispatch = useDispatch()

    

  
    const FetchProducts = async()=>{
        try {
            const data = await fetch('https://fakestoreapi.com/products');
         const res =  await data.json()
         setProduct(res)         
        } catch (error) {
            console.log(error)
            
        }
         

    }

    useEffect(()=>{
        FetchProducts()
    },[])

const AddHandle = (item)=>{
   
    dispatch(addItem(item))
   
    
}


  return (

    <>
    <div className='Nav'>
        <h1>Home</h1>
        <h1>About</h1>
        <Link to="/cart">
        <h1>Cart {itemsCount.length} </h1>
        </Link>
        
    
        


    </div>
  
    <div className='main'>
        {
            product.map((item)=>(
                <div key={item.id} className='Card'>
                    <img src={item.image} alt="" />
                <h1 key={item.id}>{item.title}</h1>
                <h2>{item.price}</h2>
                <button onClick={()=>AddHandle(item)} className='btn'>ADD</button>
                </div>
     ))
        }

    </div>
    </>
  )
}

export default Productc