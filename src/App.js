import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Books from './Books';

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
        <Books/>
    </div>
  );
}

export default App;
