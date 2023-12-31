import React, { useEffect, useState } from 'react'

const Productc = () => {

    const [product, setProduct] = useState([])
    const [cartCount, setCartCount] = useState(0)

    

  
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

const AddHandle = ()=>{
    setCartCount(cartCount + 1)
}


  return (

    <>
    <div className='Nav'>
        <h1>Home</h1>
        <a href="CartPage.jsx">
        <h1>Cart {cartCount} </h1>
        </a>
        <h1>About</h1>


    </div>
  
    <div className='main'>
        {
            product.map((item)=>(
                <div className='Card'>
                    <img src={item.image} alt="" />
                <h1 key={item.id}>{item.title}</h1>
                <h2>{item.price}</h2>
                <button onClick={AddHandle} className='btn'>ADD</button>
                </div>
     ))
        }

    </div>
    </>
  )
}

export default Productc