import React from 'react'

function ProductList(props) {

  console.log(props.arr);
  
  return (
    <div>
      {   props.arr.map((el)=>{
        return <div id='prdiv'>
            <img src={el.img} id='imgg'  alt="" />
            <p>{el.title}</p>
            <p>{el.price}</p>
        </div> 
        
      })}
    </div>
  )
}

export default ProductList