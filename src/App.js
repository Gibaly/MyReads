import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import BookList from './BookList'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
    state = {
        books: [],
    }
    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(r => {
            this.setState((prevState) => {
                let idx = prevState.books.map(b => b.id).indexOf(book.id);
                if(idx > 0) {
                    prevState.books[idx].shelf = shelf;
                    return prevState;
                }
                else{
                    prevState.books.push(book);
                    return prevState;
                }
            })
        })
        this.forceUpdate();
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    render() {
        return (
            <div className="app">
                {console.log(this.state.books)}
                <Route path='/search' render={() => (
                    <div>
                        <Search
                            onupdateBook={this.updateBook}
                        />
                    </div>
                )}/>
                <div>
                    <Route exact path='/' render={() => (
                        <BookList
                            books={this.state.books}
                            onupdateBook={this.updateBook}
                        />

                    )}/>
                </div>
                )
                <div className="open-search">
                    <Link
                        to='/search'
                        className='add-contact'
                    >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BooksApp
