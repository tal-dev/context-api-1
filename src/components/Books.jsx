import React from 'react'
import Book from './Book'

export default function Books({books}) {
    return (
        <ul style={{listStyle:"none"}}>

            {
                books.map(book => <Book book={book} />)
            }
        </ul>
    )
}
