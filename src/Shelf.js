import React, {Component} from 'react';
import Book from './Book'


class Shelf extends Component {

    render() {

        const {books, onupdateBook} = this.props
        const currentlyReadingBooks = books.filter(shelf => shelf.shelf === `currentlyReading`)
        const wantToReadBooks = books.filter(shelf => shelf.shelf === `wantToRead`)
        const ReadBooks = books.filter(shelf => shelf.shelf === `read`)

        return (
            <div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {currentlyReadingBooks.map((book) => (
                                        <li key={book.id}>
                                           <Book
                                           book={book}
                                           onupdateBook={onupdateBook}
                                           />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {wantToReadBooks.map((book) => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                onupdateBook={onupdateBook}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {ReadBooks.map((book) => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                onupdateBook={onupdateBook}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelf
