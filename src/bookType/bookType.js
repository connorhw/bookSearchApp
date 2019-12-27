import React, { Component } from 'react';

class BookType extends Component {
    
    selectedOptionHandler = event => {
        console.log(event.target)
        this.props.setSelectedFilterOption(event.target.value)
    }

    render() {
        console.log(this.props.entireBookList)
        return (
            <div className='book_type'>
                <label htmlFor='book-type'>Book Type: </label>
                <select
                  id='book-type'
                  name='book-type'
                  onChange={this.selectedOptionHandler}
                  value={this.props.selected}>
                  <option value='None'>No Filter</option>
                  <option value='ebooks'>All eBooks</option>
                  <option value='free-ebooks'>Free eBooks</option>
                  <option value='paid-ebooks'>Paid eBooks</option>
                  <option value='full'>Full Text</option>
                  <option value='partial'>Partial Text</option>
                </select>
            </div>
        );
    }
}

export default BookType;