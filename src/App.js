import { useState } from 'react';
import './App.css';
import Books from './components/Books'
import PriceSelector from './components/PriceSelector';
import { CurrencyProvider } from './hooks/useCurrency';
import Cart from './components/Cart';
import { CartProvider } from './hooks/useCart';

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

  return (
    <CurrencyProvider>
      <CartProvider>
        <div className="App">
          <header>
            <PriceSelector />
            <Cart/>
          </header>
          <h1>Book store</h1>
          <Books books={data} />
        </div>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;
