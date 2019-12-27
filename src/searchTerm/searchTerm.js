import React, {Component} from 'react';
import PrintType from '../printType/printType';

//import PrintType from '../printType/printType';

class SearchTerm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'flowers',
            printType: [],
            data: [],
            
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
               </form>
                <PrintType 
                    entireBookList={this.state.data}
                    changePrintTypeHandler={printType => this.setSelectedPrintType(printType)}
                    />
             </div>
           );
        }
       
}

export default SearchTerm;