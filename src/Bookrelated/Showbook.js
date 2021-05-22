import React ,{ useState }from 'react';

const Showbook = (props)=>{
    return(<div>
        <h3>Title : {props.book.title}</h3>
        <h3>Category : {props.book.category}</h3>
        </div>
    )
}
 
export default Showbook