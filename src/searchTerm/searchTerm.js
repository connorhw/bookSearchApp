import React, {Component} from 'react';

class SearchTerm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'flowers'
        }
    }

    setSearchTerm(searchTerm) {
        this.setState({ searchTerm });
    }
    generateAPIurl(searchTerm) {
        const url = 'https://www.googleapis.com/books/v1/volumes?q='+searchTerm+'&key=AIzaSyACt9oHAQa--btrejsgHW6Fea_NAjDRWOY'
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

    render(){
        return (
            <div className='term_selector'>
                <form>
                    <label htmlFor='term'>Search: </label>
                    <input 
                      type='text' 
                      id='term' 
                      name='term'
                      value={this.state.searchTerm}
                      onChange={e => this.setSearchTerm(e.target.value)}
                      //onClick={event => this.setSearchTerm(event.target.value)}
                      >
                    </input>
                    {this.state.searchTerm}
                <button>Search</button>
                </form>
                
            </div>
        );
    }
}

export default SearchTerm;