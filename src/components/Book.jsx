import React from 'react'
import { useCart } from '../hooks/useCart'
import { useCurrency } from '../hooks/useCurrency'

export default function Book({book}) {
    const {image, title, price } = book
    const {currency } = useCurrency()
    const currencySymbol = currency === "US" ? '$' : '€'
    const { addedItems, removeItem, addItem } = useCart() 
    const isAdded = addedItems.some(ele => ele.id === book.id)
    return (
        <li style={{textDecoration:"none"}}>
            <img src={image} alt="book-image" />
            <div className='title'>{title}</div>
            <div className='price'>{currencySymbol}{price}</div>
            <button onClick={isAdded ? () => removeItem(book) : () => addItem(book)}>{isAdded ? 'Remove from Cart' : 'Add to cart'}</button>
        </li>
    )
}
