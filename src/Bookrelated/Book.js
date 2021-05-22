import React ,{ useState }from 'react';
import Bookedit from './Bookedit'
import Showbook from './Showbook'

const Book = (props)=>{
    const [showEdit,setShowEdit] = useState(false);

    const childEdit = (id,body)=>{
        props.onEdit(id,body)
    }
    const reverseShow = ()=>{
        setShowEdit(!showEdit)
    }

    // const [title,settitle] = useState(props.book.title)
    return(<div style={{border:'3px dashed #f99',margin:'10px'}}>
        {showEdit && <Bookedit book={props.book} onchildedit = {childEdit} onreverseShow = {reverseShow}/>}
        {!showEdit && <Showbook book={props.book}/>}
        {props.children}
        {/* <h3>{title}</h3>
        <h1>{props.book.category}</h1> */}

        {!showEdit && <div><button key = {"edit"} onClick={()=>{setShowEdit(true)}}>edit</button>
          <button key = {"remove"} onClick={props.onRemove}>Remove</button> </div>}
        
    </div>)
}

export default Book