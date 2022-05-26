import { useState } from 'react';
import './App.css';
import Books from './components/Books'
import PriceSelector from './components/PriceSelector';

const data = [
  { 
    id: '1',
    title: "System Design",
    price: 29.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/31WzkbX9riL._SX331_BO1,204,203,200_.jpg"
  },
  { 
    id: '2',
    title: "Redux in Action",
    price: 19.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/41sscWDYKXL._SX397_BO1,204,203,200_.jpg"
  },
]

function App() {

  const [currency, setCurrency] = useState("US")

  const changeCurrency = () => {
    setCurrency(currency === "US" ? 'EU' : 'US')
  }

  return (
    <div className="App">
      <header>
        <PriceSelector changeCurrency={changeCurrency}/>
      </header>
      <h1>Book store</h1>
      <Books books={data} currency={currency} />
    </div>
  );
}

export default App;
