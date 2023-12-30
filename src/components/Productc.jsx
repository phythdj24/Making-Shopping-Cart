import React, { useEffect, useState } from 'react'

const Productc = () => {

    const [product, setProduct] = useState([])

  
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




  return (

    <>
    <div className='Nav'>
        <h1>Home</h1>
        <h1>Cart</h1>


    </div>
  
    <div className='main'>
        {
            product.map((item)=>(
                <div className='Card'>
                    <img src={item.image} alt="" />
                <h1 key={item.id}>{item.title}</h1>
                <h2>{item.price}</h2>
                <button className='btn'>ADD</button>
                </div>
     ))
        }

    </div>
    </>
  )
}

export default Productc