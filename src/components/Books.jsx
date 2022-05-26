import React from 'react'
import Book from './Book'

export default function Books({books, currency}) {
    return (
        <ul style={{listStyle:"none"}}>

            {
                books.map(book => <Book book={book} currency={currency} />)
            }
        </ul>
    )
}
