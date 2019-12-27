import React, {Component} from 'react';
import BookType from '../bookType/bookType';

//import PrintType from '../printType/printType';

class SearchTerm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'flowers',
            printType: [],
            data: [],
            selected: null
            
        }
    }

    setSelectedFilterOption = selected => {
        this.setState({ selected });
        console.log('filter:' + selected)
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
                this.setState({data: data.items})
            });
    }
    onSubmit = e => {
           e.preventDefault();
           this.generateAPIurl(this.state.searchTerm);
         };

    setSelectedPrintType(printType) {
        this.setState({ printType });
    }
         render() {
           return (
             <div className="term_selector">
               <form onSubmit={this.onSubmit}>
                 <label htmlFor="term">Search: </label>
                 <input
                   type="text"
                   id="term"
                   name="term"
                   value={this.state.searchTerm}
                   onChange={e => this.setSearchTerm(e.target.value)}/>
                 <button>Search</button>
               </form><br />
                <BookType 
                    entireBookList={this.state.data}
                    setSelectedFilterOption={this.state.selected}
                    selected={this.state.selected}
                />
             </div>
           );
        }
       
}

export default SearchTerm;