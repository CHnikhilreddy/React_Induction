import React ,{ useState }from 'react';
import Book from './Book';

const Books = () => {
    const [books,setBooks] = useState([])
    const [title,setTitle] = useState('')
    const removeBook = (id)=>{
        console.log("working removal"+id)
        const bookscopy = [...books]
        const filtered = bookscopy.filter((book)=>book.id !== id)
        setBooks(filtered);
    }
    const editBook = (id,title)=>{
        // const found = books.find(book => book.id === id)
        const bookscopy = [...books]
        const filtered = bookscopy.filter((book)=>book.id !== id)
        const newone = [...filtered,{id:id,title:title}]
        setBooks(newone)
        
    }
    return (
        <div style={{border:'3px dashed #999',padding:'20px'}}>
        <input type="text" value ={title} onChange={(e)=>setTitle(e.target.value)}></input>
        <button onClick={()=>{
            const bookscopy = [...books,{id:Math.round(Math.random()*100),title:title}]
            setBooks(bookscopy)
            }}>add</button>
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