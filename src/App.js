import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Books from './Bookrelated/Books';
import Users from './Users'
import Userinfo from './Userinfo'
import Books1 from './classes/Books1'

function App() {

  const prods = [
    {name: "five star" , price: "5",qty: "100"},
    {name: "dirymilk" , price: "7",qty:"200"}
  ]
  return (
    <div className="App">
        {/* {
          prods.map((prod)=>{
            return <Product key = { prod.name}name={prod.name} price={prod.price} qty={prod.qty}/>
          })
        } */}
        {/* <Books/> */}
        <Books/>
    </div>
  );
}

export default App;
