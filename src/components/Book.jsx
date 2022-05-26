import React from 'react'
import useCurrency from '../hooks/useCurrency'

export default function Book({book}) {
    const {image, title, price } = book
    const { currency } = useCurrency()
    const currencySymbol = currency === "US" ? '$' : '€'
    return (
        <li style={{textDecoration:"none"}}>
            <img src={image} alt="book-image" />
            <div className='title'>{title}</div>
            <div className='price'>{currencySymbol}{price}</div>
        </li>
    )
}
