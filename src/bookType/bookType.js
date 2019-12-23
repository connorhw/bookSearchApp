import React, { Component } from 'react';

class BookType extends Component {
    render() {
        return (
            <div className='book_type'>
                <label htmlFor='book-type'>Book Type: </label>
                <select
                  id='book-type'
                  name='book-type'>
                  <option value='None'>No Filter</option>
                </select>
            </div>
        );
    }
}

export default BookType;