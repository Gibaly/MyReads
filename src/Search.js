import React, {Component} from 'react';
import Book from './Book'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class Search extends Component {

    state = {
        books: [],
    }

    bookSearch = (query)  => {
        BooksAPI.search(query).then(books => {
            this.setState({books})
        })
    }
    render() {
        const { onupdateBook} = this.props

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
                                   onChange={(event) => this.bookSearch(event.target.value)}/>
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
                                    {this.state.books.map((book) => (
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

export default Search
