import React, { Component } from 'react'
import { Route,Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WantRead from './WantRead'
import Read from './Read'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'



class BooksApp extends Component {
  state = {

    books:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    updateBook = (book,shelf) =>{
      BooksAPI.update(book,shelf).then(r => {
          this.setState((prevState) =>{
              let idx = prevState.books.map(b => b.id).indexOf(book.id);
              prevState.books[idx].shelf = shelf;
              return prevState;
          })
      })
    }

  render() {
    return (
      <div className="app">
          {console.log(this.state.books)}
          <Route  path='/search' render={() => (
              <div>
                  <Search
                      books={this.state.books}
                      onupdateBook={this.updateBook}
                  />
              </div>
          )}/>
          <div>
              <Route exact path='/' render={() => (
              <div className="list-books">
                  <div className="list-books-title">
                      <h1>MyReads</h1>
                  </div>
                    <CurrentlyReading
                         books={this.state.books}
                         onupdateBook={this.updateBook}
                    />
                    <WantRead
                         books={this.state.books}
                         onupdateBook={this.updateBook}
                    />
                    <Read
                         books={this.state.books}
                         onupdateBook={this.updateBook}
                    />

                </div>
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
