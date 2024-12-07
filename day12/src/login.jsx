import { useState } from "react";

function RenderData({ data }) {

    console.log(data);
    
    return (
        <>
            {
                 data.map((el) => {
                    return <div>
                        <p id="infor">UserName : {el.user}</p>
                        <p id="infor">Password :{el.email}</p>
                        <p id="infor">PassWord : {el.password}</p>
                    </div>
                })
            }
        </>
    )

}
export default RenderData;