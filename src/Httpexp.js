const { useState, useEffect } = require("react")
// import axios from 'axios'
const axios = require('axios')


const Httpexp = (props)=>{
    const [books,setBooks] = useState([])
    useEffect(()=>{
        // fetch('http://localhost:5001/books/')
        // .then(Response => Response.json())
        // .then((data)=>setBooks(data))
        axios.get('http://localhost:5001/books/').then((res)=>{
            setBooks(res.data)
        })
    },[])
    return(<div>{
        books.map(b=><p key={b.title}>{b.title}</p>)
    }</div>) 
    // (<p>hello</p>)
    // <p>{books[0].title}</p>)
}

export default Httpexp