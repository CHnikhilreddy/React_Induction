import React ,{ useState }from 'react';

const Book = (props)=>{
    const [showEdit,setShowEdit] = useState(false); 
    const some =()=>{
        setShowEdit(true);
    }
    return(<div style={{border:'3px dashed #f99',margin:'10px'}}>
        <h3>{props.title}</h3>
        {showEdit && <input type="text" onBlur={(e)=>{props.onEdit(props.book.id,e.target.value);setShowEdit(false)}}></input>}
        {/* {showEdit && <p>hello world</p>} */}
        {/* <button key = {"edit"} onClick={setShowEdit(true)}>edit</button> */}
        <button key = {"remove"} onClick={props.onRemove}>Remove</button>
        <button key = {"edit"} onClick={some}>edit</button>
    </div>)
}

export default Book