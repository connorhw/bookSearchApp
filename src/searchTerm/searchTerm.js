import React, {Component} from 'react';

class SearchTerm extends Component {
    /*
    changeTerm(value) {
        if(value === ''){
            this.props.termChangeHandler(null);
        }

    }
*/
    render(){

        return (
            <div className='term_selector'>
                <form>
                    <label htmlFor='term'>Search: </label>
                    <input 
                      type='text' 
                      id='term' 
                      name='term'
                      value={this.props.SearchTerm}>
                    </input>
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchTerm;