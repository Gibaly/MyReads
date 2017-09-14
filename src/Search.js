import React, {Component} from 'react';
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'

class Search extends Component {

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }

    render() {
        const {books, onupdateBook} = this.props
        const {query} = this.state

        let showingBooks
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter((book) => match.test(book.title))
        } else {
            showingBooks = books
        }

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link
                            className="close-search"
                            to='/'
                        >Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text"
                                   placeholder="Search by title or author"
                                   value={query}
                                   onChange={(event) => this.updateQuery(event.target.value)}/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {showingBooks.map((book) => (
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

export default Search
