import React, {Component} from 'react';
import Shelf from './Shelf'


class BookList extends Component {

    render() {

        const {books ,onupdateBook} = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelf
                    books={books}
                    onupdateBook={onupdateBook}
                />
            </div>
        )
    }
}

export default BookList
