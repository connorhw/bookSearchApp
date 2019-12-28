import React, { Component } from 'react';

class BookList extends Component {

    render() {
        return (
            <div className='book_list'>
                <h3>List of books here...</h3>
                <ul id='list'></ul>
            </div>
        );
    }
}

export default BookList;