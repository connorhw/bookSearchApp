import React, {Component} from 'react';
import SearchTerm from '../searchTerm/searchTerm';

class BookSearchApp extends Component {
    render() {
        return (
            <div className='booksearch_app'>
                <h1>Google Book Search</h1>
                <SearchTerm />
            </div>
        )
    }
}

export default BookSearchApp;