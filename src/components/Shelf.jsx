import React from 'react'
import '../css/App.css'
import Book from './Book'

const Shelf = ({name, books}) => {
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(book => (
                    <Book key={book.id} book={book} mode="update" />
                ))}
            </ol>
        </div>
        </div>
  )
}

export default Shelf