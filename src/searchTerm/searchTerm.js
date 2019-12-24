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
                      onClick={event => this.props.termChangeHandler(event.target.value)}>
                    </input>
                <button>Search</button>
                </form>
                {console.log(this.props.termChangeHandler)}
            </div>
        );
    }
}

export default SearchTerm;