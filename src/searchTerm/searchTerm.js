import React, {Component} from 'react';
import BookType from '../bookType/bookType';
import BookList from '../bookList/bookList';

class SearchTerm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'flowers',
            printType: [],
            data: [],
            selected: 'None'
            
        }
    }

    setSelectedFilterOption = selected => {
        this.setState({ selected });
        console.log('filter:' + selected) //console the filter type selected
    }
    setSearchTerm(searchTerm) {
        this.setState({ searchTerm });
    }
    generateAPIurl(searchTerm) {
        let url = 'https://www.googleapis.com/books/v1/volumes?q='+searchTerm+'&key=AIzaSyACt9oHAQa--btrejsgHW6Fea_NAjDRWOY'
        if (this.state.selected !== "None") {
               let filterSegment = "&filter=" + this.state.selected;
               url += filterSegment;
                console.log(url) //hit search again in order to see url with filter parameters
        }
        
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Something went wrong, please try again later.')
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                console.log(data); //see original array in console
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
                    setSelectedFilterOption={this.setSelectedFilterOption}
                    selected={this.state.selected}
                />
                <BookList />
             </div>
           );
        }
       
}

export default SearchTerm;