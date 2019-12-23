import React, {Component} from 'react';
import SearchTerm from '../searchTerm/searchTerm';
import PrintType from '../printType/printType';
import BookType from '../bookType/bookType';
import BookList from '../bookList/bookList';

class BookSearchApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'flowers'
        };
    
    /* GET: key word search + in-author search
        https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=
    */

    const url = 'https://www.googleapis.com/books/v1/volumes?q='+this.state.searchTerm+'&key=AIzaSyACt9oHAQa--btrejsgHW6Fea_NAjDRWOY'
    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error('Something went wrong, please try again later.')
            }
            return response;
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    
    }

    setSearchTerm(searchTerm) {
        this.setState({ searchTerm });
    }

    render() {
        return (
            <div className='booksearch_app'>
                <h1>Google Book Search</h1>
                <SearchTerm 
                  termChangeHandler={searchTerm => this.setSearchTerm(searchTerm)}/>
                <PrintType />
                <BookType />
                <BookList />
            </div>
        )
    }
}

export default BookSearchApp;