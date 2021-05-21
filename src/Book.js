import React ,{ useState }from 'react';

const Book = (props)=>{
    const [showEdit,setShowEdit] = useState(false); 
    // const some =()=>{
    //     setShowEdit(true);
    // }
    const [title,settitle] = useState(props.title)
    return(<div style={{border:'3px dashed #f99',margin:'10px'}}>
        {props.children}
        <h3>{title}</h3>
        
        {showEdit && <input type="text" 
        onChange = {(e)=>{settitle(e.target.value)}}
        onBlur={(e)=>{props.onEdit(props.book.id,e.target.value);setShowEdit(false)}}></input>}
        {!showEdit && <button key = {"edit"} onClick={()=>{setShowEdit(true)}}>edit</button>}
        <button key = {"remove"} onClick={props.onRemove}>Remove</button>
        
    </div>)
}

export default Book