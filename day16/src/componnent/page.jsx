function Product() {


    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>{
        return res.json()
    })
    .then((Res)=>{
        console.log(Res);
    })
    .catch((error)=>{
        console.log(error);  
    })


    return(
        <>
            
        </>
    )
}

export default Product;