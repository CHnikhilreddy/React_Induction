import React ,{ useEffect, useState }from 'react';
import Book from './Book';
const axios = require('axios')

const Books = () => {
    const [books,setBooks] = useState([])
    const [title,setTitle] = useState('')
    const [form,setForm] = useState({Comments:'',Category:''});
    const [refresh,setRefresh] = useState(true);
    
    const fetchbook = ()=>{
        axios.get('http://localhost:5001/books/').then((res)=>{
            setBooks(res.data)
        })
    }
    useEffect(fetchbook,[])
    useEffect(fetchbook,[refresh])

    const addBookHandler = ()=>{
        axios.post('http://localhost:5001/books/',{id:Math.round(Math.random()*1000),title:title})
        .then((res)=>{setRefresh(!refresh)},(e)=>{console.log("error")})
    }
    const editBook = (id,title)=>{
        axios.put('http://localhost:5001/books/'+id,{title:title})
        .then((res)=>{setRefresh(!refresh)},(e)=>{console.log("error in edit")})
    }
    
    const removeBook = (id)=>{
        axios.delete('http://localhost:5001/books/'+id)
        .then((res)=>{setRefresh(!refresh)},e=>console.log("error in removal"))
    }
   

    return (
        <div style={{border:'3px dashed #999',padding:'20px'}}>
        <input type="text" value ={title} onChange={(e)=>setTitle(e.target.value)}></input>

        <button onClick={addBookHandler}>add</button>
        {
            books.map((book)=>{
                return <Book key={book.id} 
                        title={book.title}
                        book = {book}
                        onEdit = {editBook} 
                        onRemove = {()=>{removeBook(book.id)}}></Book>
            })
        }
    </div>)
}

export default Books


{/*         
        <p><textarea onChange={(e)=>setForm({...form,Comments:e.target.value})}></textarea></p>

        
        <p><select name="category" onChange={(e)=>{setForm({...form,Category:e.target.value})}}>
            <option>Novel</option>
            <option>Comic</option>
            <option>Friction</option>
            </select></p> */}