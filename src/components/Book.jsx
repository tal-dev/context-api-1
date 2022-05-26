import React from 'react'

export default function Book({book, currency}) {
    const {image, title, price } = book
    const currencySymbol = currency === "US" ? '$' : '€'
    return (
        <li style={{textDecoration:"none"}}>
            <img src={image} alt="book-image" />
            <div className='title'>{title}</div>
            <div className='price'>{currencySymbol}{price}</div>
        </li>
    )
}
