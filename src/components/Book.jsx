import React from 'react'
import useCurrency from '../hooks/useCurrency'
import { useCart } from '../hooks/useCart'

export default function Book({book}) {
    const {image, title, price, id } = book
    const { currency } = useCurrency()
    const { addItem, removeItem, addedItems} = useCart();
    const isAdded = addedItems.some(ele => ele.id === id)
    const currencySymbol = currency === "US" ? '$' : '€'
    return (
        <li style={{textDecoration:"none"}}>
            <img src={image} alt="book-image" />
            <div className='title'>{title}</div>
            <div className='price'>{currencySymbol}{price}</div>
            <button onClick={!isAdded ? () => addItem(book) : () => removeItem(book)}>{!isAdded ? "Add to cart" : "Remove from cart"}</button>
        </li>
    )
}
