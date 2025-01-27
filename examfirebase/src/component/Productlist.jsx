import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc, } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/fire'

function Productlist() {
    var [Data, setData] = useState({
        Title: "",
        Price: "",
        Img: ""
    })
    let [EditId, SetEditId] = useState("")

    let [arr, setarr] = useState([])

    let User = collection(db, "User")

    async function getData() {

        let AddDatata = await getDocs(User)

        // console.log(AddDatata);

        let dc = AddDatata.docs.map((e) => {
            return { id: e.id, ...e.data() }
        })

        setarr(dc)




    }

    // console.log(arr);


    useEffect(() => {
        getData()
    }, [])


    function handdel(h) {

        var { value, name } = h.target
        setData({ ...Data, [name]: value })
    }
    function send(hi) {
        hi.preventDefault()

        if(EditId == ""){
            let data = addDoc(User, Data)

            alert("Data Add ")

            setData({
                Title: "",
                Price: "",
                Img: ""
            })
        }
        else{
            let Editdata = doc(db,"User",EditId)

            updateDoc(Editdata,Data)

            alert("Data Edited ..")
            SetEditId("")

            setData({
                Title: "",
                Price: "",
                Img: ""
            })
        }
        getData()



      

    }

    let HandleClick = (Delid)=>{
        let Deldata = doc(db,"User",Delid)

        deleteDoc(Deldata)
        getData()
    }
    let HandleEdit = (EditId)=>{

        console.log(EditId);
        
        arr.forEach((el)=>{
            if(EditId == el.id){
                 setData({
                    Title: el.Title ,
                    Price: el.Price,
                    Img: el.Img
                })
            }
        })
        SetEditId(EditId)


    }



    return (
        <>
            <div className='d'>
                <div className="dc"><br /><br />
                    <h1>Enter Product Data</h1>
                    <form action="" onSubmit={send}><br />
                        <input type="text" value={Data.Title} required name='Title' placeholder='Enter Product Title' onChange={handdel} /> <br /><br />
                        <input type="text" value={Data.Price} required name='Price' placeholder='Enter Product Price' onChange={handdel} /> <br /><br />
                        <input type="text" value={Data.Img} required name='Img' placeholder='Enter Product Imgage URL' onChange={handdel} /> <br /><br />
                       
                        { EditId == "" ?  <input type="submit" /> :  <input type="submit" value="Edit" />  }
                    </form>
                </div>
            </div>

            {
                arr.map((el) => {
                    return <div>
                        <h2>{el.Title}</h2>
                        <h2>{el.Price}</h2>
                        <img src={el.Img} alt="" />
                        <button onClick={()=>HandleEdit(el.id)}>EDIT</button>
                        <button onClick={()=>HandleClick(el.id)}>DELETE</button>
                    </div>
                })
            }
        </>
    )
}

export default Productlist