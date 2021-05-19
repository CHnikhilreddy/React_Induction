import React, { useState } from 'react';

const Product = (props) =>{
    const [ui,setUi] = useState({backgroundColor:'#ddd'})
   return (
       <React.Fragment>
           <div style = {ui}>
        <h3 style={{backgroundColor:'green'}}>{props.name}</h3>
        <p>{props.price}</p>
        <p>{props.qty}</p>
        <button onClick = {()=>{setUi({backgroundColor:'blue'})}}>submit</button>
        </div>
        </React.Fragment>
   )
}

export default Product;