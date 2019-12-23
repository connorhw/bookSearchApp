import React, { Component } from 'react';

class PrintType extends Component {

    render() {
        return(
            <div className='print_type'>
                <label htmlFor='print'>Print Type: </label>
                <select 
                  id='print'
                  name='print'>
                  <option value='None'>All</option>
                </select>
            </div>
        )
    }
}

export default PrintType;