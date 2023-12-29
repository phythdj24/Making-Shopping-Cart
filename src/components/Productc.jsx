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
    <div>
        {
            product.map((item)=>(
                <>
                <h1 key={item.id}>{item.title}</h1>
                <h2>{item.price}</h2>
                </>
     ))
        }

    </div>
  )
}

export default Productc