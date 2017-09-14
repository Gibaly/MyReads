import React, {Component} from 'react';

class Read extends Component {

    render() {

        const {books, onupdateBook} = this.props
        const ReadBooks = books.filter(shelf => shelf.shelf === `read`)

        return (
            <div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {ReadBooks.map((book) => (
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{
                                                        width: 128,
                                                        height: 188,
                                                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                    }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select
                                                            onChange={(event) => onupdateBook(book, event.target.value)}
                                                            value={book.shelf}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.authors}</div>
                                            </div>
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

export default Read