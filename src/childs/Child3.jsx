import React from 'react'

export default function Child3(props) {
    console.log('====================================');
    console.log("child3 :> ",props);
    console.log('====================================');
    const {setter}=props
    return (
        <div>
            <h1>CHILD3</h1>
            <input type="text" name="name" onChange={(e)=>{setter("<<"+e.target.value +">>")}} />
           
        </div>
    )
}
