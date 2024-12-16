const ProductList = ({arr,dd})=>{
    return (
        <> 
         <h1>{dd}</h1>
         {
           arr.map((el)=>{
              return <h1>{el.title}</h1>
            })
         }
        </> 
    )
}