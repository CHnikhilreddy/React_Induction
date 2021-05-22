import React ,{ useEffect, useState }from 'react';
import Book from './Book';
const axios = require('axios')

const Books = () => {
    const [books,setBooks] = useState([])
    const [title,setTitle] = useState('')
    const [category,setCategory] = useState('Novel')
    const [cost,setCost] = useState()
    const [date,setDate] = useState();
    const [refresh,setRefresh] = useState(true);
    const [filterCategory,setFilterCategory] = useState('Novel')
    
    const fetchbook = ()=>{
        axios.get('http://localhost:5001/books/').then((res)=>{
            setBooks(res.data)
        })
    }
    useEffect(fetchbook,[])
    useEffect(fetchbook,[refresh])

    const filterhandler = ()=>{
        axios.get('http://localhost:5001/books/'+filterCategory).then((res)=>{
            setBooks(res.data)
        })
    }

    const addBookHandler = ()=>{
        let new_book = {
            title : title,
            category : category,
            date : date,
            cost : cost,
            id : Math.round(Math.random()*1000)
        }
        axios.post('http://localhost:5001/books/',new_book)
        .then((res)=>{setRefresh(!refresh);},(e)=>{console.log("error")})
    }

    const editBook = (id,body)=>{
        axios.put('http://localhost:5001/books/'+id,body)
        .then((res)=>{setRefresh(!refresh);console.log("error")},(e)=>{console.log("error in edit")})
        setRefresh(!refresh);
    }
    
    const removeBook = (id)=>{
        axios.delete('http://localhost:5001/books/'+id)
        .then((res)=>{setRefresh(!refresh)},e=>console.log("error in removal"))
    }
   
    return (
        <div style={{border:'3px dashed #999',padding:'20px'}}>
            <div style={{border:'3px dashed #457',padding:'10px'}}>
                <p>Title : <input type="text" value ={title} onChange={(e)=>setTitle(e.target.value)}></input></p>
                <p>Cost : <input type="number" value ={cost} onChange={(e)=>setCost(e.target.value)}></input></p>
                <p>Date : <input type="number" value ={date} onChange={(e)=>setDate(e.target.value)}></input></p>
                
                <p><select name="category" onChange={(e)=>{setCategory(e.target.value)}}>
                    <option>Novel</option>
                    <option>Comic</option>
                    <option>Friction</option>
                </select></p>

                <button onClick={addBookHandler}>Add</button>
            </div>
            <div style={{border:'3px dashed #694',padding:'10px'}}>
            <p><select name="category" onChange={(e)=>{setFilterCategory(e.target.value)}}>
                    <option>Novel</option>
                    <option>Comic</option>
                    <option>Friction</option>
                </select></p>

                <button onClick={filterhandler}>Filter</button>
            </div>
        {
            books.map((book)=>{
                return <Book key={book.id}
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