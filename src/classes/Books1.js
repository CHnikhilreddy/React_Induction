import {Component,useEffect} from 'react'
import Book1 from './Book1';
const axios = require('axios')


export default class Books1 extends Component {

    state = {
        books : [],
        title : '',
        refresh: false
    }

    fetchBooks = () =>{
        axios.get('http://localhost:5001/books/')
        .then((res)=>{this.setState({books:res.data})},(e)=>{console.log("error")})
    }

    componentDidMount(){
        this.fetchBooks()
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.refresh!==this.state.refresh){
            this.fetchBooks()
        }
    }

    addBookHandler=()=>{
        const bookshop = [...this.state.books,{id:Math.round(Math.random()*1000),title:this.state.title}]
        this.setState({books:bookshop})
        console.log(this.state.books)
    }

    editBook = (id,title)=>{
        // const bookcopy = [...this.state.books]
        // const filtered = bookshop.filter(book=>book.id!==id)
        // this.setState({books:filtered})
        // axios.put('http://localhost:5001/books/'+id,{title:title})
        // .then((res)=>{setRefresh(!refresh)},(e)=>{console.log("error in edit")})
    }
            
    removeBook = (id)=>{
        const bookcopy = [...this.state.books]
        const filtered = bookcopy.map((book)=>{
            return id === book.id ? {...book,title:this.state.title}: {...book}})
        this.setState({books:filtered})
        axios.delete('http://localhost:5001/books/'+id)
        .then((res)=>{this.setState({refresh:!this.state.refresh})},e=>console.log("error in removal"))
    }
    
    render(){
        return (
            <div style={{border:'3px dashed #999',padding:'20px'}}>
            <input type="text" value ={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}></input>
    
            <button onClick={this.addBookHandler}>add</button>
            {
                this.state.books.map((book)=>{
                    return <Book1 key={book.id} 
                            title={book.title}
                            book = {book}
                            // onEdit = {editBook} 
                            onRemove = {()=>{this.removeBook(book.id)}}
                            ></Book1>
                })
            }
        </div>)
    }
}

// const Books = () => {
//     const [books,setBooks] = useState([])
//     const [title,setTitle] = useState('')
//     const [form,setForm] = useState({Comments:'',Category:''});
//     const [refresh,setRefresh] = useState(true);
    
//     const fetchbook = ()=>{
//         axios.get('http://localhost:5001/books/').then((res)=>{
//             setBooks(res.data)
//         })
//     }
//     useEffect(fetchbook,[])
//     useEffect(fetchbook,[refresh])

//     const addBookHandler = ()=>{
//         axios.post('http://localhost:5001/books/',{id:Math.round(Math.random()*1000),title:title})
//         .then((res)=>{setRefresh(!refresh)},(e)=>{console.log("error")})
//     }
//     const editBook = (id,title)=>{
//         axios.put('http://localhost:5001/books/'+id,{title:title})
//         .then((res)=>{setRefresh(!refresh)},(e)=>{console.log("error in edit")})
//     }
    
//     const removeBook = (id)=>{
//         axios.delete('http://localhost:5001/books/'+id)
//         .then((res)=>{setRefresh(!refresh)},e=>console.log("error in removal"))
//     }
   

//     return (
//         <div style={{border:'3px dashed #999',padding:'20px'}}>
//         <input type="text" value ={title} onChange={(e)=>setTitle(e.target.value)}></input>

//         <button onClick={addBookHandler}>add</button>
//         {
//             books.map((book)=>{
//                 return <Book key={book.id} 
//                         title={book.title}
//                         book = {book}
//                         onEdit = {editBook} 
//                         onRemove = {()=>{removeBook(book.id)}}></Book>
//             })
//         }
//     </div>)
// }

// export default Books


{/*         
        <p><textarea onChange={(e)=>setForm({...form,Comments:e.target.value})}></textarea></p>

        
        <p><select name="category" onChange={(e)=>{setForm({...form,Category:e.target.value})}}>
            <option>Novel</option>
            <option>Comic</option>
            <option>Friction</option>
            </select></p> */}