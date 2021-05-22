import React ,{ useState }from 'react';

const Bookedit = (props)=>{
    const [title,setTitle] = useState(props.book.title)
    const [category,setCategory] = useState(props.book.category)
    const [cost,setCost] = useState(props.book.cost)
    const [date,setDate] = useState(props.book.date);
    
    return(<div>
        <p>Title : <input type="text" value ={title} onChange={(e)=>setTitle(e.target.value)}></input></p>
        <p>Cost : <input type="number" value ={cost} onChange={(e)=>setCost(e.target.value)}></input></p>
        <p>Date : <input type="number" value ={date} onChange={(e)=>setDate(e.target.value)}></input></p>
    
        <p><select name="category" onChange={(e)=>{setCategory(e.target.value)}}>
            <option value="Non-Friction">Non-Friction</option>
            <option value="Novel">Novel</option>
            <option value="Comic">Comic</option>
            <option value="Friction">Friction</option>
        </select></p>

    <button onClick={()=>{props.onchildedit(props.book.id,{title:title,category:category,cost:cost,date:date});
                            props.onreverseShow();
                            console.log(category)}}>CONFIRM</button>
    <button onClick={()=>{props.onreverseShow()}}>CANCEL</button>
</div>)
}

export default Bookedit