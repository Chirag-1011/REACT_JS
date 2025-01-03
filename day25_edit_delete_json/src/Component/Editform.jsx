import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';



const Editform = () => {

    let {dc} = useParams() 

    let dcbhai = useNavigate()


     var [Data, setData] = useState({
            Title: "",
            Price: '',
            Img: "" 
        })
        function handdel(h) {
            var {value,name} = h.target
            setData({ ...Data, [name]: value })
    
        }

         useEffect(()=>{
              fetch(`http://localhost:3000/product/${dc}`)
              .then((res)=>res.json())
              .then((Res)=>{
                  // console.log(Res);
                  setData(Res)
                })
                .catch((err)=>{
                  console.log(err);
                })
                
              },[])

              let EditData = (ee)=>{

                ee.preventDefault()

                fetch(`http://localhost:3000/product/${dc}`,{
                    method : "PUT",
                    body : JSON.stringify(Data)
                })

                alert("DATA EDIT SUCCESSFULL..")

                dcbhai("/product")

              }

    return (
        <>
        <div className='bapo'>
            <div className="bachu">
                <h1>Edit Data</h1>
                <form action="" onSubmit={EditData}>
                    <input value={Data.Title} className='input' type="text" required name='Title' placeholder='Enter Product Title' onChange={handdel}/> <br />
                    <input value={Data.Price} className='input' type="text" required name='Price' placeholder='Enter Product Price' onChange={handdel } /> <br />
                    <input value={Data.Img} className='input' type="text" required name='Img' placeholder='Enter Product Imgage URL' onChange={handdel } /> <br />
                    <input id='subb' className='input' type="submit" value="EDIT DATA"  />
                </form>
            </div>
              </div>
          </>
    );
}

export default Editform;
